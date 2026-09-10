import React, { useRef, useCallback } from 'react'

const Tilt = ({ children, className, max = 7 }) => {
  const ref = useRef(null)
  const raf = useRef(null)
  const reduced = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ).current

  const applyTilt = useCallback(
    (clientX, clientY) => {
      if (reduced) return
      const el = ref.current
      if (!el) return
      if (raf.current) cancelAnimationFrame(raf.current)
      raf.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const x = (clientX - rect.left) / rect.width - 0.5
        const y = (clientY - rect.top) / rect.height - 0.5
        el.style.transform = `perspective(900px) rotateX(${y * -max}deg) rotateY(${x * max}deg) scale3d(1.02,1.02,1.02)`
      })
    },
    [max, reduced],
  )

  const onMouseMove = useCallback(
    (e) => applyTilt(e.clientX, e.clientY),
    [applyTilt],
  )

  const onTouchMove = useCallback(
    (e) => {
      const t = e.touches[0]
      if (t) applyTilt(t.clientX, t.clientY)
    },
    [applyTilt],
  )

  const onLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    if (raf.current) cancelAnimationFrame(raf.current)
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      onTouchMove={onTouchMove}
      onTouchEnd={onLeave}
      onTouchCancel={onLeave}
      className={className}
      style={{
        transition: 'transform 0.3s cubic-bezier(0.03,0.98,0.52,0.99)',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  )
}

export default Tilt
