import React from 'react';
import AnimatedThemeToggler from './AnimatedThemeToggler';
import PortfolioStore from './useStore';
import { motion } from 'framer-motion';

const Navbar = () => {
  const theme = PortfolioStore((state) => state.theme);

  // Layout Colors (Softened contrasts for a premium, intentional look)
  // Use same page bg shade in dark mode so navbar matches the rest of the layout
  const navBg = theme
    ? 'bg-white/80 backdrop-blur-md'
    : 'bg-[#100f0f]/80 backdrop-blur-md';

  const textColor = theme ? 'text-slate-800' : 'text-slate-200';
  const linkHoverColor = theme ? 'hover:text-emerald-600' : 'hover:text-emerald-400';
  const borderColor = theme ? 'border-slate-200/60' : 'border-white/5';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${navBg} ${borderColor}`}>
      {/* 
        NOTE ON ALIGNMENT: Ensure your Hero, Project, and Contact sections 
        also share this exact same max-width and horizontal padding setup 
        (max-w-5xl mx-auto px-6 md:px-8) so your entire site aligns perfectly.
      */}
      <div className="max-w-5xl mx-auto flex h-16 items-center justify-between px-6 md:px-8">
        
        {/* Brand / Logo */}
        <a 
          href="/" 
          className={`text-base font-bold tracking-tight transition-colors duration-200 ${textColor} hover:opacity-80`}
        >
          adinath<span className={theme ? 'text-emerald-600' : 'text-emerald-400'}>.codes</span>
        </a>

        {/* Navigation Actions */}
        <div className="flex items-center gap-6 md:gap-8">
          <ul className={`hidden sm:flex items-center gap-6 text-sm font-medium tracking-wide ${textColor}`}>
            <li>
              <a 
                href="#projects" 
                className={`transition-colors duration-200 ${linkHoverColor}`}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`transition-colors duration-200 ${linkHoverColor}`}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Minimalist Visual Divider */}
          <div className={`h-4 w-[1px] hidden sm:block ${theme ? 'bg-slate-200' : 'bg-white/10'}`} />

          {/* Interactive Toggle Target */}
          <div className="flex items-center justify-center min-w-[24px] min-h-[24px]">
            <AnimatedThemeToggler />
          </div>
        </div>

      </div>
    </nav> 
  );
};

export default Navbar;