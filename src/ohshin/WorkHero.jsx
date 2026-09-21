import React, { useEffect, useState } from 'react'
import { work } from './data'

const useISTClock = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const formatted = new Intl.DateTimeFormat('en-IN', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata',
      }).format(now)
      setTime(formatted.toLowerCase())
    }
    update()
    const interval = window.setInterval(update, 30000)
    return () => window.clearInterval(interval)
  }, [])

  return time
}

const WorkHero = () => {
  const time = useISTClock()

  return (
    <div className="motion-safe:animate-work-reveal">
      <div
        className="relative isolate overflow-hidden rounded-[2rem] p-5 backdrop-blur-2xl motion-safe:animate-glass-breathe motion-safe:[animation-delay:-1.1s] motion-safe:[animation-duration:12.5s] sm:p-7 lg:rounded-[2.5rem] lg:p-9"
        style={{
          background: 'var(--c-surface)',
          boxShadow: 'var(--shadow-glass-lg)',
          border: '1px solid var(--c-border-strong)',
        }}
      >

        <div className="grid gap-2 font-mono text-[0.56rem] uppercase tracking-[0.18em] sm:grid-cols-3 sm:items-start sm:gap-3 sm:text-[0.62rem] sm:tracking-[0.28em]">
          <p style={{ color: 'var(--c-text)' }}>{work.metaLeft}</p>
          <p className="hidden text-center sm:block" style={{ color: 'var(--c-text-muted)' }}>{work.metaCenter}</p>
          <p className="sm:text-right" style={{ color: 'var(--c-text-muted)' }}>
            {time}
            <span className="ml-2">IST</span>
          </p>
        </div>
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <p className="font-mono text-[0.64rem] uppercase tracking-[0.16em] sm:text-[0.74rem] sm:tracking-[0.24em]" style={{ color: 'var(--c-text-muted)' }}>
            {work.kicker}
          </p>
          <h1
            data-text="work"
            className="glitch-hover mt-5 motion-safe:animate-work-reveal font-doto text-[clamp(4.2rem,21vw,19rem)] font-black uppercase leading-[0.72] tracking-normal [animation-delay:90ms] sm:text-[clamp(5.8rem,21vw,19rem)]"
            style={{ color: 'var(--c-text)' }}
          >
            work
          </h1>
        </div>
      </div>
    </div>
  )
}

export default WorkHero
