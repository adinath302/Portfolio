import React from 'react'
import Tilt from './Tilt'
import { projects } from './data'

const delays = ['160ms', '240ms', '320ms']

const GithubIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const ProjectsPanel = () => {
  return (
    <section className="motion-safe:animate-work-reveal min-w-0 [animation-delay:280ms]">
      <section
        className="relative isolate overflow-hidden rounded-[2rem] p-5 backdrop-blur-2xl motion-safe:animate-glass-breathe sm:p-6"
        style={{
          background: 'var(--c-surface-strong)',
          boxShadow: 'var(--shadow-glass)',
          border: '1px solid var(--c-border)',
        }}
      >
        {/* subtle accent stripe at top */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[3px]"
          style={{ background: 'linear-gradient(90deg, var(--c-accent), transparent 80%)' }}
        />

        <div className="flex items-end justify-between gap-4">
          <h2
            data-text="projects"
            className="glitch-hover font-doto text-[1.9rem] font-black uppercase leading-none tracking-normal sm:text-[3.2rem]"
            style={{ color: 'var(--c-text)' }}
          >
            projects
          </h2>
          <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] sm:text-[0.62rem] sm:tracking-[0.28em]" style={{ color: 'var(--c-accent)' }}>
            build log
          </p>
        </div>

        <div className="mt-6 grid gap-3">
          {projects.map((project, index) => (
            <Tilt key={project.title}>
              <article
                className="group relative grid gap-4 rounded-[1.35rem] px-5 py-5 ring-1 transition-all duration-300 motion-safe:animate-work-reveal sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:px-6"
                style={{
                  background: 'var(--c-surface)',
                  boxShadow: 'var(--shadow-card)',
                  borderColor: 'var(--c-border)',
                  animationDelay: delays[index],
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--c-accent)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--c-border)'
                  e.currentTarget.style.boxShadow = 'var(--shadow-card)'
                }}
              >
              {/* index number */}
              <div className="hidden pr-5 font-doto text-[1.6rem] font-black leading-none sm:block" style={{ color: 'var(--c-accent)' }}>
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="min-w-0">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="font-doto text-[1.4rem] font-black leading-none sm:hidden" style={{ color: 'var(--c-accent)' }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="min-w-0 break-words font-doto text-[1.22rem] font-black uppercase leading-none tracking-normal sm:text-[1.82rem]"
                    style={{ color: 'var(--c-text)' }}
                  >
                    {project.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-[46ch] font-mono text-[0.74rem] leading-6 sm:text-[0.8rem]" style={{ color: 'var(--c-text-sec)' }}>
                  {project.summary}
                </p>
              </div>

              <div
                className="flex h-full items-center gap-3 self-center justify-end sm:justify-start"
                style={{ color: 'var(--c-text-sec)' }}
              >
                <a
                  aria-label={`${project.title} GitHub`}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full p-2 transition-all duration-200 hover:scale-110"
                  style={{ background: 'var(--c-surface)' }}
                >
                  <GithubIcon />
                </a>
                {project.liveUrl && (
                  <a
                    aria-label={`${project.title} live site`}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full p-2 transition-all duration-200 hover:scale-110"
                    style={{ background: 'var(--c-surface)' }}
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
