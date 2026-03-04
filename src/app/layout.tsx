import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Intelligence at the Frontier — Sponsor Deck",
  description:
    "A curated builder sprint + demo day at Frontier Tower, San Francisco. Hosted by Funding the Commons & Protocol Labs. March 14–15, 2026.",
  openGraph: {
    title: "Intelligence at the Frontier — Sponsor Deck",
    description:
      "A curated builder sprint + demo day at Frontier Tower, San Francisco.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
