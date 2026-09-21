import React from 'react'

const HeroBackdrop = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
    >
      <picture>
        <source srcSet={`${import.meta.env.BASE_URL}hero-bg.webp`} type="image/webp" />
        <img
          src={`${import.meta.env.BASE_URL}hero-bg.jpg`}
          alt=""
          fetchpriority="high"
          decoding="async"
          width="1920"
          height="1080"
          className="hero-photo h-full w-full object-cover object-center"
        />
      </picture>

      {/* scrim: keeps the headline readable over the busy mid-frame */}
      <div
        className="absolute inset-0"
        style={{ background: 'var(--hero-scrim)' }}
      />

      {/* vignette + accent tint to marry the photo to the red palette */}
      <div
        className="absolute inset-0"
        style={{ background: 'var(--hero-vignette)' }}
      />
    </div>
  )
}

export default HeroBackdrop
