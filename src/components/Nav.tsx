"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/site-data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-paper/95 backdrop-blur-sm shadow-[0_1px_0_0_var(--color-line)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#" className="shrink-0">
          <Logo variant={solid ? "dark" : "light"} markClassName="h-8 w-8" textClassName="text-base" />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-[0.06em] transition-colors hover:text-rust ${
                solid ? "text-ink" : "text-cream"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={`hidden rounded-full border px-5 py-2.5 text-sm font-medium uppercase tracking-[0.05em] transition-colors lg:inline-block ${
            solid
              ? "border-ink text-ink hover:bg-ink hover:text-cream"
              : "border-cream text-cream hover:bg-cream hover:text-ink"
          }`}
        >
          Request a Viewing
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`block h-[1.5px] w-6 transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            } ${solid || open ? "bg-ink" : "bg-cream"}`}
          />
          <span
            className={`block h-[1.5px] w-6 transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            } ${solid || open ? "bg-ink" : "bg-cream"}`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col justify-center bg-cream px-8 transition-all duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl font-medium uppercase tracking-wide text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-10 inline-block w-fit rounded-full bg-ink px-6 py-3 text-sm font-medium uppercase tracking-[0.05em] text-cream"
        >
          Request a Viewing
        </a>
      </div>
    </header>
  );
}
