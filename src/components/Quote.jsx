import React from 'react';
import PortfolioStore from './useStore';
import { motion } from 'framer-motion';

const Quote = () => {
  const theme = PortfolioStore((state) => state.theme);

  const textColor = theme ? 'text-slate-600' : 'text-slate-400';
  const authorColor = theme ? 'text-slate-900' : 'text-slate-200';

  return (
    <section className="max-w-5xl mx-auto px-8 md:px-12 py-">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl"
      >
        <h2 className="t-h-label text-green-500 mb-4">Perspective</h2>

        <figure className="space-y-2">
          <blockquote className={`t-h3 italic leading-relaxed font-light ${textColor}`}>
            “By believing in something that still does not exist, we create it.”
          </blockquote>
          <figcaption className={`t-caption uppercase tracking-wider ${authorColor}`}>
            — Franz Kafka
          </figcaption>
        </figure>

        <div className={`mt-8 w-12 h-[1px] ${theme ? 'bg-slate-200' : 'bg-white/10'}`} />
      </motion.div>
    </section>
  );
};

export default Quote;

