import React, { useEffect, useState } from 'react'

const GlitchText = ({ text, className, charDelay = 45, startDelay = 0 }) => {
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const t = window.setTimeout(() => setStarted(true), startDelay)
    return () => window.clearTimeout(t)
  }, [startDelay])

  return (
    <span className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={`${i}-${char}`}
          aria-hidden="true"
          className={`char-reveal ${started ? 'char-in' : ''}`}
          style={{ transitionDelay: `${startDelay + i * charDelay}ms` }}
        >
          {char}
        </span>
      ))}
    </span>
  )
}

export default GlitchText
