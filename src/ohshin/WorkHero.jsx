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
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-white/[0.05] p-5 shadow-[0_28px_100px_rgba(0,0,0,0.30),0_0_70px_rgba(211,23,10,0.20),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/12 backdrop-blur-2xl motion-safe:animate-glass-breathe motion-safe:[animation-delay:-1.1s] motion-safe:[animation-duration:12.5s] sm:p-7 lg:rounded-[2.5rem] lg:p-9">

        <div className="grid gap-2 font-mono text-[0.56rem] uppercase tracking-[0.18em] text-white/48 sm:grid-cols-3 sm:items-start sm:gap-3 sm:text-[0.62rem] sm:tracking-[0.28em]">
          <p className="text-white">{work.metaLeft}</p>
          <p className="hidden text-center sm:block">{work.metaCenter}</p>
          <p className="sm:text-right">
            {time}
            <span className="ml-2">IST</span>
          </p>
        </div>
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <p className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-white/48 sm:text-[0.74rem] sm:tracking-[0.24em]">
            {work.kicker}
          </p>
          <h1
            data-text="work"
            className="glitch-hover mt-5 motion-safe:animate-work-reveal font-doto text-[clamp(4.2rem,21vw,19rem)] font-black uppercase leading-[0.72] tracking-normal text-white [animation-delay:90ms] sm:text-[clamp(5.8rem,21vw,19rem)]"
          >
            work
          </h1>
        </div>
      </div>
    </div>
  )
}

export default WorkHero
