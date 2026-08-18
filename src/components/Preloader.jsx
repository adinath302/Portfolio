import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onFinish }) => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const finishedRef = useRef(false);

  useEffect(() => {
    const duration = 1600;
    const start = performance.now();
    let raf;

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * 100));

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else if (!finishedRef.current) {
        finishedRef.current = true;
        setDone(true);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (done) {
      const t = setTimeout(onFinish, 700);
      return () => clearTimeout(t);
    }
  }, [done, onFinish]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end justify-between bg-[var(--bg)] px-6 pb-10 md:px-10 md:pb-14"
          exit={{ y: '-100%', transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="t-label text-[var(--muted)]"
          >
            Adinath Gaware
          </motion.div>

          <div className="flex items-end gap-4 md:gap-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-xs uppercase tracking-[0.3em] text-[var(--muted)] mb-2 hidden sm:block"
            >
              Loading
            </motion.span>
            <motion.span
              className="font-display text-[clamp(4rem,14vw,11rem)] font-extrabold leading-none tracking-tighter text-[var(--text)]"
            >
              {count}
              <span className="text-[var(--accent)]">%</span>
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
