import React from 'react';
import PortfolioStore from './useStore';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const theme = PortfolioStore((state) => state.theme);

  // Structural Theme Tokens
  const labelColor = theme ? 'text-emerald-600' : 'text-emerald-400';
  const textColor = theme ? 'text-slate-900' : 'text-slate-100';
  const descriptionColor = theme ? 'text-slate-600' : 'text-slate-400';
  const subTextColor = theme ? 'text-slate-500' : 'text-slate-400';
  const linkColor = theme ? 'text-slate-900 hover:text-emerald-600' : 'text-white hover:text-emerald-400';
  const cardBorder = theme ? 'border-slate-200/60' : 'border-white/5';
  const badgeBg = theme ? 'bg-slate-100 text-slate-800' : 'bg-white/[0.04] text-slate-300';

  const projects = [
    {
      id: 1,
      title: 'Sub-Agents Directory',
      tech: ['Next.js', 'Tailwind CSS', 'Claude API'],
      description: 'Curated collection of Claude Code sub-agent prompts and MCP servers. Discover sub-agents, engineered system prompts, and custom development pipelines seamlessly.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      livePreview: '#',
      repoUrl: '#',
    },
    {
      id: 2,
      title: 'Codejeet',
      tech: ['Next.js', 'TypeScript', 'Selenium', 'pSEO'],
      description: 'System Design and DSA learning platform featuring 17,000+ company-wise LeetCode questions scraped via automated Selenium drivers and rendered dynamically using programmatic SEO structures.',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
      livePreview: '#',
      repoUrl: '#',
    },
  ];

  return (
    // Clean max-width layout matching the global design column
    <section id="projects" className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-24">
      
      {/* Aligned Heading Label */}
      <div className="mb-12">
        <h2 className={`t-h-label ${labelColor} mb-2`}>
          Featured Projects
        </h2>
        <p className={`t-body ${descriptionColor}`}>
          A collection of system design platforms, open-source directories, and engineering tools.
        </p>
      </div>


      {/* 2-Column Responsive Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col group">

            {/* Project Frame Box & Image Link */}
            <a 
              href={project.livePreview} 
              target="_blank" 
              rel="noreferrer" 
              className={`block w-full overflow-hidden rounded-2xl border ${cardBorder} mb-5`}
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
            </a>

            {/* Project Information Meta Stack */}
            <div className="flex flex-col flex-grow space-y-3">
              
              <div className="space-y-1">
                <h3 className={`text-xl font-bold tracking-tight transition-colors duration-200 ${textColor}`}>
                  {project.title}
                </h3>
                
                {/* Tech Badges Array: Replaced flat string with modular tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tech.map((techItem, index) => (
                    <span 
                      key={index} 
                      className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${badgeBg}`}
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Body Text */}
              <p className={`text-sm md:text-base leading-relaxed font-normal ${descriptionColor} flex-grow`}>
                {project.description}
              </p>

              {/* Interactive Action Links */}
              <div className="flex items-center gap-6 pt-2">
                {project.livePreview && (
                  <a
                    href={project.livePreview}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-colors uppercase duration-200 ${linkColor}`}
                  >
                    <FiExternalLink className="w-3.5 h-3.5" />
                    Live Preview
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-colors uppercase duration-200 ${linkColor}`}
                  >
                    <FiGithub className="w-3.5 h-3.5" />
                    Codebase
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;