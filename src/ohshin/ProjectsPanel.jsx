import React from 'react'
import { FaGithub } from 'react-icons/fa6'
import { FiExternalLink } from 'react-icons/fi'
import Tilt from './Tilt'
import { projects } from './data'

const delays = ['160ms', '240ms', '320ms']

const ProjectsPanel = () => {
  return (
    <main className="motion-safe:animate-work-reveal min-w-0 [animation-delay:280ms]">
      <section className="relative isolate overflow-hidden rounded-[2rem] bg-white/[0.045] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.26),0_0_52px_rgba(211,23,10,0.14),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/10 backdrop-blur-2xl motion-safe:animate-glass-breathe sm:p-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -z-10 w-1/2 motion-safe:animate-glass-sheen left-[-35%] bg-white/[0.04] motion-safe:[animation-delay:-6.2s] motion-safe:[animation-duration:12.7s]"
        />
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
                  <FaGithub className="h-7 w-7" />
                </a>
                {project.liveUrl && (
                  <a
                    aria-label={`${project.title} live site`}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-opacity hover:opacity-70"
                  >
                    <FiExternalLink className="h-6 w-6" />
                  </a>
                )}
              </div>
            </article>
            </Tilt>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProjectsPanel
