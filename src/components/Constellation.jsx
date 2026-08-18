import React, { useEffect, useRef } from 'react';

const Constellation = ({ text = 'ADINATH' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = 0;
    let height = 0;
    let raf = 0;
    let points = [];
    let lines = [];
    let mouseX = 0;
    let mouseY = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = Math.min(rect.height, 420);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildPoints();
      buildLines();
    };

    const buildPoints = () => {
      const off = document.createElement('canvas');
      off.width = Math.max(width, 1);
      off.height = Math.max(height, 1);
      const octx = off.getContext('2d');

      octx.fillStyle = '#000';
      octx.fillRect(0, 0, off.width, off.height);

      octx.fillStyle = '#fff';
      octx.textAlign = 'center';
      octx.textBaseline = 'middle';
      const fontPx = Math.floor(Math.min(width / (text.length * 0.72), 150));
      octx.font = `800 ${fontPx}px 'Space Grotesk', sans-serif`;
      octx.fillText(text, off.width / 2, off.height / 2);

      const imageData = octx.getImageData(0, 0, off.width, off.height).data;
      const sampled = [];
      const step = 3;

      for (let y = 0; y < off.height; y += step) {
        for (let x = 0; x < off.width; x += step) {
          const i = (y * off.width + x) * 4;
          if (imageData[i] > 140) {
            sampled.push({
              x: x + Math.random() * 6 - 3,
              y: y + Math.random() * 6 - 3,
            });
          }
        }
      }

      // Decimate to a fixed budget of star points
      const budget = width < 640 ? 90 : 170;
      const stride = Math.max(1, Math.floor(sampled.length / budget));
      points = sampled.filter((_, i) => i % stride === 0).slice(0, budget);
    };

    const buildLines = () => {
      const maxDist = width < 640 ? 34 : 30;
      lines = [];
      for (let i = 0; i < points.length; i++) {
        let nearest = [];
        for (let j = 0; j < points.length; j++) {
          if (i === j) continue;
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) nearest.push({ j, dist });
        }
        nearest.sort((a, b) => a.dist - b.dist);
        nearest.slice(0, 2).forEach(({ j }) => {
          if (i < j) {
            lines.push({ i, j });
          }
        });
      }
    };

    let scrollY = window.scrollY;

    const draw = (t) => {
      ctx.clearRect(0, 0, width, height);
      const parallaxY = scrollY * 0.05;
      const dx = (mouseX - width / 2) * 0.02;
      const dy = (mouseY - height / 2) * 0.02;

      const px = (i) => points[i].x + dx;
      const py = (i) => points[i].y + dy - parallaxY;

      // Constellation lines
      ctx.lineWidth = 0.8;
      lines.forEach(({ i, j }) => {
        ctx.strokeStyle = 'rgba(122, 162, 247, 0.35)';
        ctx.beginPath();
        ctx.moveTo(px(i), py(i));
        ctx.lineTo(px(j), py(j));
        ctx.stroke();
      });

      // Stars
      points.forEach((p, i) => {
        const twinkle = 0.55 + 0.45 * Math.sin(t * 0.0012 + p.x * 0.05);
        const size = 1.1 + Math.abs(Math.sin(t * 0.0008 + p.x * 0.02)) * 0.9;
        ctx.beginPath();
        ctx.arc(px(i), py(i), size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 209, 102, ${twinkle})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(px(i), py(i), size * 2.6, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 209, 102, 0.08)';
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove);
    resize();
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [text]);

  return (
    <div className="w-full">
      <canvas
        ref={canvasRef}
        className="mx-auto block"
        aria-label={`${text} constellation`}
      />
    </div>
  );
};

export default Constellation;
