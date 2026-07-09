"use client";

import { useRef } from "react";
import Image from "next/image";
import { featureSlides } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";

export function FeatureShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const node = trackRef.current;
    if (!node) return;
    const amount = node.clientWidth * 0.82 * dir;
    node.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="bg-paper py-24 lg:py-32">
      <div className="mx-auto flex max-w-7xl items-end justify-between gap-6 px-6 lg:px-10">
        <Reveal>
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.3em] text-rust">
            Details worth living in
          </span>
          <h2 className="font-display max-w-lg text-balance text-4xl font-medium uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl">
            Crafted for everyday ease
          </h2>
        </Reveal>

        <div className="hidden shrink-0 gap-3 sm:flex">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollBy(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-rust hover:text-rust"
          >
            <svg viewBox="0 0 40 40" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22.5 12.5 15 20l7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollBy(1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-rust hover:text-rust"
          >
            <svg viewBox="0 0 40 40" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17.5 12.5 25 20l-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 [scrollbar-width:none] lg:px-10 [&::-webkit-scrollbar]:hidden"
      >
        {featureSlides.map((slide) => (
          <article
            key={slide.label + slide.tag}
            className="group relative aspect-[3/4] w-[78vw] shrink-0 snap-start overflow-hidden rounded-md bg-ink sm:w-[46vw] lg:w-[30vw]"
          >
            <Image
              src={slide.image}
              alt={slide.label}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 78vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-cream/70">
                {slide.label}
              </span>
              <p className="mt-2 font-display text-xl font-medium uppercase leading-tight tracking-tight text-cream">
                {slide.tag}
              </p>
              <p className="mt-2 max-w-[90%] text-sm leading-relaxed text-cream/80">
                {slide.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
