import React from 'react'
import { reachOut } from './data'

const ArrowUpRight = () => (
  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

const delays = ['240ms', '330ms', '420ms']

const ReachOut = () => {
  return (
    <div className="motion-safe:animate-work-reveal py-8 [animation-delay:340ms] lg:py-10">
      <div
        className="relative isolate overflow-hidden rounded-[2.5rem] p-5 backdrop-blur-2xl motion-safe:animate-glass-breathe sm:p-7 lg:p-8"
        style={{
          background: 'var(--c-surface)',
          boxShadow: 'var(--shadow-glass-lg)',
          border: '1px solid var(--c-border-strong)',
        }}
      >
        {/* subtle accent stripe */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[3px]"
          style={{ background: 'linear-gradient(90deg, var(--c-accent), transparent 60%)' }}
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <p className="font-mono text-[0.56rem] uppercase tracking-[0.22em] sm:text-[0.62rem] sm:tracking-[0.28em]" style={{ color: 'var(--c-accent)' }}>
              {reachOut.kicker}
            </p>
            <h2
              data-text="reach out"
              className="glitch-hover mt-4 font-doto text-[clamp(2.75rem,14vw,8rem)] font-black uppercase leading-[0.82] tracking-normal"
              style={{ color: 'var(--c-text)' }}
            >
              reach out
            </h2>
          </div>
          <p className="max-w-[58ch] font-mono text-[0.82rem] leading-7 sm:text-[0.9rem] lg:justify-self-end" style={{ color: 'var(--c-text-sec)' }}>
            {reachOut.intro}
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-3">
          {reachOut.channels.map((channel, index) => (
            <div
              key={channel.label}
              className="relative min-w-0 overflow-hidden rounded-[1.5rem] p-4 motion-safe:animate-work-reveal sm:rounded-[1.75rem] sm:p-6"
              style={{
                background: 'var(--c-surface)',
                boxShadow: '0 18px 70px var(--c-shadow), inset 0 1px 0 var(--c-glass-highlight)',
                border: '1px solid var(--c-border)',
                animationDelay: delays[index],
              }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: 'var(--c-glass-highlight)' }}
              />
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.24em]" style={{ color: 'var(--c-accent)' }}>
                {channel.index} / {channel.label}
              </p>
              <div className="mt-5 grid gap-7">
                <div>
                  <h3 className="font-doto text-[2.25rem] font-black uppercase leading-[0.9] tracking-normal sm:text-[2.7rem]" style={{ color: 'var(--c-text)' }}>
                    {channel.title}
                  </h3>
                  <p className="mt-5 font-mono text-[0.76rem] leading-6" style={{ color: 'var(--c-text-sec)' }}>
                    {channel.copy}
                  </p>
                </div>
                <div className="mt-7 flex flex-wrap gap-2">
                  {channel.buttons.map((button) => (
                    <a
                      key={button.label}
                      href={button.href}
                      target={button.external ? '_blank' : undefined}
                      rel={button.external ? 'noreferrer' : undefined}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[0.64rem] font-semibold uppercase tracking-[0.18em] transition-transform hover:-translate-y-0.5"
                      style={{
                        background: 'var(--c-text)',
                        color: 'var(--c-bg)',
                        boxShadow: '0 12px 32px var(--c-shadow)',
                      }}
                    >
                      {button.label}
                      {button.external && (
                        <ArrowUpRight />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReachOut
