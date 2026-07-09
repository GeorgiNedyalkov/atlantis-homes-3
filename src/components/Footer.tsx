"use client";

import { FormEvent, useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks, siteConfig } from "@/lib/site-data";

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="bg-cream px-6 pb-8 pt-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-ink/10 pb-14 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo markClassName="h-9 w-9" textClassName="text-lg" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Refined coastal architecture, three minutes from the beach.
              Four residences, crafted for a lifestyle of privacy and ease.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 max-w-sm">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ink">
                Sign up for our newsletter
              </p>
              {subscribed ? (
                <p className="text-sm text-rust">You&rsquo;re on the list — thank you.</p>
              ) : (
                <div className="flex items-center gap-2 border-b border-ink/25 pb-2">
                  <input
                    required
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-cream transition-colors hover:bg-rust"
                  >
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              )}
            </form>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink">Navigate</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-rust">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-ink">Contact</p>
            <ul className="flex flex-col gap-3 text-sm text-muted">
              <li>
                <a href={siteConfig.phoneHref} className="transition-colors hover:text-rust">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-rust">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Atlantis Homes III · Novi Property Group</p>
          <p>Built with care on Bulgaria&rsquo;s southern coast</p>
        </div>
      </div>
    </footer>
  );
}
