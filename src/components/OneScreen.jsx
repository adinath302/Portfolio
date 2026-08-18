import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import AnimatedThemeToggler from './AnimatedThemeToggler';

const sections = [
  {
    id: 'about',
    label: 'About',
    title: 'About',
    content: (
      <p className="max-w-md text-lg leading-relaxed text-[var(--muted)]">
        Front-End Engineer who thrives in the zero-to-one phase — partnering
        with founders to define products, ship MVPs in weeks, and iterate on
        real feedback.
      </p>
    ),
  },
  {
    id: 'skills',
    label: 'Skills',
    title: 'Skills',
    content: (
      <ul className="max-w-md space-y-2 text-lg text-[var(--muted)]">
        {[
          'React · Next.js · TypeScript',
          'JavaScript · Tailwind CSS · Vite',
          'GSAP · TanStack Query · Zustand',
          'Framer Motion · Prisma · shadcn/ui',
          'HTML5 · CSS3',
        ].map((skill) => (
          <li key={skill} className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            {skill}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: 'projects',
    label: 'Projects',
    title: 'Projects',
    content: (
      <div className="max-w-md space-y-4">
        {[
          { name: 'Sub-Agents Directory', desc: 'Curated sub-agent prompts & MCP servers.', href: '#' },
          { name: 'Codejeet', desc: '17,000+ company-wise DSA questions.', href: '#' },
        ].map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-4 border-b border-[var(--border)] pb-3"
          >
            <div>
              <p className="font-semibold text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                {project.name}
              </p>
              <p className="text-sm text-[var(--muted)]">{project.desc}</p>
            </div>
            <FiArrowUpRight className="h-4 w-4 shrink-0 text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]" />
          </a>
        ))}
      </div>
    ),
  },
  {
    id: 'contact',
    label: 'Contact',
    title: 'Contact',
    content: (
      <div className="flex max-w-md flex-wrap gap-3">
        {[
          { label: 'Email', href: 'mailto:adinathgaware23072003@gmail.com' },
          { label: 'GitHub', href: 'https://github.com/adinath302' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/adinath-gaware-97a68225a/' },
          { label: 'X', href: 'https://x.com/Adinath302' },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--border)] px-5 py-2 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {link.label}
          </a>
        ))}
      </div>
    ),
  },
];

const OneScreen = () => {
  const [active, setActive] = useState('about');
  const [rotatingIndex, setRotatingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingIndex((i) => (i + 1) % sections.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const activeSection = sections.find((s) => s.id === active);

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-white text-[var(--text)]">
      <header className="flex items-center justify-between px-8 py-6 md:px-12">
        <a href="#top" className="font-mono text-sm font-bold tracking-tight text-[var(--text)]">
          adinath<span className="text-[var(--accent)]">.dev</span>
        </a>
        <AnimatedThemeToggler />
      </header>

      <main className="flex flex-1 flex-col justify-center gap-14 px-8 py-10 md:flex-row md:items-center md:gap-24 md:px-12">
        <div className="md:w-1/2">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
            Front-End Engineer
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-[1.05] tracking-tight text-[var(--text)] md:text-7xl">
            Adinath
            <br />
            <span className="text-[var(--accent)]">Gaware</span>
          </h1>

          <div className="mt-8 h-10 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={rotatingIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="text-xl font-medium text-[var(--muted)]"
              >
                {sections[rotatingIndex].label}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="mb-6 flex items-center gap-3">
            <span className="font-mono text-sm text-[var(--accent)]">
              {String(sections.findIndex((s) => s.id === active) + 1).padStart(2, '0')}
            </span>
            <span className="h-px w-10 bg-[var(--border)]" />
          </div>

          <div className="min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-[var(--text)] md:text-4xl">
                  {activeSection.title}
                </h2>
                {activeSection.content}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      <nav className="flex items-center justify-center gap-8 px-8 pb-8 md:gap-10">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => setActive(section.id)}
            className={`text-sm font-medium transition-colors ${
              active === section.id
                ? 'text-[var(--accent)]'
                : 'text-[var(--muted)] hover:text-[var(--text)]'
            }`}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default OneScreen;
