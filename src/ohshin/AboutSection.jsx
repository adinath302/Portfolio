import React, { useState } from 'react'
import Tilt from './Tilt'
import PlaylistPanel from './PlaylistPanel'
import { about, books } from './data'
import profileImg from '../assets/profile.jpg'
import profileImgWebp from '../assets/profile.webp'

const glassPanel =
  'relative isolate overflow-hidden rounded-[2rem] bg-white/[0.075] shadow-[0_30px_120px_rgba(0,0,0,0.42),0_0_74px_rgba(211,23,10,0.16),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/12 backdrop-blur-2xl motion-safe:animate-glass-breathe sm:p-7 lg:rounded-[2.5rem] lg:p-9'

const BookCover = ({ book }) => {
  const [imgError, setImgError] = useState(false)

  if (imgError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/30 to-white/10 p-1">
        <span className="font-doto text-[0.45rem] font-black uppercase leading-tight text-white/70 text-center">{book.title}</span>
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
      className="relative isolate min-h-[100svh] overflow-hidden bg-ink font-mono text-fog"
    >
      {/* background texture layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-10 [background-image:radial-gradient(rgba(255,255,255,0.52)_0.62px,transparent_0.62px)] [background-size:6px_6px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_12%,rgba(211,23,10,0.12),transparent_28%),radial-gradient(circle_at_78%_72%,rgba(255,255,255,0.055),transparent_30%)]"
      />


      <div className="relative z-10 mx-auto grid min-h-[100svh] w-full max-w-[1460px] gap-8 px-4 py-6 pb-[calc(var(--site-nav-height)+2rem+env(safe-area-inset-bottom))] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        {/* ---- header card ---- */}
        <div className="motion-safe:animate-work-reveal">
          <header className={`${glassPanel} p-5 sm:p-7 lg:p-9`}>
            <div className="grid gap-2 font-mono text-[0.56rem] uppercase tracking-[0.18em] text-white/48 sm:grid-cols-3 sm:items-start sm:gap-3 sm:text-[0.62rem] sm:tracking-[0.28em]">
              <p className="text-white/78">{about.profile}</p>
              <p className="sm:text-right">{about.location}</p>
            </div>
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2
                data-text="about"
                className="glitch-hover motion-safe:animate-work-reveal font-doto text-[clamp(4.2rem,21vw,19rem)] font-black uppercase leading-[0.72] tracking-normal text-white [animation-delay:90ms] sm:text-[clamp(5.8rem,21vw,19rem)]"
              >
                about
              </h2>
            </div>
          </header>
        </div>

        {/* ---- main panel: story + portrait ---- */}
        <section className="relative isolate min-w-0 w-full overflow-hidden rounded-[1.5rem] bg-white/[0.07] shadow-[0_24px_100px_rgba(0,0,0,0.42),0_0_64px_rgba(211,23,10,0.12),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/12 backdrop-blur-2xl motion-safe:animate-glass-breathe motion-safe:[animation-delay:-2.8s] motion-safe:[animation-duration:12.2s] sm:rounded-[2rem] lg:rounded-[2.35rem]">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 opacity-[0.08] mix-blend-screen [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:28px_28px]"
          />
          <div className="grid gap-6 lg:min-h-[44rem] lg:grid-cols-[minmax(0,1fr)_minmax(24rem,0.76fr)] lg:gap-8 xl:grid-cols-[minmax(0,0.96fr)_minmax(30rem,0.78fr)] xl:gap-10">
            <div className="flex min-w-0 flex-col justify-center p-4 sm:p-7 lg:p-9 xl:p-12">
              <div className="max-w-[54rem]">
                <div className="mb-8 flex flex-wrap gap-2 font-mono text-[0.56rem] uppercase tracking-[0.22em] text-white/46">
                  {about.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.055] px-3 py-1 ring-1 ring-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="max-w-[72ch] text-[0.92rem] leading-[1.85] text-white/90 sm:text-[1rem]">
                  <div className="max-w-[74ch] space-y-0.5 lg:max-w-[78ch]">
                    {about.paragraphs.map((paragraph, i) => (
                      <p key={i} className="text-white/92">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <aside className="order-first min-h-[22rem] sm:min-h-[34rem] lg:order-none lg:min-h-full lg:max-h-[36rem]">
              <div className="relative h-full min-h-[22rem] overflow-hidden rounded-[1.25rem] bg-black/35 shadow-[0_30px_90px_rgba(0,0,0,0.38)] sm:min-h-[34rem] sm:rounded-[1.65rem] lg:min-h-full">
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
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_32%,rgba(0,0,0,0.18))]"
                />
              </div>
            </aside>
          </div>
        </section>

        {/* ---- footer: playlists + books ---- */}
        <footer className="grid w-full gap-8 lg:grid-cols-2">
          <PlaylistPanel />

          {/* books */}
          <div className="relative isolate min-w-0 overflow-hidden rounded-[2rem] bg-white/[0.075] p-5 shadow-[0_18px_70px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.10)] ring-1 ring-white/10 motion-safe:animate-glass-breathe [contain:paint] sm:p-6 motion-safe:[animation-delay:-8.2s] motion-safe:[animation-duration:12.6s]">

            <section>
              <div className="flex items-end justify-between gap-4">
                <h2
                  data-text="books"
                  className="glitch-hover font-doto text-[2rem] font-black uppercase leading-none tracking-normal text-white sm:text-[3.4rem]"
                >
                  books
                </h2>
                <p className="font-mono text-[0.56rem] uppercase tracking-[0.2em] text-white/42 sm:text-[0.6rem] sm:tracking-[0.28em]">
                  reading stack
                </p>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {books.map((book, index) => (
                  <Tilt key={book.id} max={10}>
                    <article
                      className={`relative min-h-[8.5rem] overflow-hidden rounded-[1.25rem] p-3 shadow-[0_18px_46px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 transition-[box-shadow] duration-300 hover:shadow-[0_24px_60px_rgba(0,0,0,0.34),0_0_40px_rgba(211,23,10,0.18),inset_0_1px_0_rgba(255,255,255,0.12)] ${bookGradients[index % bookGradients.length]}`}
                    >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/35" />
                    <div className="pointer-events-none absolute -right-10 -top-12 h-28 w-28 rounded-full bg-white/14 blur-2xl" />
                    <div className="relative flex h-full items-start gap-3">
                      <div className="relative h-20 w-14 flex-none overflow-hidden rounded-md bg-black/34 shadow-[0_12px_28px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/18">
                        <BookCover book={book} />
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch py-0.5">
                        <div className="space-y-1">
                          <p className="line-clamp-2 text-[0.82rem] font-semibold leading-snug text-white">
                            {book.title}
                          </p>
                          <p className="line-clamp-2 text-[0.68rem] leading-snug text-white/62">
                            {book.authors.join(', ')}
                          </p>
                        </div>
                        <div className="mt-3 flex items-center justify-between gap-2 border-t border-white/16 pt-2 font-mono text-[0.54rem] uppercase tracking-[0.2em] text-white/52">
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
