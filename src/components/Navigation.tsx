"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Builders", href: "#builders" },
  { label: "Tracks", href: "#tracks" },
  { label: "Sponsor", href: "#sponsor" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border)]"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors cursor-pointer"
        >
          IAF.2026
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={`font-mono text-[0.7rem] tracking-[0.15em] uppercase transition-colors cursor-pointer ${
                active === item.href
                  ? "text-[var(--accent)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <a
          href="mailto:sponsor@fundingthecommons.io"
          className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors"
        >
          Become a Sponsor →
        </a>
      </div>
    </nav>
  );
}
