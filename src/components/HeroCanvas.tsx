"use client";

import { useEffect, useRef } from "react";

// Simple 2D Perlin-like noise
function noise2D(x: number, y: number): number {
  const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return n - Math.floor(n);
}

function smoothNoise(x: number, y: number): number {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const u = fx * fx * (3 - 2 * fx);
  const v = fy * fy * (3 - 2 * fy);

  const a = noise2D(ix, iy);
  const b = noise2D(ix + 1, iy);
  const c = noise2D(ix, iy + 1);
  const d = noise2D(ix + 1, iy + 1);

  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouse);

    let time = 0;
    const lineCount = 12;
    const pointCount = 80;

    const draw = () => {
      time += 0.008;
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      for (let l = 0; l < lineCount; l++) {
        const baseY = (h / (lineCount + 1)) * (l + 1);
        const alpha = 0.04 + (l / lineCount) * 0.06;

        ctx.beginPath();
        ctx.strokeStyle = `rgba(200, 255, 0, ${alpha})`;
        ctx.lineWidth = 1;

        for (let p = 0; p <= pointCount; p++) {
          const x = (w / pointCount) * p;
          const noiseVal = smoothNoise(
            (x + time * 40) * 0.003,
            (baseY + time * 15) * 0.003
          );
          const displacement = (noiseVal - 0.5) * 60;

          // Mouse influence
          const dx = x - mouseRef.current.x;
          const dy = baseY - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const mouseInfluence = Math.max(0, 1 - dist / 200) * 30;
          const mouseDir = dy > 0 ? 1 : -1;

          const y = baseY + displacement + mouseInfluence * mouseDir;

          if (p === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}
