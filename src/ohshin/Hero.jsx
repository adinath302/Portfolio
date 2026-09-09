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
          style={{
            background:
              'radial-gradient(circle at 24% 18%, rgba(255,255,255,0.07), transparent 30%), radial-gradient(circle at 72% 76%, rgba(211,23,10,0.18), transparent 34%), radial-gradient(circle at 50% 120%, rgba(211,23,10,0.22), transparent 50%), linear-gradient(180deg, #05060a 0%, #0a0b10 55%, #120b09 100%)',
          }}
        />
      </div>

      {/* photo backdrop, fades in under the CRT texture once decoded */}
      <HeroBackdrop />

      {/* scanline + glow layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] mix-blend-screen"
        style={{
          opacity: 0.18,
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.16) 0px, rgba(255,255,255,0.16) 1px, transparent 1px, transparent 4px), radial-gradient(circle_at_24%_18%, rgba(255,255,255,0.18), transparent 30%), radial-gradient(circle_at_72%_76%, rgba(211,23,10,0.22), transparent 34%)',
        }}
      />

      {/* diagonal grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[3]"
        style={{
          opacity: 0.08,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[4]"
        style={{
          opacity: 0.09,
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.95) 0.7px, transparent 0.7px)',
          backgroundSize: '5px 5px',
        }}
      />

      {/* diagonal glow beam */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-18%] top-[-28%] z-[5] h-[42rem] rotate-[-9deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)] blur-2xl"
        style={{ opacity: 0.14, transform: 'translateX(-18%)' }}
      />

      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-4 py-20 text-center sm:px-6">
        <div className="relative w-full max-w-5xl -translate-y-10 sm:-translate-y-20 lg:-translate-y-24">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-72 w-[min(92vw,54rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/58 blur-[78px] sm:h-[22rem] md:h-[26rem]"
          />
          <div>
            <h1 className="font-doto text-[2.25rem] font-semibold leading-[1.04] tracking-normal text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.16)] sm:text-[3.5rem] md:text-[4.75rem] lg:text-[6rem]">
              <GlitchText
                text={hero.title}
                charDelay={hero.titleCharDelay}
                startDelay={hero.titleStartDelay}
              />
            </h1>
            <p className="mt-5 font-doto text-[13px] font-medium tracking-[0.1em] text-white/90 sm:mt-6 sm:text-[18px] sm:tracking-[0.14em] md:text-[24px]">
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
