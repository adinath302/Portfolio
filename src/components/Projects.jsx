import React from 'react';
import PortfolioStore from './useStore';
import { FaGithub } from 'react-icons/fa6';
import { SiReact, SiTailwindcss, SiVite } from 'react-icons/si';
import reactSvg from '../assets/react.svg';

const projects = [
  {
    name: 'E-Commerce Dashboard',
    description: 'Modern responsive dashboard with real-time analytics and user management.',
    image: reactSvg,
    tech: ['React', 'Tailwind', 'Vite'],
    live: '#',
    github: '#',
  },
  {
    name: 'Weather App',
    description: 'Real-time weather forecasts with interactive maps and hourly predictions.',
    image: reactSvg,
    tech: ['React', 'Tailwind', 'API'],
    live: '#',
    github: '#',
  },
  {
    name: 'Task Manager',
    description: 'Simple yet powerful task management app with drag & drop and dark mode.',
    image: reactSvg,
    tech: ['React', 'Tailwind', 'LocalStorage'],
    live: '#',
    github: '#',
  },
];

const Projects = () => {
  const theme = PortfolioStore((state) => state.theme);
  return (
    <section className='px-6 mt-10.5 mb-2'>
      <h2 className='text-start mb-4 text-black text-sm! font-light'>Projects</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto'>
        {projects.map((project, index) => (
          <div key={index} className='group bg-gray-900/20 backdrop-blur-md rounded-lg border border-gray-800/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.01]'>
            <div className='relative rounded mb-2 h-10 overflow-hidden'>
              <img src={project.image} alt={project.name} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' />
            </div>
            <h3 className={`${theme ? 'text-black' : 'text-white'} mb-1`}>{project.name}</h3>
            <p className={`${theme ? 'text-gray-600' : 'text-gray-400'} mb-2`}>{project.description}</p>
            <div className='flex gap-1 mb-2 h-5 items-center'>
              {project.tech.map((tech, i) => {
                const Icon = tech === 'React' ? SiReact : tech === 'Tailwind' ? SiTailwindcss : tech === 'Vite' ? SiVite : SiReact;
                return (
                  <div key={i} className='group relative bg-gray-800/40 hover:bg-gray-700/50 rounded transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-cyan-500/30 cursor-pointer'>
                    <Icon className='text-cyan-400 group-hover:text-white group-hover:drop-shadow-lg transition-all duration-300' />
                  </div>
                );
              })}
            </div>
            <div className='flex gap-1 pt-0'>
              <a href={project.live} className='flex items-center gap-1 bg-linear-to-r from-cyan-500/80 to-blue-500/80 text-white rounded hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 font-semibold flex-1 justify-center'>
                Live
              </a>
              <a href={project.github} className='bg-gray-800/40 hover:bg-gray-700/50 text-gray-300 rounded transition-all duration-200 hover:scale-105'>
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

