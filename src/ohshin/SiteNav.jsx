import React from 'react'
import {
  FaXTwitter,
  FaInstagram,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa6'
import { socials } from './data'

const ALEX_SPRITE =
  'https://cdn.jsdelivr.net/npm/minecraft-assets@1.17.0/minecraft-assets/data/1.21.8/entity/player/slim/alex.png'
const PICKAXE =
  'https://cdn.jsdelivr.net/npm/minecraft-assets@1.17.0/minecraft-assets/data/1.21.8/items/diamond_pickaxe.png'

const SOCIAL_ICONS = {
  X: FaXTwitter,
  Instagram: FaInstagram,
  Mail: FaEnvelope,
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
}

const linkBase =
  'relative z-10 min-w-[4.65rem] shrink-0 rounded-full px-2.5 py-2.5 text-center font-doto text-[10px] font-black tracking-[0.06em] outline-none focus-visible:ring-1 focus-visible:ring-white/30 sm:min-w-[7rem] sm:px-6 sm:py-3 sm:text-[14px] sm:tracking-[0.12em]'

const activePill =
  'absolute inset-0 -z-10 rounded-full border border-white/16 bg-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_24px_rgba(0,0,0,0.22)]'

const SiteNav = ({ page, navigate }) => {
  const goHome = () => {
    if (page === 'work') {
      navigate('/')
      window.setTimeout(() => {
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
      }, 60)
    } else {
      document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const goWork = () => {
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
            <button
              type="button"
              onClick={goHome}
              tabIndex={0}
              className={`${linkBase} ${page === 'home' ? 'text-white' : 'text-white/70'}`}
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
            </button>
            <button
              type="button"
              onClick={goWork}
              tabIndex={0}
              className={`${linkBase} ${page === 'work' ? 'text-white' : 'text-white/70'}`}
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
            </button>
          </div>

          <span aria-hidden="true" className="h-7 w-px shrink-0 bg-white/10" />

          <div className="flex shrink-0 items-center gap-0.5 pr-0.5 sm:gap-1 sm:pr-1">
            {socials.map((social) => {
              const Icon = SOCIAL_ICONS[social.label]
              return (
                <a
                  key={social.label}
                  aria-label={social.aria}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/68 transition-colors duration-150 hover:text-white sm:h-11 sm:w-11"
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
