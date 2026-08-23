import React, { useCallback, useEffect, useState } from 'react'
import SiteNav from './ohshin/SiteNav'
import HomePage from './ohshin/HomePage'
import WorkPage from './ohshin/WorkPage'

const getPath = () => {
  const path = window.location.pathname.replace(/\/+$/, '')
  return path === '/work' ? 'work' : 'home'
}

const App = () => {
  const [page, setPage] = useState(getPath)
  const [glitching, setGlitching] = useState(false)

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    const onPop = () => {
      setPage(getPath())
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = useCallback((to) => {
    window.history.pushState({}, '', to)
    setPage(getPath())
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return undefined
    let timeout
    const schedule = () => {
      timeout = window.setTimeout(() => {
        setGlitching(true)
        window.setTimeout(() => {
          setGlitching(false)
          schedule()
        }, 160)
      }, 4500 + Math.random() * 5500)
    }
    schedule()
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <>
      <main className={`bg-ink text-fog ${glitching ? 'page-glitch' : ''}`}>
        {page === 'work' ? <WorkPage /> : <HomePage />}
        <SiteNav page={page} navigate={navigate} />
      </main>
      <div className="crt-overlay" aria-hidden="true">
        <div className="crt-scanlines" />
        <div className="crt-vignette" />
        <div className="crt-glitch-bar" />
      </div>
    </>
  )
}

export default App
