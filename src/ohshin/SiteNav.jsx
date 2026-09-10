import React from 'react'
import { socials } from './data'

const ALEX_SPRITE =
  'https://cdn.jsdelivr.net/npm/minecraft-assets@1.17.0/minecraft-assets/data/1.21.8/entity/player/slim/alex.png'
const PICKAXE =
  'https://cdn.jsdelivr.net/npm/minecraft-assets@1.17.0/minecraft-assets/data/1.21.8/items/diamond_pickaxe.png'

const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const MailIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const LinkedInIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const GithubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const SOCIAL_ICONS = {
  X: XIcon,
  Instagram: InstagramIcon,
  Mail: MailIcon,
  LinkedIn: LinkedInIcon,
  GitHub: GithubIcon,
}

const linkBase =
  'relative z-10 min-w-[4.65rem] shrink-0 rounded-full px-2.5 py-2.5 text-center font-doto text-[10px] font-black tracking-[0.06em] outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:min-w-[7rem] sm:px-6 sm:py-3 sm:text-[14px] sm:tracking-[0.12em] transition-colors duration-150'

const activePill =
  'absolute inset-0 -z-10 rounded-full border border-white/16 bg-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_24px_rgba(0,0,0,0.22)]'

const SiteNav = ({ page, navigate }) => {
  const goHome = (e) => {
    e.preventDefault()
    if (page === 'work') {
      navigate('/')
      window.setTimeout(() => {
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
      }, 60)
    } else {
      document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const goWork = (e) => {
    e.preventDefault()
    if (page !== 'work') navigate('/work')
  }

  return (
    <header
      data-site-nav="true"
      className="pointer-events-none fixed inset-x-0 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-30 flex w-full justify-center px-2 sm:bottom-6 sm:px-3"
    >
      <div className="pointer-events-auto relative max-w-[calc(100vw-1rem)] overflow-hidden rounded-full border border-white/14 bg-[rgba(10,12,17,0.42)] p-1 shadow-nav-glass backdrop-blur-2xl sm:max-w-full sm:p-1.5">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.045)_42%,rgba(0,0,0,0.12))]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-px rounded-full border border-black/18"
        />
        <nav
          aria-label="Primary"
          className="relative flex max-w-full items-center justify-start gap-1 overflow-x-auto no-scrollbar sm:justify-center sm:gap-1.5 sm:overflow-visible"
        >
          <div className="relative flex shrink-0 items-center justify-center gap-0.5 sm:gap-1">
            <a
              href="/"
              onClick={goHome}
              aria-current={page === 'home' ? 'page' : undefined}
              className={`${linkBase} ${page === 'home' ? 'text-white' : 'text-white/70 hover:text-white/90'}`}
            >
              {page === 'home' && <span className={activePill} />}
              <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
                <span
                  aria-hidden="true"
                  className="relative h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                >
                  <span
                    className="absolute inset-0 bg-no-repeat [image-rendering:pixelated]"
                    style={{
                      backgroundImage: `url(${ALEX_SPRITE})`,
                      backgroundSize: '128px 128px',
                      backgroundPosition: '-16px -16px',
                    }}
                  />
                  <span
                    className="absolute inset-0 bg-no-repeat [image-rendering:pixelated]"
                    style={{
                      backgroundImage: `url(${ALEX_SPRITE})`,
                      backgroundSize: '128px 128px',
                      backgroundPosition: '-80px -16px',
                    }}
                  />
                </span>
                abt me
              </span>
            </a>
            <a
              href="/work"
              onClick={goWork}
              aria-current={page === 'work' ? 'page' : undefined}
              className={`${linkBase} ${page === 'work' ? 'text-white' : 'text-white/70 hover:text-white/90'}`}
            >
              {page === 'work' && <span className={activePill} />}
              <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
                <img
                  src={PICKAXE}
                  alt=""
                  aria-hidden="true"
                  className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                  style={{ imageRendering: 'pixelated' }}
                />
                work
              </span>
            </a>
          </div>

          <span aria-hidden="true" className="h-7 w-px shrink-0 bg-white/10" />

          <div className="flex shrink-0 items-center gap-0.5 pr-0.5 sm:gap-1 sm:pr-1">
            {socials.map((social) => {
              const Icon = SOCIAL_ICONS[social.label]
              return (
                <a
                  key={social.label}
                  aria-label={social.aria}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/68 transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:h-11 sm:w-11"
                  href={social.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {Icon ? (
                    <Icon className={`${social.size} sm:h-5.5 sm:w-5.5`} />
                  ) : null}
                </a>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default SiteNav
