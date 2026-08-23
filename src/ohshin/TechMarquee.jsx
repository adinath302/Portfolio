import React from 'react'
import {
  FaReact,
  FaDatabase,
  FaStore,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa6'
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiGsap,
  SiFramer,
  SiPrisma,
  SiShadcnui,
} from 'react-icons/si'
import { techStack } from './data'

const ICONS = {
  react: FaReact,
  next: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  vite: SiVite,
  gsap: SiGsap,
  query: FaDatabase,
  zustand: FaStore,
  framer: SiFramer,
  prisma: SiPrisma,
  shadcn: SiShadcnui,
  html: FaHtml5,
  css: FaCss3Alt,
}

const chipBase =
  'flex h-10 items-center gap-2 rounded-full border px-3 font-mono text-[0.58rem] uppercase tracking-[0.16em] shadow-[0_10px_26px_rgba(0,0,0,0.18)] sm:h-11 sm:px-4 sm:text-[0.62rem]'

const TechMarquee = () => {
  const items = [...techStack, ...techStack]

  return (
    <div className="py-4 lg:py-6">
      <div className="group/stack relative isolate overflow-hidden rounded-[2rem] bg-white/[0.045] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.26),0_0_52px_rgba(211,23,10,0.14),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/10 backdrop-blur-2xl motion-safe:animate-glass-breathe sm:p-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-45 [background:radial-gradient(circle_at_16%_14%,rgba(255,255,255,.08),transparent_28%),radial-gradient(circle_at_86%_60%,rgba(211,23,10,.13),transparent_36%)]"
        />
        <div className="grid gap-4 lg:grid-cols-[12rem_minmax(0,1fr)] lg:items-center">
          <div>
            <p className="font-mono text-[0.56rem] uppercase tracking-[0.22em] text-accent sm:text-[0.62rem]">
              stack overload
            </p>
            <h2
              data-text="tech stack"
              className="glitch-hover mt-2 font-doto text-[2rem] font-black uppercase leading-none tracking-normal text-white sm:text-[2.65rem]"
            >
              tech stack
            </h2>
          </div>
          <div className="relative overflow-hidden rounded-full border border-white/10 bg-black/25">
            <div className="flex w-max transform-gpu gap-2 py-2 will-change-transform motion-safe:animate-stack-marquee motion-reduce:animate-none">
              {items.map((tech, index) => {
                const Icon = ICONS[tech.icon]
                return (
                  <span
                    key={`${tech.name}-${index}`}
                    className={`${chipBase} ${
                      tech.accent
                        ? 'border-accent/26 bg-accent/[0.105] text-white'
                        : 'border-white/10 bg-white/[0.045] text-white/68'
                    }`}
                  >
                    {Icon ? <Icon className="h-5 w-5 text-white/86 sm:h-6 sm:w-6" /> : null}
                    {tech.name}
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechMarquee
