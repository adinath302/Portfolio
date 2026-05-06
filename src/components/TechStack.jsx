import React from 'react';
import PortfolioStore from './useStore.jsx';
import TechIcons from './tech-icons.jsx';
import { AnimatePresence, motion } from 'framer-motion';

const TechStack = () => {
  const theme = PortfolioStore((state) => state.theme);
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
    ? 'bg-white/70 shadow-md border-black/10'
    : 'bg-black/20 shadow-lg border-white/10';
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
        className={`text-[12px] mb-7 font-bold uppercase tracking-widest text-green-500 ${theme ? 'text-black' : 'text-white'}`}
      >
        Tools that I have used
      </motion.h2>

      <AnimatePresence mode='wait'>
        <div className="grid grid-cols-5 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-11 gap-4 max-w-5xl mx-auto relative">
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ x: "-50px", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`w-14 h-14 rounded-xl flex items-center justify-center group hover:scale-110 transition-all duration-300 cursor-default shadow-md hover:shadow-lg border relative overflow-visible ${cardBg} ${cardHoverBg}`}
                style={{ animationDelay: `${index * 0.08}s`, animationFillMode: 'both' }}
                onMouseEnter={(e) => handleMouseEnter(tech.name, e)}
                onMouseLeave={() => setHoveredTech({ name: '', x: 0, y: 0 })}
              >
                <Icon className={`w-6 h-6 ${tech.iconColor} drop-shadow-sm`} />
                <AnimatePresence>
                  {hoveredTech.name === tech.name && (
                    <motion.div
                      className={`absolute -top-2 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-lg text-xs font-medium shadow-2xl whitespace-nowrap z-30 backdrop-blur-md ${tooltipBg} ${tooltipBorder}`}
                      style={{ left: '50%', top: '-2.5rem', transform: 'translateX(-50%)' }}
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.8 }}
                      transition={{ duration: 0.15, type: 'spring' }}
                    >
                      {hoveredTech.name}
                      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 ${tooltipArrow} -mt-0.5`}></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </AnimatePresence>
    </section>
  );
};

export default TechStack;
