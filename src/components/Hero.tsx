"use client";

import { useState } from "react";
import { VideoModal } from "@/components/VideoModal";
import { heroMedia, siteConfig } from "@/lib/site-data";

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative flex h-[100svh] min-h-[560px] w-full items-end overflow-hidden bg-ink">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroMedia.video}
        poster={heroMedia.poster}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/10" />
      <div className="absolute inset-0 bg-ink/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 sm:pb-20 lg:px-10 lg:pb-24">
        <p className="reveal is-visible mb-4 text-xs font-medium uppercase tracking-[0.3em] text-cream/70">
          A Novi Property Group Development
        </p>
        <h1 className="reveal is-visible font-display max-w-3xl text-balance text-6xl font-semibold uppercase leading-[0.95] tracking-tight text-cream sm:text-7xl lg:text-8xl">
          Atlantis Homes III
        </h1>
        <p className="reveal is-visible mt-6 max-w-xl text-balance text-base leading-relaxed text-cream/85 sm:text-lg">
          {siteConfig.tagline}
        </p>

        <div className="reveal is-visible mt-9 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.05em] text-cream"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cream/50 transition-colors group-hover:bg-cream group-hover:text-ink">
              <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Watch video
          </button>

          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-rust px-7 py-3.5 text-sm font-medium uppercase tracking-[0.05em] text-cream transition-colors hover:bg-rust-light"
          >
            Request a Private Viewing
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-cream/70 sm:flex">
        <span className="h-9 w-px animate-pulse bg-cream/40" />
        Scroll
      </div>

      <VideoModal
        src={heroMedia.video}
        poster={heroMedia.poster}
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
      />
    </section>
  );
}
