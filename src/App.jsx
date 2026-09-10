import React, { useCallback, useEffect, useState, useRef, Component } from 'react'
import SiteNav from './ohshin/SiteNav'
import HomePage from './ohshin/HomePage'
import WorkPage from './ohshin/WorkPage'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-ink p-8 text-center font-mono text-fog">
          <h1 className="font-doto text-3xl font-black uppercase">Something went wrong</h1>
          <p className="mt-4 text-white/60">Try refreshing the page.</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 rounded-full bg-white/10 px-6 py-2 text-sm uppercase tracking-widest text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
          >
            Reload
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

const getPath = () => {
  const path = window.location.pathname.replace(/\/+$/, '')
  if (path === '/work') return 'work'
  if (path === '' || path === '/') return 'home'
  return '404'
}

const NotFound = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-ink p-8 text-center font-mono text-fog">
    <h1 className="font-doto text-6xl font-black uppercase text-white/20">404</h1>
    <p className="mt-4 text-white/60">Page not found.</p>
    <a
      href="/"
      className="mt-6 rounded-full bg-white/10 px-6 py-2 text-sm uppercase tracking-widest text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
    >
      Go home
    </a>
  </div>
)

const App = () => {
  const [page, setPage] = useState(getPath)
  const [pageKey, setPageKey] = useState(0)
  const mainRef = useRef(null)

  useEffect(() => {
    const onPop = () => {
      setPage(getPath())
      setPageKey((k) => k + 1)
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.focus({ preventScroll: true })
    }
  }, [page])

  const navigate = useCallback((to) => {
    window.history.pushState({}, '', to)
    setPage(getPath())
    setPageKey((k) => k + 1)
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-black focus:outline-none"
      >
        Skip to content
      </a>
      <main
        ref={mainRef}
        id="main-content"
        tabIndex={-1}
        className="bg-ink text-fog outline-none"
      >
        <ErrorBoundary>
          <div key={pageKey} className="page-enter">
            {page === '404' && <NotFound />}
            {page === 'work' && <WorkPage />}
            {page === 'home' && <HomePage />}
          </div>
        </ErrorBoundary>
        <SiteNav page={page} navigate={navigate} />
      </main>
    </>
  )
}

export default App
