"use client";

import { useState } from "react";
import { faqItems } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-cream px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.3em] text-rust">
            FAQ
          </span>
          <h2 className="font-display text-balance text-4xl font-medium uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl">
            Your Questions, Answered
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted">
            Find quick answers to the most common questions about Atlantis
            Homes III. If you need more information, please reach out below.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center text-sm font-medium uppercase tracking-[0.05em] text-rust underline underline-offset-4"
          >
            Enquire
          </a>
        </Reveal>

        <div className="mt-14 divide-y divide-ink/10 border-t border-ink/10">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-xl font-medium uppercase tracking-tight text-ink sm:text-2xl">
                    {item.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-transform duration-300 ${
                      isOpen ? "rotate-45 border-rust bg-rust text-cream" : "text-ink"
                    }`}
                  >
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M10 4v12M4 10h12" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                  style={{ display: "grid" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl text-base leading-relaxed text-muted">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
