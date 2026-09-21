import React, { useState } from 'react'
import Tilt from './Tilt'
import PlaylistPanel from './PlaylistPanel'
import { about, books } from './data'
import profileImg from '../assets/profile.jpg'
import profileImgWebp from '../assets/profile.webp'

const glassPanel =
  'relative isolate overflow-hidden rounded-[2rem] p-5 backdrop-blur-2xl motion-safe:animate-glass-breathe sm:p-7 lg:rounded-[2.5rem] lg:p-9'

const BookCover = ({ book }) => {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/30 to-white/10 p-1">
        <span className="font-doto text-[0.45rem] font-black uppercase leading-tight text-center" style={{ color: 'var(--c-text-sec)' }}>{book.title}</span>
      </div>
    )
  }

  return (
    <img
      src={book.thumbnail}
      alt={book.title}
      className="h-full w-full object-cover saturate-[1.18] contrast-[1.04]"
      loading="lazy"
      onError={() => setImgError(true)}
    />
  )
}



const bookGradients = [
  'bg-[radial-gradient(circle_at_18%_12%,rgba(255,228,160,0.24),transparent_30%),linear-gradient(135deg,rgba(184,106,25,0.42),rgba(211,23,10,0.14)_45%,rgba(255,255,255,0.06))] ring-orange-200/20',
  'bg-[radial-gradient(circle_at_18%_14%,rgba(140,170,255,0.18),transparent_30%),linear-gradient(135deg,rgba(0,40,85,0.46),rgba(255,255,255,0.07)_50%,rgba(211,23,10,0.14))] ring-blue-100/18',
  'bg-[radial-gradient(circle_at_20%_18%,rgba(255,190,120,0.22),transparent_30%),linear-gradient(135deg,rgba(211,23,10,0.3),rgba(178,77,24,0.24)_42%,rgba(255,255,255,0.06))] ring-orange-100/18',
  'bg-[radial-gradient(circle_at_12%_14%,rgba(255,255,255,0.22),transparent_28%),linear-gradient(135deg,rgba(211,23,10,0.34),rgba(255,255,255,0.06)_46%,rgba(0,40,85,0.22))] ring-accent/28',
  'bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.2),transparent_30%),linear-gradient(135deg,rgba(244,180,55,0.26),rgba(255,255,255,0.07)_45%,rgba(0,40,85,0.3))] ring-yellow-100/16',
  'bg-[radial-gradient(circle_at_18%_20%,rgba(0,255,171,0.18),transparent_30%),linear-gradient(135deg,rgba(0,40,85,0.48),rgba(24,185,134,0.16)_44%,rgba(255,255,255,0.06))] ring-cyan-200/18',
]

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative isolate min-h-[100svh] overflow-hidden font-mono"
      style={{ background: 'var(--c-bg)', color: 'var(--c-text)' }}
    >
      {/* background texture layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-10 [background-size:6px_6px]"
        style={{
          backgroundImage: 'radial-gradient(var(--c-text-faint) 0.62px, transparent 0.62px)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background: 'radial-gradient(circle_at_18%_12%,rgba(211,23,10,0.06),transparent_28%),radial-gradient(circle_at_78%_72%,var(--c-overlay),transparent_30%)',
        }}
      />


      <div className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-[1460px] gap-8 px-4 py-6 pb-[calc(var(--site-nav-height)+2rem+env(safe-area-inset-bottom))] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        {/* ---- header card ---- */}
        <div className="motion-safe:animate-work-reveal">
          <header
            className={`${glassPanel}`}
            style={{
              background: 'var(--c-surface-strong)',
              boxShadow: 'var(--shadow-glass-lg)',
              border: '1px solid var(--c-border-strong)',
            }}
          >
            <div className="grid gap-2 font-mono text-[0.56rem] uppercase tracking-[0.18em] sm:grid-cols-3 sm:items-start sm:gap-3 sm:text-[0.62rem] sm:tracking-[0.28em]">
              <p style={{ color: 'var(--c-text-sec)' }}>{about.profile}</p>
              <p className="sm:text-right" style={{ color: 'var(--c-text-muted)' }}>{about.location}</p>
            </div>
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2
                data-text="about"
                className="glitch-hover motion-safe:animate-work-reveal font-doto text-[clamp(4.2rem,21vw,19rem)] font-black uppercase leading-[0.72] tracking-normal [animation-delay:90ms] sm:text-[clamp(5.8rem,21vw,19rem)]"
                style={{ color: 'var(--c-text)' }}
              >
                about
              </h2>
            </div>
          </header>
        </div>

        {/* ---- main panel: story + portrait ---- */}
        <section
          className="relative isolate min-w-0 w-full overflow-hidden rounded-[1.5rem] backdrop-blur-2xl motion-safe:animate-glass-breathe motion-safe:[animation-delay:-2.8s] motion-safe:[animation-duration:12.2s] sm:rounded-[2rem] lg:rounded-[2.35rem]"
          style={{
            background: 'var(--c-surface-strong)',
            boxShadow: 'var(--shadow-glass-lg)',
            border: '1px solid var(--c-border-strong)',
          }}
        >

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 opacity-[0.08] mix-blend-screen [background-size:28px_28px]"
            style={{
              backgroundImage: 'linear-gradient(var(--c-glass-highlight) 1px,transparent 1px),linear-gradient(90deg,var(--c-glass-highlight) 1px,transparent 1px)',
            }}
          />
          <div className="grid gap-6 lg:min-h-[44rem] lg:grid-cols-[minmax(0,1fr)_minmax(24rem,0.76fr)] lg:gap-8 xl:grid-cols-[minmax(0,0.96fr)_minmax(30rem,0.78fr)] xl:gap-10">
            <div className="flex min-w-0 flex-col justify-center p-4 sm:p-7 lg:p-9 xl:p-12">
              <div className="max-w-[54rem]">
                <div className="mb-8 flex flex-wrap gap-2 font-mono text-[0.56rem] uppercase tracking-[0.22em]">
                  {about.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1"
                      style={{
                        background: 'var(--c-surface)',
                        color: 'var(--c-text-muted)',
                        border: '1px solid var(--c-border)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="max-w-[72ch] text-[0.92rem] leading-[1.85] sm:text-[1rem]">
                  <div className="max-w-[74ch] space-y-0.5 lg:max-w-[78ch]">
                    {about.paragraphs.map((paragraph, i) => (
                      <p key={i} style={{ color: 'var(--c-text-sec)' }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <aside className="order-first min-h-[22rem] sm:min-h-[34rem] lg:order-none lg:min-h-full lg:max-h-[36rem]">
              <div
                className="relative h-full min-h-[22rem] overflow-hidden rounded-[1.25rem] sm:min-h-[34rem] sm:rounded-[1.65rem] lg:min-h-full"
                style={{ background: 'var(--c-overlay)', boxShadow: '0 30px 90px var(--c-shadow)' }}
              >
                <div
                  className="absolute inset-[-8%]"
                  style={{
                    transform: 'translateY(38px) scale(1.04) rotate(1.4deg)',
                  }}
                >
                  <picture>
                    <source srcSet={profileImgWebp} type="image/webp" />
                    <img
                      src={profileImg}
                      alt="Portrait of Adinath"
                      width="600"
                      height="800"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center"
                    />
                  </picture>
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: 'radial-gradient(circle_at_70%_18%,var(--c-glass-highlight),transparent_28%),linear-gradient(180deg,var(--c-glass-highlight),transparent_32%,var(--c-overlay))',
                  }}
                />
              </div>
            </aside>
          </div>
        </section>

        {/* ---- footer: playlists + books ---- */}
        <footer className="grid w-full gap-8 lg:grid-cols-2">
          <PlaylistPanel />

          {/* books */}
          <div
            className="relative isolate min-w-0 overflow-hidden rounded-[2rem] p-5 motion-safe:animate-glass-breathe [contain:paint] sm:p-6 motion-safe:[animation-delay:-8.2s] motion-safe:[animation-duration:12.6s]"
            style={{
              background: 'var(--c-surface-strong)',
              boxShadow: '0 18px 70px var(--c-shadow), inset 0 1px 0 var(--c-glass-highlight)',
              border: '1px solid var(--c-border)',
            }}
          >

            <section>
              <div className="flex items-end justify-between gap-4">
                <h2
                  data-text="books"
                  className="glitch-hover font-doto text-[2rem] font-black uppercase leading-none tracking-normal sm:text-[3.4rem]"
                  style={{ color: 'var(--c-text)' }}
                >
                  books
                </h2>
                <p className="font-mono text-[0.56rem] uppercase tracking-[0.2em] sm:text-[0.6rem] sm:tracking-[0.28em]" style={{ color: 'var(--c-text-muted)' }}>
                  reading stack
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {books.map((book, index) => (
                  <Tilt key={book.id} max={10}>
                    <article
                      className={`relative min-h-[8.5rem] overflow-hidden rounded-[1.25rem] p-3 ring-1 transition-[box-shadow] duration-300 hover:shadow-[var(--shadow-card-hover)] ${bookGradients[index % bookGradients.length]}`}
                      style={{ boxShadow: 'var(--shadow-card)' }}
                    >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px" style={{ background: 'var(--c-glass-highlight)' }} />
                    <div className="pointer-events-none absolute -right-10 -top-12 h-28 w-28 rounded-full blur-2xl" style={{ background: 'var(--c-accent-soft)' }} />
                    <div className="relative flex h-full items-start gap-3">
                      <div
                        className="relative h-20 w-14 flex-none overflow-hidden rounded-md ring-1"
                        style={{ background: 'var(--c-overlay)', boxShadow: '0 12px 28px var(--c-shadow)', borderColor: 'var(--c-border-strong)' }}
                      >
                        <BookCover book={book} />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch py-0.5">
                        <div className="space-y-1">
                          <p className="line-clamp-2 text-[0.82rem] font-semibold leading-snug" style={{ color: 'var(--c-text)' }}>
                            {book.title}
                          </p>
                          <p className="line-clamp-2 text-[0.68rem] leading-snug" style={{ color: 'var(--c-text-sec)' }}>
                            {book.authors.join(', ')}
                          </p>
                        </div>
                        <div
                          className="mt-3 flex items-center justify-between gap-2 border-t pt-2 font-mono text-[0.54rem] uppercase tracking-[0.2em]"
                          style={{ borderColor: 'var(--c-border)', color: 'var(--c-text-muted)' }}
                        >
                          <span>book</span>
                          <span>{book.publishedDate}</span>
                        </div>
                      </div>
                    </div>
                    </article>
                  </Tilt>
                ))}
              </div>
            </section>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default AboutSection
