import React from 'react';
import AnimatedThemeToggler from './AnimatedThemeToggler';
import PortfolioStore from './useStore';
import { motion } from 'framer-motion';

const Navbar = () => {
  const theme = PortfolioStore((state) => state.theme);

  // Background: Soft White for Light | Deep Charcoal for Dark (Easier on eyes than pure black)
  const navBg = theme ? 'bg-white' : 'bg-[#121212]'; 
  const textColor = theme ? 'text-slate-900' : 'text-slate-200';
  const borderColor = theme ? 'border-slate-200' : 'border-white/10';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 border-b transition-colors duration-500 ${navBg} ${borderColor}`}>
      <div className="max-w-5xl mx-auto flex h-16 items-center justify-between px-8 md:px-12">
        
        {/* Brand/Logo */}
        <a 
          href="/" 
          className={`text-sm font-bold tracking-widest uppercase transition-colors ${textColor}`}
        >
          adinath.codes
        </a>

        {/* Navigation & Toggler */}
        <div className="flex items-center gap-8">
          <ul className={`hidden sm:flex gap-6 text-[14px] font-semibold tracking-wide ${textColor}`}>
            <li className="hover:text-green-500 transition-colors"><a href="#projects">Projects</a></li>
            <li className="hover:text-green-500 transition-colors"><a href="#contact">Contact</a></li>
          </ul>

          {/* Simple Divider */}
          <div className={`h-4 w-[1px] hidden sm:block ${theme ? 'bg-slate-200' : 'bg-white/10'}`} />

          <AnimatedThemeToggler />
        </div>
      </div>
    </nav> 
  );
};

export default Navbar;