import React, { lazy, Suspense } from 'react'
import WorkHero from './WorkHero'
import ReachPanel from './ReachPanel'
import TechMarquee from './TechMarquee'

const ExperiencePanel = lazy(() => import('./ExperiencePanel'))
const ProjectsPanel = lazy(() => import('./ProjectsPanel'))
const ReachOut = lazy(() => import('./ReachOut'))

const WorkPage = () => {
  return (
    <section
      id="projects"
      className="relative isolate min-h-screen overflow-hidden"
      style={{ background: 'var(--c-bg)', color: 'var(--c-text)' }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background: 'radial-gradient(circle_at_18%_12%,rgba(211,23,10,0.06),transparent_30%),radial-gradient(circle_at_78%_72%,var(--c-overlay),transparent_30%)',
        }}
      />


      <div className="relative z-10 mx-auto min-h-screen w-full max-w-[1460px] px-4 py-6 pb-[calc(var(--site-nav-height)+2rem+env(safe-area-inset-bottom))] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        <WorkHero />
        <ReachPanel />
        <TechMarquee />
        <div className="grid gap-8 py-4 lg:grid-cols-[minmax(18rem,0.56fr)_minmax(0,1fr)] lg:gap-8 lg:py-6">
          <Suspense fallback={null}>
            <ExperiencePanel />
            <ProjectsPanel />
          </Suspense>
        </div>
        <Suspense fallback={null}>
          <ReachOut />
        </Suspense>
      </div>
    </section>
  )
}

export default WorkPage
