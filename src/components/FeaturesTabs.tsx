"use client";

import { useState } from "react";
import { featureTabs } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";

export function FeaturesTabs() {
  const [active, setActive] = useState(0);

  return (
    <section id="features" className="scroll-mt-24 bg-ink px-6 py-24 text-cream lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.3em] text-rust-light">
            Features
          </span>
          <h2 className="font-display text-balance text-4xl font-medium uppercase leading-[1.05] tracking-tight sm:text-5xl">
            Why Atlantis Homes III is Special
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
          <Reveal delay={100} className="flex flex-col divide-y divide-cream/15 border-t border-cream/15">
            {featureTabs.map((tab, i) => (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActive(i)}
                className="group flex items-center justify-between gap-6 py-5 text-left"
              >
                <span
                  className={`font-display text-2xl uppercase tracking-tight transition-colors sm:text-3xl ${
                    active === i ? "text-cream" : "text-cream/40 group-hover:text-cream/70"
                  }`}
                >
                  {tab.label}
                </span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
                    active === i ? "border-rust bg-rust" : "border-cream/25"
                  }`}
                >
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M10 4v12M4 10h12" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            ))}
          </Reveal>

          <Reveal delay={200} className="flex items-center">
            <p className="text-balance text-xl leading-relaxed text-cream/85 sm:text-2xl">
              {featureTabs[active].body}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
