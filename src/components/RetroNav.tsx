"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Builders", href: "#builders" },
  { label: "Tracks", href: "#tracks" },
  { label: "Sponsor", href: "#sponsor" },
  { label: "Contact", href: "#contact" },
];

export default function RetroNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => {
        const el = document.querySelector(item.href);
        if (!el) return { id: item.href, top: 0 };
        return { id: item.href, top: el.getBoundingClientRect().top };
      });
      const current = sections.filter((s) => s.top <= 200).pop();
      if (current) setActive(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-card)] border-b-3 border-[var(--border)] bevel-raised">
      <div className="max-w-6xl mx-auto px-3 md:px-4 py-2 flex items-center justify-between gap-2">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-[family-name:var(--font-display)] text-[0.5rem] text-[var(--accent)] cursor-pointer hover:text-[var(--text-primary)] transition-colors shrink-0"
        >
          IAF.2026
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={`px-3 py-1.5 text-[0.55rem] font-[family-name:var(--font-display)] transition-colors cursor-pointer ${
                active === item.href
                  ? "bg-[var(--accent)] text-[var(--bg-card)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <a
          href="mailto:nneoma@plrs.xyz"
          className="nav-sponsor-btn shrink-0"
        >
          Sponsor →
        </a>
      </div>
    </nav>
  );
}
