import React from 'react';
import PortfolioStore from './useStore.jsx';
import TechIcons from './tech-icons.jsx';
import { motion } from 'framer-motion';

const TechStack = () => {
  const theme = PortfolioStore((state) => state.theme);
  const techStack = TechIcons();

  // Design Palette Tokens
  const labelColor = theme ? 'text-emerald-600' : 'text-emerald-400';
  const headerTextColor = theme ? 'text-slate-600' : 'text-slate-400';

  // Card Theme Styling Tokens
  const cardStyles = theme
    ? 'bg-slate-50 border-slate-200/60 shadow-sm hover:bg-white hover:border-emerald-500/20 hover:shadow-md'
    : 'bg-white/[0.01] border-white/5 hover:bg-white/[0.04] hover:border-emerald-400/20';

  const textStyles = theme
    ? 'text-slate-600 group-hover:text-slate-900'
    : 'text-slate-400 group-hover:text-slate-100';

  return (
    <section id="tools" className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-24">

      {/* Aligned Header Section */}
      <div className="mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`text-xs font-bold tracking-widest uppercase ${labelColor} mb-2`}
        >
          Tech Stack
        </motion.h2>
        <p className={`text-base md:text-lg ${headerTextColor}`}>
          Tools, languages, and frameworks I build production software with.
        </p>
      </div>

      {/* Stationary Responsive Grid Layout */}
      {/* Note: We use standard techStack mapping here without duplicating the array since it does not scroll */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={`${tech.name}-${index}`}
              className={`${cardStyles} flex items-center gap-3 px-4 py-3.5 rounded-xl border group cursor-default transition-all duration-200 hover:scale-[1.02]`}
            >
              <div className="flex items-center justify-center shrink-0">
                {/* This now safely receives 'w-5 h-5 transition-transform...' for all icons */}
                <Icon className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 ${tech.iconColor}`} />
              </div>

              <span className={`text-xs font-medium tracking-wide whitespace-nowrap transition-colors duration-200 ${textStyles}`}>
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default TechStack;