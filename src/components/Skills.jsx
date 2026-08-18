import React from 'react';
import TechIcons from './tech-icons.jsx';

const Skills = () => {
  const techStack = TechIcons();
  const half = Math.ceil(techStack.length / 2);
  const rowA = techStack.slice(0, half);
  const rowB = techStack.slice(half);

  const renderRow = (items) => (
    <>
      {[...items, ...items].map((tech, i) => {
        const Icon = tech.icon;
        return (
          <span key={`${tech.name}-${i}`} className="flex shrink-0 items-center gap-3 px-6">
            <Icon className={`h-5 w-5 ${tech.iconColor}`} />
            <span className="whitespace-nowrap text-base font-semibold text-[var(--text)]">
              {tech.name}
            </span>
            <span className="ml-3 text-[var(--accent)]">·</span>
          </span>
        );
      })}
    </>
  );

  return (
    <section id="skills" className="border-y border-[var(--border)] py-14">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-lg text-[var(--accent)]">02.</span>
          <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--text)]">
            Tech Stack
          </h2>
          <span className="hidden h-px flex-1 bg-[var(--border)] sm:block" />
        </div>
        <p className="mt-4 text-[var(--muted)]">
          The tools I use to build production software.
        </p>
      </div>

      <div className="marquee-paused mt-10 space-y-6 overflow-hidden" style={{ ['--marquee-speed']: '28s' }}>
        <div className="marquee-track">{renderRow(rowA)}</div>
        <div className="marquee-track marquee-reverse">{renderRow(rowB)}</div>
      </div>
    </section>
  );
};

export default Skills;
