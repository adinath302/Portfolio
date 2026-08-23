import React from 'react'
import { FaXTwitter, FaGithub } from 'react-icons/fa6'
import { FiInfo } from 'react-icons/fi'
import { reach } from './data'

const CARD_ICONS = {
  twitter: FaXTwitter,
  github: FaGithub,
  visits: FiInfo,
}

const cardBase =
  'relative isolate grid min-h-[11rem] min-w-0 overflow-hidden rounded-[1.5rem] bg-white/[0.05] px-4 py-4 shadow-[0_22px_80px_rgba(0,0,0,0.28),0_0_44px_rgba(211,23,10,0.12),inset_0_1px_0_rgba(255,255,255,0.11)] ring-1 ring-white/10 motion-safe:animate-work-reveal sm:min-h-[13rem] sm:rounded-[1.75rem] sm:px-6 sm:py-5'

const delays = ['220ms', '300ms', '380ms']

const StatCard = ({ card, index }) => {
  const Icon = CARD_ICONS[card.icon]

  const inner = (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-14 -top-16 -z-10 h-40 w-40 rounded-full bg-accent/28 blur-2xl motion-safe:animate-reach-pulse"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-1/2 -z-10 h-48 w-48 -translate-x-1/2 rounded-full bg-white/10 blur-3xl motion-safe:animate-reach-pulse"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_18%_18%,rgba(255,255,255,.10),transparent_34%),radial-gradient(circle_at_80%_90%,rgba(211,23,10,.24),transparent_42%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/60 motion-safe:animate-reach-sweep"
      />

      <div className="relative flex items-center justify-between gap-4 font-mono text-[0.74rem] uppercase tracking-[0.18em] text-white/56 sm:text-[0.82rem]">
        <span className="flex items-center gap-2">
          <Icon className="h-6 w-6 text-white/78" />
          {card.icon}
        </span>
        <span className="font-mono text-[0.58rem] text-accent">{card.index}</span>
      </div>

      <div className="relative mt-10 min-w-0 overflow-hidden">
        <p className="truncate font-metric text-[clamp(1.8rem,4.8vw,4.1rem)] font-semibold uppercase leading-none tracking-[-0.08em] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.26)]">
          {card.metric}
        </p>
        <div className="mt-3 flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/70">
          {card.metricLabel}
          {card.tooltip && (
            <span className="group/tooltip relative inline-flex">
              <button
                type="button"
                aria-label="What is this?"
                className="inline-flex h-5 w-5 items-center justify-center rounded-full text-white/45 transition-colors duration-200 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/35"
              >
                <FiInfo className="h-3.5 w-3.5" />
              </button>
              <span className="pointer-events-none absolute bottom-[calc(100%+0.55rem)] left-1/2 z-20 w-52 -translate-x-1/2 rounded-xl border border-white/12 bg-theme-black/90 px-3 py-2 font-mono text-[0.58rem] normal-case leading-4 tracking-normal text-white/72 opacity-0 shadow-[0_18px_60px_rgba(0,0,0,0.38)] backdrop-blur-xl transition duration-200 group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100">
                {reach.tooltip}
              </span>
            </span>
          )}
        </div>
      </div>
    </>
  )

  if (card.href) {
    return (
      <a
        href={card.href}
        target="_blank"
        rel="noreferrer"
        className={cardBase}
        style={{ animationDelay: delays[index] }}
      >
        {inner}
      </a>
    )
  }

  return (
    <div className={cardBase} style={{ animationDelay: delays[index] }}>
      {inner}
    </div>
  )
}

const ReachPanel = () => {
  return (
    <div className="motion-safe:animate-work-reveal py-10 [animation-delay:160ms] lg:py-12">
      <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-white/[0.045] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.30),0_0_74px_rgba(211,23,10,0.18),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/12 backdrop-blur-2xl motion-safe:animate-glass-breathe sm:p-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -z-10 w-1/2 motion-safe:animate-glass-sheen left-[-35%] bg-white/[0.045] motion-safe:[animation-delay:-3.1s] motion-safe:[animation-duration:12.9s]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-28 -z-10 h-72 w-72 rounded-full bg-accent/28 blur-3xl motion-safe:animate-reach-pulse"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-10 -z-10 h-64 w-64 rounded-full bg-white/10 blur-3xl motion-safe:animate-reach-pulse"
        />

        <div className="flex items-end justify-between gap-4">
          <h2
            data-text="reach"
            className="glitch-hover font-doto text-[2.25rem] font-black uppercase leading-none tracking-normal text-white sm:text-[4.5rem]"
          >
            {reach.title}
          </h2>
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-accent sm:text-[0.62rem] sm:tracking-[0.28em]">
            {reach.label}
          </p>
        </div>

        <div className="mt-6 grid min-w-0 gap-3 sm:mt-7 sm:gap-4 lg:grid-cols-3">
          {reach.cards.map((card, index) => (
            <StatCard key={card.icon} card={card} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReachPanel
