import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Constellation from './Constellation';

const Hero = () => {
  return (
    <section
      id="top"
      className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pt-28 text-center md:pt-32"
    >
      <div className="t-label flex items-center gap-2 text-[var(--muted)]">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
        Front-End Engineer · Universe of Code
      </div>

      <h1 className="sr-only">Adinath Gaware</h1>

      <div className="mt-6 w-full max-w-3xl">
        <Constellation text="ADINATH" />
      </div>

      <div className="star-divider my-6 text-[var(--accent)]">
        <span className="text-lg">✦</span>
      </div>

      <p className="max-w-xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
        I build fast, polished web experiences with React &amp; Next.js —
        from the first star to a full galaxy of features.
      </p>

      <div className="mt-4 flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-4 py-1.5 text-sm font-semibold text-[var(--accent)]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
        </span>
        Available for work
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#projects"
          className="group flex items-center gap-2 rounded-full bg-[var(--text)] px-6 py-3 text-sm font-semibold text-[var(--bg)] transition-opacity hover:opacity-85"
        >
          Explore projects
          <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <a
          href="#contact"
          className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
