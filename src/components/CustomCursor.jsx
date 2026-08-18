import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { stiffness: 250, damping: 25, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 250, damping: 25, mass: 0.6 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const over = (e) => {
      setHovering(
        e.target.closest('a, button, [data-cursor]') !== null
      );
    };

    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    document.documentElement.addEventListener('mouseleave', leave);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      document.documentElement.removeEventListener('mouseleave', leave);
    };
  }, [mouseX, mouseY]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ x: mouseX, y: mouseY }}
        animate={{ opacity: visible ? 1 : 0 }}
        className="pointer-events-none fixed left-0 top-0 z-[120] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]"
      />
      <motion.div
        aria-hidden="true"
        style={{ x: ringX, y: ringY }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 2.6 : 1,
        }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none fixed left-0 top-0 z-[119] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--accent)]/50"
      />
    </>
  );
};

export default CustomCursor;
