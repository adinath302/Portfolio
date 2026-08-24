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

  return (
    <main className="bg-ink text-fog">
      {page === 'work' ? <WorkPage /> : <HomePage />}
      <SiteNav page={page} navigate={navigate} />
    </main>
  )
}

export default App
