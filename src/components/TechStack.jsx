import React from 'react';
import PortfolioStore from './useStore.jsx';
import TechIcons from './tech-icons.jsx';
import { motion } from 'framer-motion';

const TechStack = () => {
  const theme = PortfolioStore((state) => state.theme);
  const techStack = TechIcons();

  const labelColor = theme ? 'text-emerald-600' : 'text-emerald-400';
  const textColor = theme ? 'text-slate-600' : 'text-slate-400';

  return (
    // Clean max-width matching the rest of your core system layout
    <section id="tools" className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20">
      
      {/* Structural Header aligned perfectly to the left edge of the grid */}
      <div className="mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-xs font-bold tracking-widest uppercase ${labelColor} mb-2`}
        >
          Tech Stack
        </motion.h2>
        <p className={`text-base md:text-lg ${textColor}`}>
          Tools, languages, and frameworks I build production software with.
        </p>
      </div>

      {/* Marquee Row Box Container */}
      <div className="relative w-full mt-4 overflow-hidden rounded-xl">
        
        {/* Premium Edge Blur Vignettes (Replaced old round blur shapes with sleek transparent linear gradients) */}
        <div className={`absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none bg-gradient-to-r ${
          theme ? 'from-white to-transparent' : 'from-[#121212] to-transparent'
        }`} />
        <div className={`absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none bg-gradient-to-l ${
          theme ? 'from-white to-transparent' : 'from-[#121212] to-transparent'
        }`} />

        {/* Scrolling Strip wrapper */}
        <div className="overflow-hidden py-4">
          <motion.div
            className="flex items-center gap-12 w-max px-6"
            style={{ willChange: 'transform' }}
            animate={{ x: '-50%' }}
            transition={{ duration: 25, ease: 'linear', repeat: Infinity }}
          >
            {/* Duplicating the array seamlessly for infinite loop rendering */}
            {[...techStack, ...techStack].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex flex-col items-center justify-center space-y-3 min-w-[100px] group"
                >
                  {/* Icon Card Container */}
                  <div className={`w-16 h-16 flex items-center justify-center rounded-2xl border transition-all duration-300 ${
                    theme 
                      ? 'bg-slate-50 border-slate-100 shadow-sm group-hover:bg-white group-hover:scale-105 group-hover:shadow-md' 
                      : 'bg-white/[0.02] border-white/5 group-hover:bg-white/[0.05] group-hover:scale-105 group-hover:border-white/10'
                  }`}>
                    <Icon className={`w-8 h-8 transition-transform duration-300 ${tech.iconColor}`} />
                  </div>
                  
                  {/* Flexible Label Stack */}
                  <span className={`text-xs font-medium tracking-wide whitespace-nowrap transition-colors duration-200 ${
                    theme ? 'text-slate-700 group-hover:text-slate-900' : 'text-slate-400 group-hover:text-slate-200'
                  }`}>
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;