import React from 'react';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi';

const experience = [
  {
    role: 'Front-End Engineer',
    org: 'Zero-to-One Startups',
    period: 'Ongoing',
    type: 'work',
    points: [
      'Partner with founders to define products and ship MVPs in weeks.',
      'Iterate fast on real user feedback to shape product direction.',
      'Own the entire frontend layer: architecture, components, performance.',
    ],
  },
  {
    role: 'Open Source & Side Projects',
    org: 'Sub-Agents Directory · Codejeet',
    period: 'Ongoing',
    type: 'work',
    points: [
      'Built a curated directory of Claude Code sub-agent prompts and MCP servers.',
      'Engineered a DSA / System Design learning platform with 17,000+ company-wise questions.',
      'Automated data collection with Selenium and scaled content with programmatic SEO.',
    ],
  },
];

const education = [
  {
    role: 'B.Tech in Computer Engineering',
    org: 'India',
    period: 'Currently pursuing',
    type: 'education',
    points: [
      'Specializing in frontend engineering, web performance, and product design.',
      'Self-taught modern stack: React, Next.js, TypeScript, Tailwind CSS.',
    ],
  },
];

const Timeline = () => {
  const renderEntry = (item, index) => {
    const isWork = item.type === 'work';
    return (
      <div key={`${item.type}-${index}`} className="relative pl-14 pb-12 last:pb-0">
        {index !== 0 && (
          <span className="absolute left-[19px] top-12 bottom-0 w-px bg-[var(--border)]" aria-hidden="true" />
        )}

        <span
          className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] ${
            isWork ? 'text-[var(--accent)]' : 'text-[var(--secondary)]'
          }`}
        >
          {isWork ? <FiBriefcase className="h-4 w-4" /> : <FiBookOpen className="h-4 w-4" />}
        </span>

        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-lg font-bold text-[var(--text)]">{item.role}</h3>
          <span className="text-sm font-semibold text-[var(--accent)]">{item.org}</span>
        </div>

        <span className="mt-1 inline-block rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 text-xs font-semibold text-[var(--accent)]">
          {item.period}
        </span>

        <ul className="mt-3 space-y-1.5">
          {item.points.map((point) => (
            <li key={point} className="flex gap-2 text-sm leading-relaxed text-[var(--muted)]">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--secondary)]" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section id="resume" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="flex items-center gap-3">
        <span className="font-mono text-lg text-[var(--accent)]">03.</span>
        <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--text)]">
          Résumé
        </h2>
        <span className="hidden h-px flex-1 bg-[var(--border)] sm:block" />
      </div>
      <p className="mt-4 text-[var(--muted)]">Experience & education along the way.</p>

      <div className="mx-auto mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <h3 className="mb-6 text-lg font-bold text-[var(--text)]">
            <span className="text-[var(--accent)]">/</span> Experience
          </h3>
          <div className="relative">{experience.map(renderEntry)}</div>
        </div>

        <div>
          <h3 className="mb-6 text-lg font-bold text-[var(--text)]">
            <span className="text-[var(--secondary)]">/</span> Education
          </h3>
          <div className="relative">{education.map(renderEntry)}</div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
