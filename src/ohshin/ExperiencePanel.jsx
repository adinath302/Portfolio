import React from 'react'
import { experience } from './data'

const delays = ['120ms', '190ms', '260ms']

const ExperiencePanel = () => {
  return (
    <aside className="motion-safe:animate-work-reveal min-w-0 [animation-delay:220ms]">
      <section
        className="relative isolate overflow-hidden rounded-[2rem] p-5 backdrop-blur-2xl motion-safe:animate-glass-breathe sm:p-6"
        style={{
          background: 'var(--c-surface)',
          boxShadow: 'var(--shadow-glass)',
          border: '1px solid var(--c-border)',
        }}
      >

        <div className="flex items-end justify-between gap-4">
          <h2
            data-text="experience"
            className="glitch-hover font-doto text-[1.9rem] font-black uppercase leading-none tracking-normal sm:text-[3.2rem]"
            style={{ color: 'var(--c-text)' }}
          >
            Experience
          </h2>
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] sm:text-[0.62rem] sm:tracking-[0.28em]" style={{ color: 'var(--c-accent)' }}>
            timeline
          </p>
        </div>

        <div className="mt-6 grid gap-3">
          {experience.map((item, index) => (
            <div
              key={`${item.role}-${index}`}
              className="grid gap-3 rounded-[1.35rem] px-4 py-4 font-mono text-[0.82rem] leading-5 ring-1 motion-safe:animate-work-reveal sm:grid-cols-[7.25rem_minmax(0,1fr)] sm:text-[0.88rem]"
              style={{
                background: 'var(--c-surface)',
                boxShadow: 'var(--shadow-card)',
                borderColor: 'var(--c-border)',
                color: 'var(--c-text-sec)',
                animationDelay: delays[index],
              }}
            >
              <div>
                <p className="text-[0.64rem] uppercase tracking-[0.14em]" style={{ color: 'var(--c-text-muted)' }}>
                  {item.date}
                </p>
                <p className="mt-2 text-[0.64rem] uppercase tracking-[0.14em]" style={{ color: 'var(--c-text-muted)' }}>
                  {item.location}
                </p>
              </div>
              <div>
                <h3 className="font-mono text-[0.96rem] font-semibold sm:text-[1.02rem]" style={{ color: 'var(--c-text)' }}>
                  {item.role}
                </h3>
                <p style={{ color: 'var(--c-text-sec)' }}>{item.org}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  )
}

export default ExperiencePanel
