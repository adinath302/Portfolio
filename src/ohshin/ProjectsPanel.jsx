import React from 'react'
import Tilt from './Tilt'
import { projects } from './data'

const delays = ['160ms', '240ms', '320ms']

const GithubIcon = () => (
  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const ProjectsPanel = () => {
  return (
    <section className="motion-safe:animate-work-reveal min-w-0 [animation-delay:280ms]">
      <section className="relative isolate overflow-hidden rounded-[2rem] bg-white/[0.045] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.26),0_0_52px_rgba(211,23,10,0.14),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/10 backdrop-blur-2xl motion-safe:animate-glass-breathe sm:p-6">

        <div className="flex items-end justify-between gap-4">
          <h2
            data-text="projects"
            className="glitch-hover font-doto text-[1.9rem] font-black uppercase leading-none tracking-normal text-white sm:text-[3.2rem]"
          >
            projects
          </h2>
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-accent sm:text-[0.62rem] sm:tracking-[0.28em]">
            build log
          </p>
        </div>

        <div className="mt-6 grid gap-3">
          {projects.map((project, index) => (
            <Tilt key={project.title}>
              <article
                className="grid gap-4 rounded-[1.35rem] bg-white/[0.035] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-white/6 transition-[background-color,box-shadow,ring-color] duration-300 hover:bg-white/[0.05] hover:ring-accent/40 motion-safe:animate-work-reveal sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:px-5"
                style={{ animationDelay: delays[index] }}
              >
              <div className="hidden pr-5 font-doto text-[1.6rem] font-black leading-none text-accent/80 sm:block">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="min-w-0">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="font-doto text-[1.4rem] font-black leading-none text-accent/80 sm:hidden">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="min-w-0 break-words font-doto text-[1.22rem] font-black uppercase leading-none tracking-normal text-white sm:text-[1.82rem]">
                    {project.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-[46ch] font-mono text-[0.74rem] leading-6 text-white/58 sm:text-[0.8rem]">
                  {project.summary}
                </p>
              </div>
              <div className="flex h-full items-center gap-3 self-center justify-end text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.18)] sm:justify-start">
                <a
                  aria-label={`${project.title} GitHub`}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-opacity hover:opacity-70"
                >
                  <GithubIcon />
                </a>
                {project.liveUrl && (
                  <a
                    aria-label={`${project.title} live site`}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-opacity hover:opacity-70"
                  >
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
            </article>
            </Tilt>
          ))}
        </div>
      </section>
    </section>
  )
}

export default ProjectsPanel
