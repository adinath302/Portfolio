import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaDatabase, FaStore } from 'react-icons/fa6';
import { SiVite, SiTypescript, SiTailwindcss, SiGsap, SiJavascript, SiFramer, SiNextdotjs, SiPrisma } from 'react-icons/si';
import PortfolioStore from './useStore.jsx';
// FIXED: Removed curly braces around img for the default asset export
import img from "../../public/shadcn.png"; 

const TechIcons = () => {
  const theme = PortfolioStore((state) => state.theme);
  
  // FIXED: Ensured custom image component accepts and applies className properly
  const ShadcnIcon = ({ className }) => (
    <img src={img} alt="shadcn ui" className={`${className} object-contain`} />
  );

  return [
    { name: 'React', icon: FaReact, iconColor: 'text-[#61DAFB]' },
    { name: 'Next.js', icon: SiNextdotjs, iconColor: theme ? 'text-slate-900' : 'text-white' },
    { name: 'TypeScript', icon: SiTypescript, iconColor: 'text-[#3178C6]' },
    { name: 'JavaScript', icon: SiJavascript, iconColor: 'text-[#F7DF1E]' },
    { name: 'Tailwind', icon: SiTailwindcss, iconColor: 'text-[#38BDF8]' },
    { name: 'Vite', icon: SiVite, iconColor: 'text-[#646CFF]' },
    { name: 'GSAP', icon: SiGsap, iconColor: 'text-[#239BFF]' },
    { name: 'TanStack Query', icon: FaDatabase, iconColor: 'text-[#0D5CB6]' },
    { name: 'Zustand', icon: FaStore, iconColor: 'text-[#00C4B4]' },
    { name: 'Framer Motion', icon: SiFramer, iconColor: 'text-[#0055FF]' },
    { name: 'HTML5', icon: FaHtml5, iconColor: 'text-[#E34F26]' },
    { name: 'CSS3', icon: FaCss3Alt, iconColor: 'text-[#1572B6]' },
    { name: 'Prisma', icon: SiPrisma, iconColor: theme ? 'text-slate-800' : 'text-slate-300' },
    { name: 'shadcn ui', icon: ShadcnIcon, iconColor: '' },
  ];
};

export default TechIcons;
