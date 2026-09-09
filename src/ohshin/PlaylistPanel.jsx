import React from 'react'

const SPOTIFY_EMBED_URL =
  'https://open.spotify.com/embed/playlist/5GWicPzHq8xkc63h9KJU0q?utm_source=generator&theme=0'

const PlaylistPanel = () => {
  return (
    <div className="relative isolate min-w-0 overflow-hidden rounded-[2rem] bg-white/[0.075] p-5 shadow-[0_18px_70px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.10)] ring-1 ring-white/10 motion-safe:animate-glass-breathe [contain:paint] sm:p-6 motion-safe:[animation-delay:-5.6s] motion-safe:[animation-duration:13.1s]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -z-10 w-1/2 motion-safe:animate-glass-sheen left-[-42%] bg-white/[0.032] motion-safe:[animation-delay:-7.4s] motion-safe:[animation-duration:14.2s]"
      />
      <section>
        <div className="flex items-end justify-between gap-4">
          <h2
            data-text="playlists"
            className="glitch-hover font-doto text-[2rem] font-black uppercase leading-none tracking-normal text-white sm:text-[3.4rem]"
          >
            playlists
          </h2>
          <p className="font-mono text-[0.56rem] uppercase tracking-[0.2em] text-white/42 sm:text-[0.6rem] sm:tracking-[0.28em]">
            records shelf
          </p>
        </div>

        <div className="mt-5 overflow-hidden rounded-[1.25rem] ring-1 ring-white/8">
          <iframe
            src={SPOTIFY_EMBED_URL}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="w-full"
            style={{ borderRadius: '1.25rem' }}
            title="Spotify Player"
          />
        </div>
      </section>
    </div>
  )
}

export default PlaylistPanel
