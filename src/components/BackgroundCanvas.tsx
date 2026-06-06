import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Responsive checks
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 50 : 120;
    const connectionDist = isMobile ? 80 : 120;

    // Use ResizeObserver for orientation changes and dimensions updates
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        canvas.width = width;
        canvas.height = height;

        // Re-initialize particles within new boundaries if they haven't been created yet
        if (particles.length === 0) {
          particles = [];
          for (let i = 0; i < count; i++) {
            particles.push({
              x: Math.random() * width,
              y: Math.random() * height,
              vx: (Math.random() * 0.36) - 0.18,
              vy: (Math.random() * 0.36) - 0.18,
            });
          }
        }
      }
    });

    resizeObserver.observe(document.body);

    // Animation Loop
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(200, 169, 110, 0.4)';
      ctx.strokeStyle = 'rgba(200, 169, 110, 0.10)';
      ctx.lineWidth = 0.8;

      const len = particles.length;

      for (let i = 0; i < len; i++) {
        const p1 = particles[i];

        // Move
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce off bounds
        if (p1.x < 0) {
          p1.x = 0;
          p1.vx = -p1.vx;
        } else if (p1.x > canvas.width) {
          p1.x = canvas.width;
          p1.vx = -p1.vx;
        }

        if (p1.y < 0) {
          p1.y = 0;
          p1.vy = -p1.vy;
        } else if (p1.y > canvas.height) {
          p1.y = canvas.height;
          p1.vy = -p1.vy;
        }

        // Draw dot
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Connect lines using fast distance check to avoid redundant square root computations
        for (let j = i + 1; j < len; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          if (Math.abs(dx) < connectionDist) {
            const dy = p1.y - p2.y;
            if (Math.abs(dy) < connectionDist) {
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < connectionDist) {
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
              }
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-20 bg-[#07101f]"
      style={{ display: 'block' }}
    />
  );
};

export default BackgroundCanvas;
