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
    <section className="px-8 md:px-12 py- max-w-3xl">
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
            I turn complex ideas into scalable, polished products. I don't just ship features; I engineer systems. Using <span className={`font-medium ${headingColor}`}>Next.js</span> and <span className={`font-medium ${headingColor}`}>TypeScript</span>, I build rock-solid frontends that handle the heavy lifting while maintaining the high-fidelity feel that users (and investors) expect.
          </p>

          <p>
            Open to collaborating with ambitious teams and startups to create meaningful, high-impact products.
          </p>
        </div>

        {/* Subtle separator */}
        <div className={`pt-4 border-t w-12 ${theme ? 'border-slate-200' : 'border-slate-800'}`} />
      </motion.div>
    </section>
  );
};

export default Bio;