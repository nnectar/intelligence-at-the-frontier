"use client";

export default function MarqueeStrip({ text = "INTELLIGENCE AT THE FRONTIER" }: { text?: string }) {
  const repeated = Array(6).fill(` ★ ${text} `).join("");

  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        <span>{repeated}</span>
        <span>{repeated}</span>
      </div>
    </div>
  );
}
