import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'Sub-Agents Directory',
    tech: ['Next.js', 'Tailwind CSS', 'Claude API'],
    description:
      'Curated collection of Claude Code sub-agent prompts and MCP servers. Discover sub-agents, engineered system prompts, and custom development pipelines seamlessly.',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    livePreview: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Codejeet',
    tech: ['Next.js', 'TypeScript', 'Selenium', 'pSEO'],
    description:
      'System Design and DSA learning platform featuring 17,000+ company-wise LeetCode questions scraped via automated Selenium drivers and rendered using programmatic SEO.',
    image:
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
    livePreview: '#',
    repoUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <div className="flex items-center gap-3">
        <span className="font-mono text-lg text-[var(--accent)]">04.</span>
        <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-[var(--text)]">
          Projects
        </h2>
        <span className="hidden h-px flex-1 bg-[var(--border)] sm:block" />
      </div>
      <p className="mt-4 text-[var(--muted)]">
        A collection of system design platforms, open-source directories, and
        engineering tools.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="glass overflow-hidden rounded-2xl"
          >
            <div className="aspect-[16/10] w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold tracking-tight text-[var(--text)]">
                {project.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((techItem, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {project.description}
              </p>

              <div className="mt-5 flex items-center gap-5">
                <a
                  href={project.livePreview}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm font-semibold text-[var(--text)] transition-colors hover:text-[var(--accent)]"
                >
                  <FiExternalLink className="h-4 w-4" />
                  Live Preview
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-sm font-semibold text-[var(--text)] transition-colors hover:text-[var(--accent)]"
                >
                  <FiGithub className="h-4 w-4" />
                  Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
