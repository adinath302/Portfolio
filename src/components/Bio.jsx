import React from 'react';
import PortfolioStore from './useStore';
import { motion } from 'framer-motion';

const Bio = () => {
  const theme = PortfolioStore((state) => state.theme);

  // Soft, readable colors
  const textColor = theme ? 'text-slate-700' : 'text-slate-300';
  const headingColor = theme ? 'text-slate-900' : 'text-white';
  const accentColor = 'text-green-500';

  return (
    <section className="px-8 md:px-12 py-6 max-w-3xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-5"
      >
        {/* Simple Label */}
        <h2 className={`text-xs font-bold uppercase tracking-widest ${accentColor}`}>
          Profile Summary
        </h2>

        {/* Clean, readable paragraph */}
        <div className={`text-[16px] leading-[1.7] ${textColor} font-normal`}>
          <p className="mb-4">
            I am a <span className={`font-medium ${headingColor}`}>Front-end Developer</span> focused on building high-performance web applications. My expertise lies in <span className={`font-medium ${headingColor}`}>React</span> and modern JavaScript, where I bridge the gap between complex backend logic and intuitive user interfaces.
          </p>

          <p className="mb-4">
            I specialize in clean architecture and scalable code. Rather than just building features, I focus on solving real-world problems through production-level projects and industry best practices.
          </p>

          <p>
            Currently, I am looking to collaborate with ambitious teams and startups to create meaningful, high-impact digital products.
          </p>
        </div>

        {/* Subtle separator */}
        <div className={`pt-4 border-t w-12 ${theme ? 'border-slate-200' : 'border-slate-800'}`} />
      </motion.div>
    </section>
  );
};

export default Bio;