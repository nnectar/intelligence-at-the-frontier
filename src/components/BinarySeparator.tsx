"use client";

import { useEffect, useRef, useState } from "react";

function textToBinary(text: string): string {
  return text
    .split("")
    .map((c) => c.charCodeAt(0).toString(2).padStart(8, "0"))
    .join("");
}

export default function BinarySeparator({ text = "FRONTIER" }: { text?: string }) {
  const binary = textToBinary(text);
  const containerRef = useRef<HTMLDivElement>(null);
  const [chars, setChars] = useState<string[]>(binary.split(""));
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          intervalRef.current = setInterval(() => {
            setChars((prev) =>
              prev.map((c) => (Math.random() > 0.92 ? (c === "0" ? "1" : "0") : c))
            );
          }, 100);
        } else if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      },
      { threshold: 0 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const doubled = [...chars, ...chars];

  return (
    <div ref={containerRef} className="binary-separator">
      <div className="binary-scroll flex gap-[0.25rem] whitespace-nowrap">
        {doubled.map((c, i) => (
          <span key={i} className="binary-char">
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
