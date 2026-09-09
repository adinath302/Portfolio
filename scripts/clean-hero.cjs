const sharp = require('sharp')
const path = require('path')

const SRC = path.join(
  process.env.USERPROFILE,
  'Downloads',
  'ChatGPT Image Aug 13, 2026, 10_16_31 AM.png',
)

// Working window around the monitor screen, generous margin past the bloom.
const WX = 390, WY = 430, WW = 220, WH = 235

// Clean on-screen donor strip (left of the bloom) used to measure CRT noise.
const NX = 342, NY = 470, NW = 70, NH = 150

;(async () => {
  const img = sharp(SRC).removeAlpha()
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true })
  const W = info.width, H = info.height, C = info.channels
  console.log('source', W, 'x', H, 'channels', C)

  const at = (x, y, c) => data[(y * W + x) * C + c]

  // ---- 1. build the mask: red-dominant pixels inside the window, dilated ----
  const mask = new Uint8Array(WW * WH)
  let raw = 0
  for (let y = 0; y < WH; y++) {
    for (let x = 0; x < WW; x++) {
      const gx = WX + x, gy = WY + y
      const r = at(gx, gy, 0), g = at(gx, gy, 1), b = at(gx, gy, 2)
      if (r > 55 && r - Math.max(g, b) > 18) { mask[y * WW + x] = 1; raw++ }
    }
  }
  const R = 6
  const dil = new Uint8Array(WW * WH)
  for (let y = 0; y < WH; y++) {
    for (let x = 0; x < WW; x++) {
      if (!mask[y * WW + x]) continue
      for (let dy = -R; dy <= R; dy++) {
        for (let dx = -R; dx <= R; dx++) {
          if (dx * dx + dy * dy > R * R) continue
          const ny = y + dy, nx = x + dx
          if (ny >= 0 && ny < WH && nx >= 0 && nx < WW) dil[ny * WW + nx] = 1
        }
      }
    }
  }
  let holes = 0
  for (let i = 0; i < dil.length; i++) if (dil[i]) holes++
  console.log('mask: raw', raw, '-> dilated', holes, `(${((holes / (WW * WH)) * 100).toFixed(1)}% of window)`)

  // ---- 2. measure CRT noise sigma from the clean donor strip ----
  const sigma = [0, 0, 0]
  for (let c = 0; c < 3; c++) {
    let n = 0, s = 0
    for (let y = 2; y < NH - 2; y++) {
      for (let x = 2; x < NW - 2; x++) {
        const gx = NX + x, gy = NY + y
        let m = 0
        for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) m += at(gx + dx, gy + dy, c)
        m /= 25
        const d = at(gx, gy, c) - m
        s += d * d; n++
      }
    }
    sigma[c] = Math.sqrt(s / n)
  }
  console.log('CRT noise sigma per channel', sigma.map((v) => v.toFixed(2)).join(', '))

  // ---- 3. Laplace (diffusion) inpaint each channel inside the mask ----
  const ITER = 1500
  for (let c = 0; c < 3; c++) {
    const buf = new Float64Array(WW * WH)
    // seed with mean of the known pixels bordering the hole
    let bs = 0, bn = 0
    for (let y = 1; y < WH - 1; y++) {
      for (let x = 1; x < WW - 1; x++) {
        const i = y * WW + x
        if (dil[i]) continue
        if (dil[i - 1] || dil[i + 1] || dil[i - WW] || dil[i + WW]) {
          bs += at(WX + x, WY + y, c); bn++
        }
      }
    }
    const seed = bn ? bs / bn : 0
    for (let y = 0; y < WH; y++) for (let x = 0; x < WW; x++) {
      const i = y * WW + x
      buf[i] = dil[i] ? seed : at(WX + x, WY + y, c)
    }
    // Jacobi iterations on the interior of the hole
    const next = new Float64Array(buf)
    for (let k = 0; k < ITER; k++) {
      for (let y = 1; y < WH - 1; y++) {
        for (let x = 1; x < WW - 1; x++) {
          const i = y * WW + x
          if (!dil[i]) continue
          next[i] = (buf[i - 1] + buf[i + 1] + buf[i - WW] + buf[i + WW]) * 0.25
        }
      }
      buf.set(next)
    }
    // write back with matched noise so the patch is not suspiciously smooth
    for (let y = 0; y < WH; y++) {
      for (let x = 0; x < WW; x++) {
        const i = y * WW + x
        if (!dil[i]) continue
        // Box-Muller gaussian
        const u = Math.random() || 1e-9, v = Math.random()
        const nz = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v) * sigma[c]
        const val = Math.max(0, Math.min(255, Math.round(buf[i] + nz)))
        data[((WY + y) * W + (WX + x)) * C + c] = val
      }
    }
  }

  const cleaned = sharp(data, { raw: { width: W, height: H, channels: C } })

  await cleaned
    .clone()
    .jpeg({ quality: 72, mozjpeg: true, progressive: true })
    .toFile('C:/Code/portfolio2.0/public/hero-bg.jpg')

  // zoomed crops of the monitor for visual QA
  const box = { left: 300, top: 400, width: 400, height: 300 }
  await sharp(SRC).removeAlpha().extract(box).resize(800).png().toFile('/tmp/qa-before.png')
  await cleaned.clone().extract(box).resize(800).png().toFile('/tmp/qa-after.png')

  console.log('wrote public/hero-bg.jpg + /tmp/qa-before.png + /tmp/qa-after.png')
})()
