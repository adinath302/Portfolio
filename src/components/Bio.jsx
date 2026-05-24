import React from 'react';
import PortfolioStore from './useStore';
import { motion } from 'framer-motion';

const Bio = () => {
  const theme = PortfolioStore((state) => state.theme);

  // Soft, balanced text colors matching standard design tokens
  const textColor = theme ? 'text-slate-600' : 'text-slate-400';
  const headingColor = theme ? 'text-slate-900' : 'text-slate-100';
  const labelColor = theme ? 'text-emerald-600' : 'text-emerald-400';

  return (
    // Max-width is set to 5xl with mx-auto to perfectly align its grid container with your Navbar
    <section id="about" className="max-w-5xl mx-auto px-6 md:px-8 py-16 md:py-24">
      {/* 
        We limit the internal reading column to max-w-3xl so text sentences 
        don't stretch too wide on ultra-wide desktop displays (ideal for reading speed).
      */}
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Section Small Label */}
          <h2 className={`text-xs font-bold tracking-widest uppercase ${labelColor}`}>
            Profile Summary
          </h2>

          {/* Main Copy Area */}
          <div className={`text-base md:text-lg leading-relaxed font-normal ${textColor} space-y-4`}>
            <p>
              I turn complex ideas into scalable, polished products. I don't just ship features; 
              I engineer systems. Using <span className={`font-semibold ${headingColor}`}>Next.js</span> and{' '}
              <span className={`font-semibold ${headingColor}`}>TypeScript</span>, I build rock-solid 
              frontends that handle the heavy lifting while maintaining the high-fidelity feel that 
              users (and investors) expect.
            </p>

            <p className="text-sm md:text-base opacity-90">
              Open to collaborating with ambitious teams and startups to create meaningful, 
              high-impact products.
            </p>
          </div>

          {/* Elegant Structural Accent Line */}
          <div className={`pt-6`}>
            <div className={`h-[2px] w-12 rounded-full ${theme ? 'bg-slate-200' : 'bg-white/10'}`} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bio;