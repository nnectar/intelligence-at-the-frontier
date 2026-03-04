"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomScrollbar() {
  const thumbRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(30);

  useEffect(() => {
    const update = () => {
      const scrollH = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / scrollH;
      const trackH = window.innerHeight * 0.3;
      const thumbH = Math.max(20, trackH * (window.innerHeight / document.documentElement.scrollHeight));
      setHeight(thumbH);
      if (thumbRef.current) {
        thumbRef.current.style.height = `${thumbH}px`;
        thumbRef.current.style.transform = `translateY(${progress * (trackH - thumbH)}px)`;
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="custom-scrollbar hidden md:block">
      <div ref={thumbRef} className="custom-scrollbar-thumb" />
    </div>
  );
}
