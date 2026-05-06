import React from 'react';
import { motion, useScroll } from 'framer-motion';
import AnimatedThemeToggler from './AnimatedThemeToggler';
import PortfolioStore from './useStore';

const Navbar = () => {
  const theme = PortfolioStore((state) => state.theme);
  const { scrollYProgress } = useScroll();

  // Dark mode uses a deep Slate (950) for a smoother look than pure Black
  const navBg = theme ? 'bg-white/80' : 'bg-[#0f172a]/80'; // Slate 950 with opacity
  const textColor = theme ? 'text-slate-900' : 'text-slate-100';
  const borderColor = theme ? 'border-slate-200' : 'border-slate-800';
  const logoColor = theme ? 'text-slate-900' : 'text-green-400';

  return (
    <>
      {/* Progress Bar - Thinner and subtle */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[70] h-[2px] origin-left bg-green-500"
        style={{ scaleX: scrollYProgress }}
      />

      <header 
        className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 backdrop-blur-md ${navBg} ${borderColor}`}
      >
        <div className="max-w-5xl mx-auto flex h-14 items-center justify-between px-8 md:px-12">
          
          {/* Logo - Simple text, green accent in dark mode */}
          <motion.a 
            href="/"
            className={`text-sm font-bold tracking-tighter uppercase transition-colors ${logoColor}`}
          >
            adinath.codes
          </motion.a>

          <div className="flex items-center gap-6">
            {/* Nav Links - Smaller and spaced out */}
            <nav>
              <ul className={`flex gap-8 items-center text-[12px] font-bold uppercase tracking-[0.15em] ${textColor}`}>
                <li className="hover:text-green-500 transition-colors cursor-pointer">
                  <a href="#projects">Projects</a>
                </li>
                <li className="hover:text-green-500 transition-colors cursor-pointer">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>

            {/* Thinner, darker separator for Dark Mode */}
            <div className={`h-3 w-[1px] ${theme ? 'bg-slate-200' : 'bg-slate-700'}`} />

            <AnimatedThemeToggler />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;