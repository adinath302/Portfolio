import React from 'react';
import PortfolioStore from './useStore';
import { FiExternalLink, FiGithub } from 'react-icons/fi'; // Clean line icons matching the image

const Projects = () => {
  const theme = PortfolioStore((state) => state.theme);

  // Colors matching the screenshot's high-contrast minimalist look
  const textColor = theme ? 'text-slate-900' : 'text-[#f2f2f2]';
  const subTextColor = theme ? 'text-slate-600' : 'text-[#a1a1aa]'; // Muted grey for descriptions
  const linkColor = theme ? 'text-slate-900 hover:text-slate-600' : 'text-white hover:text-gray-300';
  const imageBg = theme ? 'bg-slate-100' : 'bg-[#111111]';

  const projects = [
    {
      id: 1,
      title: 'Sub-Agents Directory',
      tech: 'Next.js / Tailwind CSS',
      description: 'Curated collection of Claude Code sub-agent prompts and MCP servers. Discover sub-agents, prompts and more.',
      image: 'https://via.placeholder.com/600x400/111111/333333?text=Project+Image', // Replace with actual image path
      livePreview: '#',
      repoUrl: '#',
    },
    {
      id: 2,
      title: 'Codejeet',
      tech: 'Next.js / TypeScript / Selenium / Tailwind CSS',
      description: 'System Design and DSA learning platform with 17,000+ company-wise LeetCode questions scraped via Selenium and pSEO blogs. 345K+...',
      image: 'https://via.placeholder.com/600x400/111111/333333?text=Project+Image', // Replace with actual image path
      livePreview: '#',
      repoUrl: '#',
    },
    // Add more projects here to fill the grid
  ];

  return (
    <section id="projects" className="max-w-5xl mx-auto px-8 md:px-12 py-16">
      {/* The Serif Header from the screenshot */}
      <h2 className={`text-2xl md:text-3xl font-serif tracking-wide mb-10 ${textColor}`}>
        Featured Projects
      </h2>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col group">
            
            {/* Project Image Container */}
            <a href={project.livePreview} target="_blank" rel="noreferrer" className="block w-full overflow-hidden rounded-xl mb-5">
              <div className={`aspect-[16/10] w-full ${imageBg} transition-transform duration-500 group-hover:scale-[1.02]`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover rounded-xl border border-white/5"
                />
              </div>
            </a>

            {/* Project Info */}
            <div className="flex flex-col">
              <h3 className={`text-lg font-semibold tracking-tight ${textColor}`}>
                {project.title}
              </h3>
              
              <p className={`text-[13px] mt-1 ${subTextColor}`}>
                {project.tech}
              </p>

              <p className={`text-[14px] leading-relaxed mt-4 ${subTextColor}`}>
                {project.description}
              </p>

              {/* Links */}
              <div className="flex items-center gap-6 mt-5">
                {project.livePreview && (
                  <a 
                    href={project.livePreview} 
                    target="_blank" 
                    rel="noreferrer"
                    className={`flex items-center gap-2 text-[13px] font-semibold transition-colors ${linkColor}`}
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Live Preview
                  </a>
                )}
                {project.repoUrl && (
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className={`flex items-center gap-2 text-[13px] font-semibold transition-colors ${linkColor}`}
                  >
                    <FiGithub className="w-4 h-4" />
                    Repo Url
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