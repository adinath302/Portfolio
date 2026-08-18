import React, { useEffect, useRef } from 'react';

const Starfield = ({ dim = false }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let stars = [];
    let shooting = null;
    let width = 0;
    let height = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const random = (min, max) => min + Math.random() * (max - min);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
    };

    const buildStars = () => {
      const count = Math.min(220, Math.floor((width * height) / 6000));
      stars = Array.from({ length: count }, () => ({
        x: random(0, width),
        y: random(0, height),
        z: random(0.2, 1),
        r: random(0.4, 1.6),
        phase: random(0, Math.PI * 2),
        speed: random(0.002, 0.01),
      }));
    };

    const spawnShootingStar = () => {
      if (shooting || Math.random() > 0.004) return;
      shooting = {
        x: random(width * 0.2, width * 0.9),
        y: random(0, height * 0.3),
        len: random(80, 160),
        vx: random(3, 6),
        vy: random(1.2, 2.5),
        life: 1,
      };
    };

    let scrollY = window.scrollY;

    const draw = (t) => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((s) => {
        const parallaxY = s.y - scrollY * s.z * 0.04;
        const alpha = 0.35 + 0.5 * Math.abs(Math.sin(t * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, ((parallaxY % height) + height) % height, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * s.z})`;
        ctx.fill();
      });

      spawnShootingStar();
      if (shooting) {
        shooting.x += shooting.vx;
        shooting.y += shooting.vy;
        shooting.life -= 0.012;
        if (shooting.life <= 0) {
          shooting = null;
        } else {
          const tailX = shooting.x - shooting.vx * 12;
          const tailY = shooting.y - shooting.vy * 12;
          const grad = ctx.createLinearGradient(
            shooting.x,
            shooting.y,
            tailX,
            tailY
          );
          grad.addColorStop(0, 'rgba(255,255,255,0.9)');
          grad.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(shooting.x, shooting.y);
          ctx.lineTo(tailX, tailY);
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });
    resize();
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 z-0 transition-opacity duration-500 ${
        dim ? 'opacity-30' : 'opacity-100'
      }`}
      aria-hidden="true"
    />
  );
};

export default Starfield;
