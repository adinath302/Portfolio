import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import PortfolioStore from './useStore';
import { motion } from 'framer-motion';

const GitHubContributions = () => {
  const theme = PortfolioStore((state) => state.theme);

  // High-fidelity contribution grid color system matching GitHub's precise visual tokens
  const calendarTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d2c', '#26a641', '#39d353'],
  };

  const labelColor = theme ? 'text-emerald-600' : 'text-emerald-400';
  const subTextColor = theme ? 'text-slate-600' : 'text-slate-400';

  return (
    // Standardized global grid wrapper system matching Navbar and TechStack
    <section id="contributions" className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-20">

      {/* Structural Heading Area */}
      <div className="mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`t-h-label ${labelColor} mb-2`}
        >
          Open Source Metrics
        </motion.h2>
        <p className={`t-body ${subTextColor}`}>
          My consistent commitment to building software systems day-to-day.
        </p>

      </div>

      {/* 
        The Calendar Display Wrapper Box:
        Placing the calendar inside an elegant background shell structure matches 
        the aesthetic design tokens established in your TechStack.
      */}
      <div className={`p-6 rounded-2xl border transition-all duration-300 ${theme
        ? 'bg-slate-50 border-slate-100 shadow-sm'
        : 'bg-white/[0.01] border-white/5 shadow-xl'
        }`}>

        {/* 
          CRITICAL FIX: This container captures and handles grid overflow gracefully.
          On smaller viewports, users can naturally swipe horizontally inside the card 
          without ruining the layout symmetry of the actual webpage.
        */}
        <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-rounded">
          <div className="min-w-[800px] sm:min-w-none py-2">
            <GitHubCalendar
              username="adinath302"
              theme={calendarTheme}
              colorScheme={theme ? 'light' : 'dark'}
              showWeekdayLabels={false}
              blockSize={12}
              blockMargin={4}
              fontSize={12}
            />
          </div>
        </div>


      </div>
    </section>
  );
};

export default GitHubContributions;