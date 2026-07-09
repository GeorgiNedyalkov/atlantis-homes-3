"use client";

import { Logo } from "@/components/Logo";
import { navLinks, siteConfig } from "@/lib/site-data";

export function Footer() {
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
