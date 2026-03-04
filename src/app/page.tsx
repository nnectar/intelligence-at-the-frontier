"use client";

import RetroNav from "@/components/RetroNav";
import SmoothScroll from "@/components/SmoothScroll";
import ScanlineOverlay from "@/components/ScanlineOverlay";
import StarfieldCanvas from "@/components/StarfieldCanvas";
import MarqueeStrip from "@/components/MarqueeStrip";
import RetroReveal from "@/components/RetroReveal";

const tracks = [
  { id: "01", name: "Sovereign Infrastructure", desc: "Decentralized compute, storage, and networking primitives for a post-cloud world." },
  { id: "02", name: "Physical AI & Robotics", desc: "Embodied intelligence systems that interact with the physical world." },
  { id: "03", name: "Agentic Finance & Coordination", desc: "Autonomous economic agents, on-chain coordination, and programmable incentives." },
  { id: "04", name: "Neurotech & BCI", desc: "Brain-computer interfaces, neural signal processing, and cognitive augmentation." },
  { id: "05", name: "AI Safety & Evaluation", desc: "Alignment research, red-teaming frameworks, and evaluation infrastructure." },
];

const sponsorBenefits = [
  "Dedicated bounty prize pool (recommended: $5K-$15K+)",
  "On-stage acknowledgment at demo day",
  "Direct access to participating teams",
  "Branding across event materials and DevSpot",
  "Opportunity to nominate a representative judge or mentor",
  "Optional speaking moment during kickoff or demo day",
  "Custom bounty design support available",
];

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <ScanlineOverlay />
      <RetroNav />

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden">
        <StarfieldCanvas />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          {/* Retro top badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="visitor-badge">
              <span>Protocol Labs</span>
              <span className="count">&amp;</span>
              <span>Funding the Commons</span>
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-display)] text-[clamp(1.25rem,4vw,2.5rem)] leading-[2] tracking-wide text-[var(--text-primary)] mb-6">
            Intelligence
            <br />
            <span className="text-[var(--accent)]">at the</span>
            <br />
            Frontier
          </h1>

          <p className="text-[var(--text-secondary)] text-sm mb-8 max-w-lg mx-auto">
            A curated builder sprint + demo day at Frontier Tower, San Francisco.
          </p>

          {/* Info pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              ["Date", "March 14-15"],
              ["Location", "Frontier Tower, SF"],
              ["Format", "Sprint + Demo Day"],
            ].map(([label, value]) => (
              <div key={label} className="visitor-badge">
                <span className="text-[var(--text-muted)]">{label}:</span>
                <span className="text-[var(--text-primary)]">{value}</span>
              </div>
            ))}
          </div>

          {/* Scroll hint */}
          <div className="mt-12">
            <span className="font-[family-name:var(--font-display)] text-[0.45rem] text-[var(--text-muted)] tracking-widest">
              [ SCROLL DOWN ]<span className="blink">_</span>
            </span>
          </div>
        </div>
      </section>

      <MarqueeStrip text="INTELLIGENCE AT THE FRONTIER ★ MARCH 14-15 ★ FRONTIER TOWER SF ★ HACKATHON SF.2026" />

      {/* ═══════════════ OVERVIEW ═══════════════ */}
      <section id="overview" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <RetroReveal>
                <div className="retro-label">Overview</div>
                <h2 className="retro-title">
                  Where frontier builders converge
                </h2>
              </RetroReveal>
            </div>

            <div className="md:col-span-7 md:col-start-6 space-y-6">
              <RetroReveal delay={0.1}>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  <strong className="text-[var(--text-primary)]">Intelligence at the Frontier</strong> is
                  a curated hackathon embedded within the broader Intelligence at the Frontier
                  Festival — a convening of researchers, funders, protocol teams, and frontier
                  technologists exploring the future of intelligence, coordination, and infrastructure.
                </p>
              </RetroReveal>

              <RetroReveal delay={0.15}>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  The hackathon runs inside Frontier Tower, a 16-floor nexus for frontier tech in
                  San Francisco. It serves as a physical hub for founders, researchers, and operators
                  building next-generation systems.
                </p>
              </RetroReveal>

              <RetroReveal delay={0.2}>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  This is a focused, in-person sprint designed to produce working prototypes, live
                  demos, and real follow-on conversations.
                </p>
              </RetroReveal>

              <RetroReveal delay={0.25}>
                <div className="retro-card bevel-raised ascii-border-top">
                  <div className="retro-label">Culminating Event</div>
                  <p className="text-[var(--text-primary)] font-bold text-sm">
                    Hello Tomorrow: Builders at the Frontier
                  </p>
                  <p className="text-[var(--text-secondary)] text-xs mt-2">
                    A public demo day showcasing hackathon winners alongside select companies from
                    the Protocol Labs Network.
                  </p>
                </div>
              </RetroReveal>
            </div>
          </div>
        </div>
      </section>

      <MarqueeStrip text="CURATED BUILDERS ★ 150-200 SELECTED PARTICIPANTS ★ APPLICATION REQUIRED" />

      {/* ═══════════════ BUILDER PROFILE ═══════════════ */}
      <section id="builders" className="py-16 md:py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-5">
              <RetroReveal>
                <div className="retro-label">Builder Profile</div>
                <h2 className="retro-title mb-4">
                  A super cracked SF technical audience
                </h2>
              </RetroReveal>

              <RetroReveal delay={0.1}>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  Participants are curated via application and DevSpot review. We prioritize
                  technical depth, experience, and execution ability over hype.
                </p>
              </RetroReveal>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <div className="space-y-2">
                {[
                  "Engineers shipping AI systems",
                  "Robotics and hardware builders",
                  "Crypto-native protocol engineers",
                  "AI safety researchers and evaluators",
                  "Founders testing early infrastructure products",
                ].map((item, i) => (
                  <RetroReveal key={i} delay={0.05 + i * 0.05}>
                    <div className="retro-card flex items-center gap-3 py-2 px-3">
                      <span className="retro-marker">[+]</span>
                      <span className="text-[var(--text-primary)] text-sm">{item}</span>
                    </div>
                  </RetroReveal>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t-2 border-dashed border-[var(--border)]">
            {[
              { stat: "150-200", label: "Curated Builders" },
              { stat: "5", label: "Frontier Tracks" },
              { stat: "16", label: "Floors at Frontier Tower" },
              { stat: "2", label: "Days of Intense Building" },
            ].map((item, i) => (
              <RetroReveal key={i} delay={i * 0.08}>
                <div className="text-center bevel-inset bg-[var(--bg-card)] p-4">
                  <div className="lcd-stat mb-2">{item.stat}</div>
                  <div className="font-[family-name:var(--font-display)] text-[0.4rem] tracking-[0.15em] uppercase text-[var(--text-muted)]">
                    {item.label}
                  </div>
                </div>
              </RetroReveal>
            ))}
          </div>
        </div>
      </section>

      <MarqueeStrip text="FIVE FRONTIER TRACKS ★ SHIP WORKING CODE ★ LIVE DEMOS REQUIRED" />

      {/* ═══════════════ TRACKS ═══════════════ */}
      <section id="tracks" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <RetroReveal>
            <div className="mb-12">
              <div className="retro-label">Tracks</div>
              <h2 className="retro-title">Five frontier domains</h2>
              <p className="text-[var(--text-secondary)] text-sm mt-3 max-w-lg">
                Builders are expected to ship working code and demos by the end of the sprint.
              </p>
            </div>
          </RetroReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {tracks.map((track, i) => (
              <RetroReveal key={track.id} delay={i * 0.06}>
                <div className="retro-card h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-[family-name:var(--font-display)] text-[0.45rem] text-[var(--accent)]">
                      [{track.id}]
                    </span>
                  </div>
                  <h3 className="font-bold text-[var(--text-primary)] text-sm mb-2">{track.name}</h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{track.desc}</p>
                </div>
              </RetroReveal>
            ))}

            <RetroReveal delay={0.3}>
              <div className="retro-card h-full flex flex-col justify-center items-center text-center border-dashed border-[var(--accent)]">
                <div className="font-[family-name:var(--font-display)] text-[0.45rem] text-[var(--accent)] mb-2">
                  YOUR BOUNTY HERE
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  Launch a challenge across any track
                </p>
              </div>
            </RetroReveal>
          </div>
        </div>
      </section>

      <MarqueeStrip text="SPONSOR OPPORTUNITIES ★ LIMITED SLOTS ★ BOUNTY PRIZES ★ DEMO DAY EXPOSURE" />

      {/* ═══════════════ WHY SPONSOR ═══════════════ */}
      <section id="sponsor" className="py-16 md:py-24 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-5">
              <RetroReveal>
                <div className="retro-label">Why Sponsor</div>
                <h2 className="retro-title mb-6">
                  Position your brand at the frontier
                </h2>
              </RetroReveal>

              <div className="space-y-4">
                {[
                  "Launch a bounty in front of top-tier SF builders",
                  "Drive serious integrations with your APIs, SDKs, or primitives",
                  "Validate products with technical founders",
                  "Build early relationships with frontier operators",
                  "Compound exposure across builders and the broader festival community",
                ].map((item, i) => (
                  <RetroReveal key={i} delay={0.05 + i * 0.05}>
                    <div className="flex gap-3">
                      <span className="retro-marker">[*]</span>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item}</p>
                    </div>
                  </RetroReveal>
                ))}
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <RetroReveal delay={0.1}>
                <div className="retro-card bevel-raised p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-[var(--accent)]">[#]</span>
                    <h3 className="font-[family-name:var(--font-display)] text-[0.5rem] tracking-[0.15em] uppercase text-[var(--text-primary)]">
                      Sponsor Package Includes
                    </h3>
                  </div>

                  {sponsorBenefits.map((benefit, i) => (
                    <div key={i} className="package-row">
                      <span className="package-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-[var(--text-secondary)] text-xs leading-relaxed">{benefit}</span>
                    </div>
                  ))}

                  <div className="mt-6 pt-4 border-t-2 border-dashed border-[var(--border)]">
                    <div className="font-[family-name:var(--font-display)] text-[0.4rem] tracking-[0.1em] uppercase text-[var(--text-muted)] mb-1">
                      Recommended Bounty Pool
                    </div>
                    <div className="lcd-stat text-2xl">$5K - $15K+</div>
                  </div>
                </div>
              </RetroReveal>
            </div>
          </div>
        </div>
      </section>

      <MarqueeStrip text="DEMO DAY ★ HELLO TOMORROW: BUILDERS AT THE FRONTIER ★ 150+ ATTENDEES" />

      {/* ═══════════════ DEMO DAY ═══════════════ */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <RetroReveal>
            <div className="text-center mb-12">
              <div className="retro-label justify-center">Demo Day</div>
              <h2 className="retro-title">
                Hello Tomorrow: Builders at the Frontier
              </h2>
            </div>
          </RetroReveal>

          <div className="grid md:grid-cols-3 gap-3 mb-12">
            {[
              { stat: "150+", label: "Builders, researchers, and frontier operators in attendance" },
              { stat: "Live", label: "Demos of working systems built during the sprint" },
              { stat: "Direct", label: "Conversations with teams actively building and raising" },
            ].map((item, i) => (
              <RetroReveal key={i} delay={i * 0.08}>
                <div className="retro-card bevel-raised text-center p-6">
                  <div className="lcd-stat mb-3">{item.stat}</div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.label}</p>
                </div>
              </RetroReveal>
            ))}
          </div>

          <RetroReveal delay={0.2}>
            <p className="text-center text-[var(--text-secondary)] text-sm">
              Sponsors are positioned in front of a room actively shipping and thinking long-term.
            </p>
          </RetroReveal>
        </div>
      </section>

      <MarqueeStrip text="BECOME A SPONSOR ★ LIMITED SLOTS AVAILABLE ★ NNEOMA@PLRS.XYZ" />

      {/* ═══════════════ CTA / CONTACT ═══════════════ */}
      <section id="contact" className="py-24 md:py-32 bg-[var(--bg-secondary)] relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <RetroReveal>
            <div className="retro-label justify-center mb-6">Limited Slots Available</div>

            <h2 className="font-[family-name:var(--font-display)] text-[clamp(0.8rem,2.5vw,1.5rem)] leading-[2.2] text-[var(--text-primary)] mb-12">
              Ready to support builders
              <br />
              <span className="text-[var(--accent)]">at the frontier?</span>
            </h2>

            <a href="mailto:nneoma@plrs.xyz" className="retro-button text-[0.55rem]">
              <span>[ Become a Sponsor ]</span>
            </a>

            <div className="mt-16 font-[family-name:var(--font-display)] text-[0.35rem] tracking-[0.15em] uppercase text-[var(--text-muted)]">
              Funding the Commons x Protocol Labs
            </div>
          </RetroReveal>
        </div>
      </section>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="py-6 border-t-2 border-[var(--border)] bg-[var(--bg-card)]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="font-[family-name:var(--font-display)] text-[0.35rem] tracking-[0.2em] uppercase text-[var(--text-muted)]">
            Intelligence at the Frontier - SF 2026
          </span>
          <div className="visitor-badge">
            <span>Visitors:</span>
            <span className="count">001337</span>
          </div>
          <div className="flex items-center gap-3 font-[family-name:var(--font-display)] text-[0.35rem] tracking-[0.15em] uppercase text-[var(--text-muted)]">
            <span>Protocol Labs</span>
            <span className="text-[var(--accent)]">x</span>
            <span>Funding the Commons</span>
          </div>
        </div>
      </footer>
    </>
  );
}
