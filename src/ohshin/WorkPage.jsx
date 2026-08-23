import React from 'react'
import WorkHero from './WorkHero'
import ReachPanel from './ReachPanel'
import TechMarquee from './TechMarquee'
import ExperiencePanel from './ExperiencePanel'
import ProjectsPanel from './ProjectsPanel'
import ReachOut from './ReachOut'

const WorkPage = () => {
  return (
    <section
      id="projects"
      className="relative isolate min-h-screen overflow-hidden bg-ink text-fog"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_12%,rgba(211,23,10,0.12),transparent_30%),radial-gradient(circle_at_78%_72%,rgba(255,255,255,0.05),transparent_30%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-28 top-24 -z-10 h-[34rem] w-[34rem] rounded-full bg-accent/12 blur-3xl motion-safe:animate-reach-pulse"
      />
      <div
        aria-hidden="true"
        className="absolute -right-32 top-[44rem] -z-10 h-[38rem] w-[38rem] rounded-full bg-white/[0.06] blur-3xl motion-safe:animate-reach-pulse"
      />

      <div className="relative z-10 mx-auto min-h-screen w-full max-w-[1460px] px-4 py-6 pb-[calc(var(--site-nav-height)+2rem+env(safe-area-inset-bottom))] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        <WorkHero />
        <ReachPanel />
        <TechMarquee />
        <div className="grid gap-8 py-4 lg:grid-cols-[minmax(18rem,0.56fr)_minmax(0,1fr)] lg:gap-8 lg:py-6">
          <ExperiencePanel />
          <ProjectsPanel />
        </div>
        <ReachOut />
      </div>
    </section>
  )
}

export default WorkPage
