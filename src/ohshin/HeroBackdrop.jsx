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
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,4,8,0.55)_0%,rgba(3,4,8,0.26)_38%,rgba(3,4,8,0.82)_100%)]" />

      {/* vignette + accent tint to marry the photo to the red palette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.46)_80%),radial-gradient(circle_at_72%_76%,rgba(211,23,10,0.16),transparent_38%)]" />
    </div>
  )
}

export default HeroBackdrop
