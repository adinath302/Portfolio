import React from 'react';
import CodeWindow from './CodeWindow';

const Hero = () => {
  return (
    <section
      id="top"
      className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-24 text-center"
    >
      <span className="rounded-full border border-[var(--border)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
        Front-End Engineer
      </span>

      <h1 className="mt-5 text-4xl font-bold tracking-tight text-[var(--text)] md:text-6xl">
        Adinath <span className="text-[var(--accent)]">Gaware</span>
      </h1>

      <p className="mt-3 max-w-xl text-lg text-[var(--muted)] md:text-xl">
        Building fast, polished web experiences with React &amp; Next.js — from
        zero-to-one products to scalable platforms.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#projects"
          className="rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          View Projects
        </a>
        <a
          href="mailto:adinathgaware23072003@gmail.com"
          className="rounded-xl border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          Contact Me
        </a>
      </div>

      <div className="mt-14 w-full max-w-2xl">
        <CodeWindow />
      </div>
    </section>
  );
};

export default Hero;
