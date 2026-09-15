import React, { useRef, useCallback, useEffect } from 'react'

const Tilt = ({ children, className, max = 7 }) => {
  const ref = useRef(null)
  const raf = useRef(null)
  const reduced = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ).current
  const isMobile = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(max-width: 640px)').matches
  ).current

  const applyTilt = useCallback(
    (clientX, clientY) => {
      if (reduced || isMobile) return
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
    [max, reduced, isMobile],
  )

  const onMouseMove = useCallback(
    (e) => applyTilt(e.clientX, e.clientY),
    [applyTilt],
  )

  const onLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    if (raf.current) cancelAnimationFrame(raf.current)
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el || isMobile) return
    const handler = (e) => {
      const t = e.touches[0]
      if (t) applyTilt(t.clientX, t.clientY)
    }
    el.addEventListener('touchmove', handler, { passive: true })
    el.addEventListener('touchend', onLeave, { passive: true })
    el.addEventListener('touchcancel', onLeave, { passive: true })
    return () => {
      el.removeEventListener('touchmove', handler)
      el.removeEventListener('touchend', onLeave)
      el.removeEventListener('touchcancel', onLeave)
    }
  }, [applyTilt, onLeave, isMobile])

  return (
    <div
      ref={ref}
      onMouseMove={isMobile ? undefined : onMouseMove}
      onMouseLeave={isMobile ? undefined : onLeave}
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
