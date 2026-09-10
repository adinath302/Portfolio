import React from 'react'
import { techStack } from './data'

const ReactIcon = () => (
  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.23 12.004a2.236 2.236 0 01-2.235 2.236 2.236 2.236 0 01-2.236-2.236 2.236 2.236 0 012.235-2.236 2.236 2.236 0 012.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.31 0-.594.064-.838.189-.72.378-1.253 1.17-1.355 2.229H1.058c-.236 0-.428.191-.428.428 0 6.624 5.376 12 12 12s12-5.376 12-12c0-.237-.19-.428-.428-.428h-2.424c-.102-1.059-.635-1.851-1.355-2.229-.244-.125-.528-.189-.838-.189zm-7.894 2.69c.934 0 1.696.762 1.696 1.696s-.762 1.696-1.696 1.696-1.696-.762-1.696-1.696.762-1.696 1.696-1.696zm7.794 0c.934 0 1.696.762 1.696 1.696s-.762 1.696-1.696 1.696-1.696-.762-1.696-1.696.762-1.696 1.696-1.696z" />
  </svg>
)

const NextjsIcon = () => (
  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 14.5h-2.1l-3.5-5.7V16.5H8.9V7.5h2.1l3.5 5.7V7.5h2.1v9z" />
  </svg>
)

const TSIcon = () => (
  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 011.306.34v2.458a3.95 3.95 0 00-.643-.361 5.093 5.093 0 00-.717-.26 5.453 5.453 0 00-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 00-.623.242c-.17.104-.3.229-.393.374a.888.888 0 00-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 01-1.012 1.085 4.38 4.38 0 01-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 01-1.84-.164 5.544 5.544 0 01-1.512-.493v-2.63a5.033 5.033 0 003.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 00-.074-1.089 2.12 2.12 0 00-.537-.5 5.597 5.597 0 00-.807-.444 27.72 27.72 0 00-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 011.47-.629 7.536 7.536 0 011.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
  </svg>
)

const JSIcon = () => (
  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.405-.6-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65z" />
  </svg>
)

const TailwindIcon = () => (
  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
  </svg>
)

const ViteIcon = () => (
  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.805 2.65L12.356 21.02c-.181.354-.714.372-.92.032L2.195 2.65c-.227-.376.162-.827.578-.747l8.82 1.68c.052.01.106.01.158 0l8.634-1.68c.416-.08.805.371.578.747zM1.5 2.85l9.452 18.37c.062.122.184.194.312.194h.076c.128 0 .25-.072.312-.194L21.101 2.85c.07-.137-.028-.29-.187-.29H1.687c-.159 0-.257.153-.187.29zM12 11.15l-7.143 1.37 6.252 12.03L12 11.15zm0 0l7.143 1.37-6.252 12.03L12 11.15z" />
  </svg>
)

const GSAPIcon = () => (
  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
)

const DatabaseIcon = () => (
  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
)

const StoreIcon = () => (
  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

const FramerIcon = () => (
  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
  </svg>
)

const PrismaIcon = () => (
  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 19.5h20L12 2zm0 4l6.5 11.5h-13L12 6z" />
  </svg>
)

const ShadcnIcon = () => (
  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-2-10h4v4h-4v-4z" />
  </svg>
)

const HtmlIcon = () => (
  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 20h20L12 2zm-1 4.5l5.5 12h-2.5l-1.5-4h-3l-1.5 4H5L10.5 6.5h.5z" />
  </svg>
)

const CssIcon = () => (
  <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 20h20L12 2zm-1 4.5l5.5 12h-2.5l-1.5-4h-3l-1.5 4H5L10.5 6.5h.5z" />
  </svg>
)

const ICONS = {
  react: ReactIcon,
  next: NextjsIcon,
  typescript: TSIcon,
  javascript: JSIcon,
  tailwind: TailwindIcon,
  vite: ViteIcon,
  gsap: GSAPIcon,
  query: DatabaseIcon,
  zustand: StoreIcon,
  framer: FramerIcon,
  prisma: PrismaIcon,
  shadcn: ShadcnIcon,
  html: HtmlIcon,
  css: CssIcon,
}

const chipBase =
  'chip-hover flex h-10 items-center gap-2 rounded-full border px-3 font-mono text-[0.58rem] uppercase tracking-[0.16em] shadow-[0_10px_26px_rgba(0,0,0,0.18)] sm:h-11 sm:px-4 sm:text-[0.62rem]'

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
          <div className="group/marquee relative overflow-hidden rounded-full border border-white/10 bg-black/25">
            <div className="flex w-max transform-gpu gap-2 py-2 will-change-transform motion-reduce:animate-none group-hover/marquee:[animation-play-state:paused] group-focus-within/marquee:[animation-play-state:paused]" style={{ animation: 'marquee 30s linear infinite' }}>
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
                    {Icon ? <Icon /> : null}
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
