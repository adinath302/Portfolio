import React, { useCallback, useRef } from 'react';
import { Moon, Sun } from 'lucide-react';
import { flushSync } from 'react-dom';
import { cn } from '../lib/utils';
import "@theme-toggles/react/css/Around.css";
import { Around } from "@theme-toggles/react";
import PortfolioStore from './useStore';

const AnimatedThemeToggler = ({ className, duration = 400, ...props }) => {
  const theme = PortfolioStore((state) => state.theme);
  const toggle = PortfolioStore((state) => state.toggle);
  const isDark = !theme;
  const buttonRef = useRef(null);

  const playToggleSound = () => {
    const audio = new Audio('/src/assets/click_sound.mp3');
    audio.volume = 0.1;
    audio.playbackRate = 1.5;
    audio.play().catch((e) => console.log('Audio play failed:', e));
  };

  const toggleTheme = useCallback(() => {
    playToggleSound();
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const maxRadius = Math.hypot(
      Math.max(x, viewportWidth - x),
      Math.max(y, viewportHeight - y)
    );

    const applyTheme = () => {
      toggle();
    };

    if (typeof document.startViewTransition !== 'function') {
      applyTheme();
    } else {
      const transition = document.startViewTransition(() => flushSync(applyTheme));
      const ready = transition?.ready;
      if (ready && typeof ready.then === 'function') {
        ready.then(() => {
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${maxRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration,
              easing: 'ease-in-out',
              pseudoElement: '::view-transition-new(root)',
            }
          );
        });
      }
    }
  }, [toggle, duration]);

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={toggleTheme}
      className={cn(
        'flex items-center gap-2 cursor-pointer text-xl',
        theme ? 'text-black' : 'text-white',
        className
      )}
      {...props}
    >
      <Around duration={750} />
    </button>
  );
};

export default AnimatedThemeToggler;

