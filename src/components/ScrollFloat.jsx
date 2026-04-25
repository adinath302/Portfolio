import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  animationDuration = 1,
  ease = 'power2.out',
  scrollStart = 'top bottom',
  scrollEnd = 'bottom top',
  stagger = 0.05,
  children
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const texts = container.querySelectorAll('span, div, p'); // Target text elements
    if (texts.length === 0) return;

    gsap.set(texts, {
      opacity: 0,
      y: 50,
      rotationX: 15,
      scale: 0.8
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: scrollStart,
        end: scrollEnd,
        scrub: true,
        // invalidateOnRefresh: true
      }
    });

    tl.to(texts, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      scale: 1,
      duration: animationDuration,
      ease: ease,
      stagger: {
        amount: stagger * texts.length
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return <div ref={containerRef} className="overflow-hidden">{children}</div>;
};

export default ScrollFloat;

