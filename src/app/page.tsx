"use client";

import Navigation from "@/components/Navigation";
import SmoothScroll from "@/components/SmoothScroll";
import NoiseOverlay from "@/components/NoiseOverlay";
import HeroCanvas from "@/components/HeroCanvas";
import BinarySeparator from "@/components/BinarySeparator";
import ScrollReveal from "@/components/ScrollReveal";
import CustomScrollbar from "@/components/CustomScrollbar";

const tracks = [
  {
    id: "01",
    name: "Sovereign Infrastructure",
    desc: "Decentralized compute, storage, and networking primitives for a post-cloud world.",
  },
  {
    id: "02",
    name: "Physical AI & Robotics",
    desc: "Embodied intelligence systems that interact with the physical world.",
  },
  {
    id: "03",
    name: "Agentic Finance & Coordination",
    desc: "Autonomous economic agents, on-chain coordination, and programmable incentives.",
  },
  {
    id: "04",
    name: "Neurotech & BCI",
    desc: "Brain-computer interfaces, neural signal processing, and cognitive augmentation.",
  },
  {
    id: "05",
    name: "AI Safety & Evaluation",
    desc: "Alignment research, red-teaming frameworks, and evaluation infrastructure.",
  },
];

const sponsorBenefits = [
  "Dedicated bounty prize pool (recommended: $5K–$15K+)",
  "On-stage acknowledgment at demo day",
  "Direct access to participating teams",
  "Branding across event materials and DevSpot",
  "Opportunity to nominate a representative judge or mentor",
  "Optional speaking moment during kickoff or demo day",
  "Custom bounty design support available",
];

const whySponsor = [
  { stat: "150–200", label: "Curated Builders" },
  { stat: "5", label: "Frontier Tracks" },
  { stat: "16", label: "Floors at Frontier Tower" },
  { stat: "2", label: "Days of Intense Building" },
];

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <NoiseOverlay />
      <Navigation />
      <CustomScrollbar />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <HeroCanvas />

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 md:pb-32 w-full">
          <div className="mb-4 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[var(--text-muted)] flex items-center gap-3">
            <span>Protocol Labs</span>
            <span className="text-[var(--accent)]">&amp;</span>
            <span>Funding the Commons</span>
          </div>
          <div className="mb-8">
            <h1 className="text-[clamp(3rem,10vw,8rem)] font-extralight leading-[0.9] tracking-[-0.04em] text-[var(--text-primary)]">
              Intelligence
              <br />
              <span className="italic font-light text-[var(--accent)]">at the</span>
              <br />
              Frontier
            </h1>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="max-w-md text-[var(--text-secondary)] text-base leading-relaxed">
              A curated builder sprint + demo day at Frontier Tower, San Francisco.
            </p>

            <div className="flex flex-wrap gap-6 font-mono text-[0.7rem] tracking-[0.1em] uppercase">
              <div className="flex flex-col gap-1">
                <span className="text-[var(--text-muted)]">Date</span>
                <span className="text-[var(--text-primary)]">March 14–15</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[var(--text-muted)]">Location</span>
                <span className="text-[var(--text-primary)]">Frontier Tower, SF</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[var(--text-muted)]">Format</span>
                <span className="text-[var(--text-primary)]">Sprint + Demo Day</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-[var(--text-muted)]">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--accent)] to-transparent" />
        </div>
      </section>

      <BinarySeparator text="INTELLIGENCE AT THE FRONTIER" />

      {/* ═══════════════ OVERVIEW ═══════════════ */}
      <section id="overview" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <ScrollReveal>
                <span className="section-label">// Overview</span>
                <h2 className="section-title">
                  Where <strong>frontier builders</strong> converge
                </h2>
              </ScrollReveal>
            </div>

            <div className="md:col-span-7 md:col-start-6 space-y-8">
              <ScrollReveal delay={0.1}>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                  <strong className="text-[var(--text-primary)]">Intelligence at the Frontier</strong> is
                  a curated hackathon embedded within the broader Intelligence at the Frontier
                  Festival — a convening of researchers, funders, protocol teams, and frontier
                  technologists exploring the future of intelligence, coordination, and
                  infrastructure.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  The hackathon runs inside Frontier Tower, a 16-floor nexus for frontier tech in
                  San Francisco. It serves as a physical hub for founders, researchers, and operators
                  building next-generation systems.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  This is a focused, in-person sprint designed to produce working prototypes, live
                  demos, and real follow-on conversations.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="border border-[var(--border-accent)] bg-[var(--accent-glow)] p-6 mt-8">
                  <p className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-[var(--accent)] mb-2">
                    Culminating Event
                  </p>
                  <p className="text-[var(--text-primary)] font-light text-lg">
                    Hello Tomorrow: Builders at the Frontier
                  </p>
                  <p className="text-[var(--text-secondary)] text-sm mt-2">
                    A public demo day showcasing hackathon winners alongside select companies from
                    the Protocol Labs Network.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <BinarySeparator text="CURATED BUILDERS" />

      {/* ═══════════════ BUILDER PROFILE ═══════════════ */}
      <section id="builders" className="py-24 md:py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <ScrollReveal>
                <span className="section-label">// Builder Profile</span>
                <h2 className="section-title mb-6">
                  A <strong className="text-[var(--accent)]">super cracked</strong> SF technical
                  audience
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Participants are curated via application and DevSpot review. We prioritize
                  technical depth, experience, and execution ability over hype.
                </p>
              </ScrollReveal>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <div className="space-y-4">
                {[
                  { icon: "◆", title: "Engineers shipping AI systems" },
                  { icon: "◆", title: "Robotics and hardware builders" },
                  { icon: "◆", title: "Crypto-native protocol engineers" },
                  { icon: "◆", title: "AI safety researchers and evaluators" },
                  { icon: "◆", title: "Founders testing early infrastructure products" },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={0.1 + i * 0.08}>
                    <div className="flex items-center gap-4 p-4 border border-[var(--border)] hover:border-[var(--border-accent)] transition-all duration-300 group">
                      <span className="text-[var(--accent)] text-xs group-hover:scale-125 transition-transform">
                        {item.icon}
                      </span>
                      <span className="text-[var(--text-primary)] font-light">{item.title}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-[var(--border)]">
            {whySponsor.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center md:text-left">
                  <div className="text-[clamp(2.5rem,5vw,4rem)] font-extralight text-[var(--accent)] leading-none mb-2">
                    {item.stat}
                  </div>
                  <div className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-[var(--text-muted)]">
                    {item.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <BinarySeparator text="FRONTIER TRACKS" />

      {/* ═══════════════ TRACKS ═══════════════ */}
      <section id="tracks" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="mb-16">
              <span className="section-label">// Tracks</span>
              <h2 className="section-title">
                Five <strong>frontier domains</strong>
              </h2>
              <p className="text-[var(--text-secondary)] mt-4 max-w-xl">
                Builders are expected to ship working code and demos by the end of the sprint.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tracks.map((track, i) => (
              <ScrollReveal key={track.id} delay={i * 0.08}>
                <div className="track-card group h-full">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[0.65rem] tracking-[0.2em] text-[var(--accent)]">
                        #{track.id}
                      </span>
                      <span className="w-2 h-2 bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-xl font-light text-[var(--text-primary)] mb-3">
                      {track.name}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {track.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}

            {/* CTA card */}
            <ScrollReveal delay={0.4}>
              <div className="track-card h-full flex flex-col justify-center items-center text-center border-[var(--border-accent)] bg-[var(--accent-glow)]">
                <div className="relative z-10">
                  <p className="font-mono text-[0.7rem] tracking-[0.15em] uppercase text-[var(--accent)] mb-2">
                    Your Bounty Here
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Launch a challenge across any track
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <BinarySeparator text="SPONSOR OPPORTUNITY" />

      {/* ═══════════════ WHY SPONSOR ═══════════════ */}
      <section id="sponsor" className="py-24 md:py-32 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-5">
              <ScrollReveal>
                <span className="section-label">// Why Sponsor</span>
                <h2 className="section-title mb-8">
                  Position your brand at the{" "}
                  <strong className="text-[var(--accent)]">frontier</strong>
                </h2>
              </ScrollReveal>

              <div className="space-y-6">
                {[
                  "Launch a bounty in front of top-tier SF builders",
                  "Drive serious integrations with your APIs, SDKs, or primitives",
                  "Validate products with technical founders",
                  "Build early relationships with frontier operators",
                  "Compound exposure across builders and the broader festival community",
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={0.1 + i * 0.08}>
                    <div className="flex gap-4">
                      <div className="benefit-marker mt-1.5" />
                      <p className="text-[var(--text-secondary)] leading-relaxed text-sm">{item}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <ScrollReveal delay={0.15}>
                <div className="border border-[var(--border)] p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-3 h-3 bg-[var(--accent)]" />
                    <h3 className="font-mono text-[0.75rem] tracking-[0.15em] uppercase text-[var(--text-primary)]">
                      Sponsor Package Includes
                    </h3>
                  </div>

                  <div className="space-y-0">
                    {sponsorBenefits.map((benefit, i) => (
                      <div key={i} className="package-item">
                        <span className="font-mono text-[0.6rem] text-[var(--accent)] mt-0.5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[var(--text-secondary)] text-sm leading-relaxed">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-[var(--border)]">
                    <p className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-[var(--text-muted)] mb-1">
                      Recommended Bounty Pool
                    </p>
                    <p className="text-3xl font-extralight text-[var(--accent)]">$5K – $15K+</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <BinarySeparator text="DEMO DAY" />

      {/* ═══════════════ DEMO DAY ═══════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="section-label">// Demo Day</span>
              <h2 className="section-title mx-auto">
                Hello Tomorrow:
                <br />
                <strong>Builders at the Frontier</strong>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                stat: "150+",
                label: "Builders, researchers, and frontier operators in attendance",
              },
              {
                stat: "Live",
                label: "Demos of working systems built during the sprint",
              },
              {
                stat: "Direct",
                label: "Conversations with teams actively building and raising",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="border border-[var(--border)] p-8 text-center hover:border-[var(--border-accent)] transition-colors">
                  <div className="text-3xl font-extralight text-[var(--accent)] mb-3">
                    {item.stat}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center">
              <p className="text-[var(--text-secondary)] text-lg mb-2 font-light">
                Sponsors are positioned in front of a room actively shipping and thinking long-term.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <BinarySeparator text="GET IN TOUCH" />

      {/* ═══════════════ CTA / CONTACT ═══════════════ */}
      <section id="contact" className="py-32 md:py-40 bg-[var(--bg-secondary)] relative overflow-hidden">
        {/* Subtle radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(200,255,0,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <span className="section-label mb-4 block">// Limited Slots Available</span>
              <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-extralight leading-[0.95] tracking-[-0.03em] text-[var(--text-primary)] mb-16">
                Ready to support builders
                <br />
                <strong className="text-[var(--accent)]">at the frontier?</strong>
              </h2>

              <a href="mailto:nneoma@plrs.xyz" className="cta-button mx-auto">
                <span>Become a Sponsor</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 font-mono text-[0.65rem] tracking-[0.15em] uppercase text-[var(--text-muted)]">
                <span>Funding the Commons × Protocol Labs</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="py-8 border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[var(--text-muted)]">
            Intelligence at the Frontier — SF 2026
          </span>
          <div className="flex items-center gap-6 font-mono text-[0.6rem] tracking-[0.15em] uppercase text-[var(--text-muted)]">
            <span>Protocol Labs</span>
            <span className="text-[var(--accent)]">×</span>
            <span>Funding the Commons</span>
          </div>
        </div>
      </footer>
    </>
  );
}
