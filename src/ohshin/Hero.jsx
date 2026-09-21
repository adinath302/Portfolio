import React from 'react'
import GlitchText from './GlitchText'
import HeroBackdrop from './HeroBackdrop'
import { hero } from './data'

const Hero = () => {
  return (
    <section id="hero" className="relative isolate min-h-[100svh] overflow-hidden">
      {/* base backdrop */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full"
          style={{ background: 'var(--hero-bg)' }}
        />
      </div>

      {/* photo backdrop, fades in under the CRT texture once decoded */}
      <HeroBackdrop />

      {/* scanline + glow layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] hidden mix-blend-screen sm:block"
        style={{
          opacity: 0.18,
          backgroundImage: 'var(--hero-scanline)',
        }}
      />

      {/* diagonal grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[3] hidden sm:block"
        style={{
          opacity: 0.08,
          backgroundImage: 'var(--hero-grid)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[4] hidden sm:block"
        style={{
          opacity: 0.09,
          backgroundImage: 'var(--hero-dot)',
          backgroundSize: '5px 5px',
        }}
      />

      {/* diagonal glow beam */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-18%] top-[-28%] z-[5] hidden h-[42rem] rotate-[-9deg] blur-2xl sm:block"
        style={{
          opacity: 0.14,
          background: 'var(--hero-beam)',
          transform: 'translateX(-18%)',
        }}
      />

      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-4 py-20 text-center sm:px-6">
        <div className="relative w-full max-w-5xl -translate-y-10 sm:-translate-y-20 lg:-translate-y-24">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-72 w-[min(92vw,54rem)] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[78px] sm:h-[22rem] md:h-[26rem]"
            style={{ background: 'var(--hero-glow-bg)' }}
          />
          <div>
            <h1
              className="font-doto text-[2.25rem] font-semibold leading-[1.04] tracking-normal sm:text-[3.5rem] md:text-[4.75rem] lg:text-[6rem]"
              style={{ color: 'var(--c-text)', textShadow: 'var(--hero-text-shadow)' }}
            >
              <GlitchText
                text={hero.title}
                charDelay={hero.titleCharDelay}
                startDelay={hero.titleStartDelay}
              />
            </h1>
            <p
              className="mt-5 font-doto text-[13px] font-medium tracking-[0.1em] sm:mt-6 sm:text-[18px] sm:tracking-[0.14em] md:text-[24px]"
              style={{ color: 'var(--c-text-sec)' }}
            >
              <GlitchText
                text={hero.subtitle}
                charDelay={hero.subtitleCharDelay}
                startDelay={hero.subtitleStartDelay}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
