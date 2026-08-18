import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import AnimatedThemeToggler from './AnimatedThemeToggler';

const sections = [
  {
    id: 'about',
    number: '01',
    title: 'About',
    content: (
      <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)]">
        Front-End Engineer who thrives in the zero-to-one phase — partnering with
        founders to define products, ship MVPs in weeks, and iterate on real
        feedback. B.Tech in Computer Engineering, currently pursuing.
      </p>
    ),
  },
  {
    id: 'skills',
    number: '02',
    title: 'Skills',
    content: (
      <ul className="max-w-xl space-y-1 text-sm text-[var(--muted)]">
        {[
          'React · Next.js · TypeScript',
          'JavaScript · Tailwind CSS · Vite',
          'GSAP · Three.js · Framer Motion',
          'TanStack Query · Zustand · Prisma',
          'shadcn/ui · HTML5 · CSS3',
        ].map((skill) => (
          <li key={skill} className="flex items-center gap-2.5">
            <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
            {skill}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: 'projects',
    number: '03',
    title: 'Projects',
    content: (
      <div className="max-w-xl space-y-3">
        {[
          {
            name: 'Sub-Agents Directory',
            desc: 'Curated Claude Code sub-agent prompts and MCP servers.',
            href: '#',
          },
          {
            name: 'Codejeet',
            desc: '17,000+ company-wise DSA & system design questions.',
            href: '#',
          },
        ].map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-4 text-sm"
          >
            <div>
              <p className="font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                {project.name}
              </p>
              <p className="text-[var(--muted)]">{project.desc}</p>
            </div>
            <FiArrowUpRight className="h-4 w-4 shrink-0 text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]" />
          </a>
        ))}
      </div>
    ),
  },
  {
    id: 'contact',
    number: '04',
    title: 'Contact',
    content: (
      <div className="flex flex-wrap gap-3">
        {[
          { label: 'Email', href: 'mailto:adinathgaware23072003@gmail.com' },
          { label: 'GitHub', href: 'https://github.com/adinath302' },
          {
            label: 'LinkedIn',
            href: 'https://linkedin.com/in/adinath-gaware-97a68225a/',
          },
          { label: 'X', href: 'https://x.com/Adinath302' },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--border)] px-4 py-1.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {link.label}
          </a>
        ))}
      </div>
    ),
  },
];

const IndexList = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="mx-auto flex min-h-screen max-w-4xl flex-col px-6 py-10 md:px-10">
      <header className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
            Front-End Engineer
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text)] md:text-3xl">
            Adinath Gaware
          </h1>
        </div>
        <AnimatedThemeToggler />
      </header>

      <main className="mt-16 flex-1 md:mt-24">
        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <div key={section.id} className="border-b border-[var(--border)]">
              <button
                type="button"
                onClick={() => setActive(isActive ? null : section.id)}
                onMouseEnter={() => setActive(section.id)}
                className="group flex w-full items-baseline gap-5 py-6 text-left md:py-7"
              >
                <span
                  className={`font-mono text-sm transition-colors ${
                    isActive
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--muted)] group-hover:text-[var(--accent)]'
                  }`}
                >
                  {section.number}
                </span>
                <span
                  className={`text-2xl font-bold tracking-tight transition-colors md:text-4xl ${
                    isActive
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--text)] group-hover:text-[var(--text)]'
                  }`}
                >
                  {section.title}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-7 pl-[52px] md:pl-[62px]">
                      {section.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </main>

      <footer className="flex flex-wrap items-center justify-between gap-3 py-8 text-xs text-[var(--muted)]">
        <p>© 2026 Adinath Gaware</p>
        <p className="font-mono">
          Based in India · Working worldwide
        </p>
      </footer>
    </div>
  );
};

export default IndexList;
