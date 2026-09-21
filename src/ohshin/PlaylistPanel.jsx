import React from 'react'

const SPOTIFY_EMBED_URL =
  'https://open.spotify.com/embed/playlist/5GWicPzHq8xkc63h9KJU0q?utm_source=generator&theme=0'

const PlaylistPanel = () => {
  const [hasError, setHasError] = React.useState(false)

  return (
    <div
      className="relative isolate min-w-0 overflow-hidden rounded-[2rem] p-5 motion-safe:animate-glass-breathe [contain:paint] sm:p-6 motion-safe:[animation-delay:-5.6s] motion-safe:[animation-duration:13.1s]"
      style={{
        background: 'var(--c-surface-strong)',
        boxShadow: '0 18px 70px var(--c-shadow), inset 0 1px 0 var(--c-glass-highlight)',
        border: '1px solid var(--c-border)',
      }}
    >

      <section>
        <div className="flex items-end justify-between gap-4">
          <h2
            data-text="playlists"
            className="glitch-hover font-doto text-[2rem] font-black uppercase leading-none tracking-normal sm:text-[3.4rem]"
            style={{ color: 'var(--c-text)' }}
          >
            playlists
          </h2>
          <p className="font-mono text-[0.56rem] uppercase tracking-[0.2em] sm:text-[0.6rem] sm:tracking-[0.28em]" style={{ color: 'var(--c-text-muted)' }}>
            records shelf
          </p>
        </div>

        <div className="mt-5 overflow-hidden rounded-[1.25rem] ring-1" style={{ borderColor: 'var(--c-border)' }}>
          {hasError ? (
            <div
              className="flex h-[352px] items-center justify-center p-6 text-center font-mono text-sm"
              style={{ background: 'var(--c-overlay)', color: 'var(--c-text-sec)' }}
            >
              <p>Spotify player unavailable. <a href="https://open.spotify.com/playlist/5GWicPzHq8xkc63h9KJU0q" target="_blank" rel="noreferrer" className="underline" style={{ color: 'var(--c-text)' }}>Open in Spotify</a></p>
            </div>
          ) : (
            <iframe
              src={SPOTIFY_EMBED_URL}
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              className="w-full"
              style={{ borderRadius: '1.25rem' }}
              title="Spotify Player"
              onError={() => setHasError(true)}
            />
          )}
        </div>
      </section>
    </div>
  )
}

export default PlaylistPanel
