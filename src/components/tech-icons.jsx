import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaDatabase, FaStore } from 'react-icons/fa6';
import { SiVite, SiTypescript, SiTailwindcss, SiGsap, SiJavascript, SiFramer, SiNextdotjs } from 'react-icons/si';
import PortfolioStore from './useStore.jsx';

const TechIcons = () => {
  const theme = PortfolioStore((state) => state.theme);
  const techData = [
    { name: 'React', icon: FaReact, iconColor: 'text-[#61DAFB] group-hover:text-[#61DAFB]/90 duration-200', textColor: 'text-black dark:text-white group-hover:text-gray-800 animate-pulse opacity-100 duration-500', url: 'https://react.dev' },
    { name: 'Next.js', icon: SiNextdotjs, iconColor: theme ? 'text-gray-900 group-hover:text-gray-900/90 duration-200' : 'text-white group-hover:text-white/90 duration-200', textColor: 'text-black dark:text-white group-hover:text-gray-800 animate-pulse opacity-100 duration-500', url: 'https://nextjs.org' },
    { name: 'TypeScript', icon: SiTypescript, iconColor: 'text-[#3178C6] group-hover:text-[#3178C6]/90 duration-200', textColor: 'text-black dark:text-white group-hover:text-gray-800 animate-pulse opacity-100 duration-500', url: 'https://www.typescriptlang.org' },
    { name: 'JavaScript', icon: SiJavascript, iconColor: 'text-[#F7DF1E] group-hover:text-[#F7DF1E]/90 duration-200', textColor: 'text-black dark:text-white group-hover:text-gray-800 animate-pulse opacity-100 duration-500', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'Tailwind', icon: SiTailwindcss, iconColor: 'text-[#38BDF8] group-hover:text-[#38BDF8]/90 duration-200', textColor: 'text-black dark:text-white group-hover:text-gray-800 animate-pulse opacity-100 duration-500', url: 'https://tailwindcss.com' },
    { name: 'Vite', icon: SiVite, iconColor: 'text-[#646CFF] group-hover:text-[#646CFF]/90 duration-200', textColor: 'text-black dark:text-white group-hover:text-gray-800 animate-pulse opacity-100 duration-500', url: 'https://vitejs.dev' },
    { name: 'GSAP', icon: SiGsap, iconColor: 'text-[#239BFF] group-hover:text-[#239BFF]/90 duration-200', textColor: 'text-black dark:text-white group-hover:text-gray-800 animate-pulse opacity-100 duration-500', url: 'https://gsap.com' },
    { name: 'TanStack Query', icon: FaDatabase, iconColor: 'text-[#0D5CB6] group-hover:text-[#0D5CB6]/90 duration-200', textColor: 'text-black dark:text-white group-hover:text-gray-800 animate-pulse opacity-100 duration-500', url: 'https://tanstack.com/query/latest' },
    { name: 'Zustand', icon: FaStore, iconColor: 'text-[#00C4B4] group-hover:text-[#00C4B4]/90 duration-200', textColor: 'text-black dark:text-white group-hover:text-gray-800 animate-pulse opacity-100 duration-500', url: 'https://zustand-demo.pmnd.rs' },
    { name: 'Framer Motion', icon: SiFramer, iconColor: 'text-[#0055FF] group-hover:text-[#0055FF]/90 duration-200', textColor: 'text-black dark:text-white group-hover:text-gray-800 animate-pulse opacity-100 duration-500', url: 'https://www.framer.com/motion' },
    { name: 'HTML', icon: FaHtml5, iconColor: 'text-[#E34F26] group-hover:text-[#E34F26]/90 duration-200', textColor: 'text-black dark:text-white group-hover:text-gray-800 animate-pulse opacity-100 duration-500', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', icon: FaCss3Alt, iconColor: 'text-[#1572B6] group-hover:text-[#1572B6]/90 duration-200', textColor: 'text-black dark:text-white group-hover:text-gray-800 animate-pulse opacity-100 duration-500', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  ];
  return techData;
};

export default TechIcons;
