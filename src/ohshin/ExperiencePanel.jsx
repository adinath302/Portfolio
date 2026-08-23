import React from 'react'
import { experience } from './data'

const delays = ['120ms', '190ms', '260ms']

const ExperiencePanel = () => {
  return (
    <aside className="motion-safe:animate-work-reveal min-w-0 [animation-delay:220ms]">
      <section className="relative isolate overflow-hidden rounded-[2rem] bg-white/[0.045] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.26),0_0_52px_rgba(211,23,10,0.14),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/10 backdrop-blur-2xl motion-safe:animate-glass-breathe sm:p-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -z-10 w-1/2 motion-safe:animate-glass-sheen left-[-35%] bg-white/[0.04] motion-safe:[animation-delay:-4.7s] motion-safe:[animation-duration:13.4s]"
        />
        <div className="flex items-end justify-between gap-4">
          <h2
            data-text="Experience"
            className="glitch-hover font-doto text-[1.9rem] font-black uppercase leading-none tracking-normal text-white sm:text-[3.2rem]"
          >
            Experience
          </h2>
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-accent sm:text-[0.62rem] sm:tracking-[0.28em]">
            timeline
          </p>
        </div>

        <div className="mt-6 grid gap-3">
          {experience.map((item, index) => (
            <div
              key={`${item.role}-${index}`}
              className="grid gap-3 rounded-[1.35rem] bg-white/[0.035] px-4 py-4 font-mono text-[0.82rem] leading-5 text-white/62 shadow-[0_12px_38px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-white/8 motion-safe:animate-work-reveal sm:grid-cols-[7.25rem_minmax(0,1fr)] sm:text-[0.88rem]"
              style={{ animationDelay: delays[index] }}
            >
              <div>
                <p className="text-[0.64rem] uppercase tracking-[0.14em] text-white/46">
                  {item.date}
                </p>
                <p className="mt-2 text-[0.64rem] uppercase tracking-[0.14em] text-white/46">
                  {item.location}
                </p>
              </div>
              <div>
                <h3 className="font-mono text-[0.96rem] font-semibold text-white sm:text-[1.02rem]">
                  {item.role}
                </h3>
                <p className="mt-1 text-white/86">{item.org}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  )
}

export default ExperiencePanel
