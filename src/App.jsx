import React, { useEffect } from 'react'
import OneScreen from './components/OneScreen'
import PortfolioStore from './components/useStore'

const NIGHT = {
  '--bg': '#111827',
  '--surface': 'rgba(255, 255, 255, 0.05)',
  '--border': 'rgba(255, 255, 255, 0.1)',
  '--text': '#e5e7eb',
  '--muted': '#9ca3af',
  '--accent': '#60a5fa',
  '--accent-soft': 'rgba(96, 165, 250, 0.12)',
  '--secondary': '#93c5fd',
}

const DAWN = {
  '--bg': '#ffffff',
  '--surface': 'rgba(255, 255, 255, 0.8)',
  '--border': 'rgba(17, 24, 39, 0.12)',
  '--text': '#1f2937',
  '--muted': '#6b7280',
  '--accent': '#3b82f6',
  '--accent-soft': 'rgba(59, 130, 246, 0.1)',
  '--secondary': '#2563eb',
}

const App = () => {
  const theme = PortfolioStore((state) => state.theme)

  useEffect(() => {
    const root = document.documentElement
    const tokens = theme ? DAWN : NIGHT
    Object.entries(tokens).forEach(([key, value]) =>
      root.style.setProperty(key, value)
    )
  }, [theme])

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <OneScreen />
    </div>
  )
}

export default App
