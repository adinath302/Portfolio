import React from 'react'
import { reach } from './data'

const TwitterIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const GithubIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const InfoIcon = () => (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
)

const CARD_ICONS = {
  twitter: TwitterIcon,
  github: GithubIcon,
  visits: InfoIcon,
}

const cardBase =
  'reach-card-glow relative isolate grid min-h-[11rem] min-w-0 overflow-hidden rounded-[1.5rem] px-4 py-4 motion-safe:animate-work-reveal sm:min-h-[13rem] sm:rounded-[1.75rem] sm:px-6 sm:py-5'

const delays = ['220ms', '300ms', '380ms']

const StatCard = ({ card, index }) => {
  const Icon = CARD_ICONS[card.icon]

  const inner = (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background: 'radial-gradient(circle_at_18%_18%,var(--c-overlay),transparent_34%),radial-gradient(circle_at_80%_90%,var(--c-accent-glow),transparent_42%)',
        }}
      />

      <div className="relative flex items-center justify-between gap-4 font-mono text-[0.74rem] uppercase tracking-[0.18em] sm:text-[0.82rem]" style={{ color: 'var(--c-text-muted)' }}>
        <span className="flex items-center gap-2">
          <Icon />
          {card.icon}
        </span>
        <span className="font-mono text-[0.58rem]" style={{ color: 'var(--c-accent)' }}>{card.index}</span>
      </div>

      <div className="relative mt-10 min-w-0 overflow-hidden">
        <p
          className="truncate font-metric text-[clamp(1.8rem,4.8vw,4.1rem)] font-semibold uppercase leading-none tracking-[-0.08em]"
          style={{ color: 'var(--c-text)', textShadow: '0 0 18px var(--c-accent-glow)' }}
        >
          {card.metric}
        </p>
        <div className="mt-3 flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.18em]" style={{ color: 'var(--c-text-sec)' }}>
          {card.metricLabel}
          {card.tooltip && (
            <span className="group/tooltip relative inline-flex">
              <button
                type="button"
                aria-label="What is this?"
                aria-describedby="reach-tooltip"
                className="inline-flex h-5 w-5 items-center justify-center rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1"
                style={{ color: 'var(--c-text-muted)' }}
              >
                <InfoIcon />
              </button>
              <span
                id="reach-tooltip"
                role="tooltip"
                className="pointer-events-none absolute bottom-[calc(100%+0.55rem)] left-1/2 z-20 w-52 -translate-x-1/2 rounded-xl px-3 py-2 font-mono text-[0.58rem] normal-case leading-4 tracking-normal opacity-0 backdrop-blur-xl transition duration-200 group-hover/tooltip:opacity-100 group-focus-within/tooltip:opacity-100"
                style={{
                  border: '1px solid var(--c-border)',
                  background: 'var(--c-bg)',
                  color: 'var(--c-text-sec)',
                  boxShadow: '0 18px 60px var(--c-shadow-strong)',
                }}
              >
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
        style={{
          background: 'var(--c-surface)',
          boxShadow: '0 22px 80px var(--c-shadow), 0 0 44px var(--c-accent-glow), inset 0 1px 0 var(--c-glass-highlight)',
          border: '1px solid var(--c-border)',
          animationDelay: delays[index],
        }}
      >
        {inner}
      </a>
    )
  }

  return (
    <div
      className={cardBase}
      style={{
        background: 'var(--c-surface)',
        boxShadow: '0 22px 80px var(--c-shadow), 0 0 44px var(--c-accent-glow), inset 0 1px 0 var(--c-glass-highlight)',
        border: '1px solid var(--c-border)',
        animationDelay: delays[index],
      }}
    >
      {inner}
    </div>
  )
}

const ReachPanel = () => {
  return (
    <div className="motion-safe:animate-work-reveal py-10 [animation-delay:160ms] lg:py-12">
      <div
        className="relative isolate overflow-hidden rounded-[2.5rem] p-5 backdrop-blur-2xl motion-safe:animate-glass-breathe sm:p-7"
        style={{
          background: 'var(--c-surface)',
          boxShadow: 'var(--shadow-glass-lg)',
          border: '1px solid var(--c-border-strong)',
        }}
      >

        <div className="flex items-end justify-between gap-4">
          <h2
            data-text="reach"
            className="glitch-hover font-doto text-[2.25rem] font-black uppercase leading-none tracking-normal sm:text-[4.5rem]"
            style={{ color: 'var(--c-text)' }}
          >
            {reach.title}
          </h2>
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] sm:text-[0.62rem] sm:tracking-[0.28em]" style={{ color: 'var(--c-accent)' }}>
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
