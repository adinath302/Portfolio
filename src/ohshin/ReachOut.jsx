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
      <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-white/[0.045] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.30),0_0_74px_rgba(211,23,10,0.18),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/12 backdrop-blur-2xl motion-safe:animate-glass-breathe sm:p-7 lg:p-8">


        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:items-end">
          <div>
            <p className="font-mono text-[0.56rem] uppercase tracking-[0.22em] text-accent sm:text-[0.62rem] sm:tracking-[0.28em]">
              {reachOut.kicker}
            </p>
            <h2
              data-text="reach out"
              className="glitch-hover mt-4 font-doto text-[clamp(2.75rem,14vw,8rem)] font-black uppercase leading-[0.82] tracking-normal text-white"
            >
              reach out
            </h2>
          </div>
          <p className="max-w-[58ch] font-mono text-[0.82rem] leading-7 text-white/68 sm:text-[0.9rem] lg:justify-self-end">
            {reachOut.intro}
          </p>
        </div>

        <div className="mt-7 grid gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-3">
          {reachOut.channels.map((channel, index) => (
            <div
              key={channel.label}
              className="relative min-w-0 overflow-hidden rounded-[1.5rem] bg-white/[0.05] p-4 shadow-[0_18px_70px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.10)] ring-1 ring-white/10 motion-safe:animate-work-reveal sm:rounded-[1.75rem] sm:p-6"
              style={{ animationDelay: delays[index] }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-white/48"
              />
              <p className="font-mono text-[0.58rem] uppercase tracking-[0.24em] text-accent">
                {channel.index} / {channel.label}
              </p>
              <div className="mt-5 grid gap-7">
                <div>
                  <h3 className="font-doto text-[2.25rem] font-black uppercase leading-[0.9] tracking-normal text-white sm:text-[2.7rem]">
                    {channel.title}
                  </h3>
                  <p className="mt-5 font-mono text-[0.76rem] leading-6 text-white/62">
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
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-mono text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-theme-black shadow-[0_12px_32px_rgba(255,255,255,0.12)] transition-transform hover:-translate-y-0.5"
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
