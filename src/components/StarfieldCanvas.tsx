"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
}

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars: Star[] = [];
    const STAR_COUNT = 200;
    const SPEED = 0.5;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
    };
    resize();

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * window.innerWidth - window.innerWidth / 2,
        y: Math.random() * window.innerHeight - window.innerHeight / 2,
        z: Math.random() * window.innerWidth,
        pz: 0,
      });
    }

    window.addEventListener("resize", resize);

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const cx = w / 2;
      const cy = h / 2;

      ctx.fillStyle = "rgba(61, 90, 76, 0.15)";
      ctx.fillRect(0, 0, w, h);

      for (const star of stars) {
        star.z -= SPEED;

        if (star.z <= 0) {
          star.x = Math.random() * w - cx;
          star.y = Math.random() * h - cy;
          star.z = w;
          star.pz = star.z;
        }

        const sx = (star.x / star.z) * w + cx;
        const sy = (star.y / star.z) * h + cy;
        const px = (star.x / star.pz) * w + cx;
        const py = (star.y / star.pz) * h + cy;

        star.pz = star.z;

        const size = Math.max(0, (1 - star.z / w) * 2);
        const alpha = Math.max(0, (1 - star.z / w) * 0.6);

        ctx.beginPath();
        ctx.strokeStyle = `rgba(212, 196, 74, ${alpha})`;
        ctx.lineWidth = size;
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = `rgba(242, 235, 217, ${alpha})`;
        ctx.arc(sx, sy, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield-canvas" />;
}
