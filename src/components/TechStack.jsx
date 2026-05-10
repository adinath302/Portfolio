import React from 'react';
import PortfolioStore from './useStore.jsx';
import TechIcons from './tech-icons.jsx';
import { motion } from 'framer-motion';


const TechStack = () => {
  const theme = PortfolioStore((state) => state.theme);
  // (kept for future hover UI; not used right now)
  const [hoveredTech, setHoveredTech] = React.useState({ name: '', x: 0, y: 0 });

  const handleMouseEnter = (techName, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoveredTech({ name: techName, x: rect.left + rect.width / 2, y: rect.top });
  };

  const techStack = TechIcons();

  const tooltipBg = theme ? 'bg-black/95 text-white' : 'bg-white/95 text-gray-900';
  const tooltipBorder = theme ? 'border border-white/15' : 'border border-gray-200/50';
  const tooltipArrow = theme ? 'border-t-black/95' : 'border-t-white/95';

  // Theme-safe colors (no reliance on nested `dark:` classes)
  const cardBg = theme
    ? 'bg-white/70 shadow-md'
    : 'bg-black/20 shadow-lg'
  const cardHoverBg = theme
    ? 'hover:bg-white'
    : 'hover:bg-black/35';
  

  return (
    <section className="px-6 mt-10.5 mb-0 ">
      {/* Simplified Header Label */}
      <motion.h2
        initial={{ opacity: 0, y: '-50px' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`text-[14px] mb-7 font-bold uppercase tracking-widest text-green-500 ${theme ? 'text-black' : 'text-white'}`}
      >
        Tools that I have used
      </motion.h2>

      <div className="relative max-w-5xl mx-auto mt-2">
        {/* Blurred corners */}
        <div
          aria-hidden
          className={`pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-20 w-20 rounded-full blur-2xl ${theme ? 'bg-white/60' : 'bg-black/40'}`}
        />
        <div
          aria-hidden
          className={`pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-20 w-20 rounded-full blur-2xl ${theme ? 'bg-white/60' : 'bg-black/40'}`}
        />

        <div className="overflow-hidden">
          <motion.div
            className="flex items-start gap-14 px-6 py-2"
            style={{ willChange: 'transform' }}
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          >
            {[...techStack, ...techStack].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  className="w-[82px] flex flex-col items-center justify-center"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div
                    className={`w-16 h-16 flex items-center justify-center  ${cardBg} ${cardHoverBg} transition-colors`}
                  >
                    <Icon className={`w-8 h-8 ${tech.iconColor} `} />
                  </div>
                  <div className={`mt-2 text-[13px] leading-tight text-center font-semibold ${theme ? 'text-slate-800' : 'text-slate-200'}`}>
                    {tech.name}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
