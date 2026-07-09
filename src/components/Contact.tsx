"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { contactImage, siteConfig } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sent");
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-ink px-6 py-24 text-cream lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 hidden aspect-[4/5] overflow-hidden rounded-md lg:order-1 lg:block">
          <Image
            src={contactImage}
            alt="Atlantis Homes III coastline"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="mb-4 block text-xs font-medium uppercase tracking-[0.3em] text-rust-light">
              Enquiries
            </span>
            <h2 className="font-display text-balance text-4xl font-medium uppercase leading-[1.05] tracking-tight sm:text-5xl">
              Contact us
            </h2>
            <div className="mt-6 flex flex-col gap-1 text-lg">
              <a href={siteConfig.phoneHref} className="w-fit transition-colors hover:text-rust-light">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="w-fit transition-colors hover:text-rust-light">
                {siteConfig.email}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            {status === "sent" ? (
              <div className="mt-10 rounded-md border border-cream/20 bg-cream/5 p-8">
                <p className="font-display text-2xl uppercase tracking-tight">Thank you</p>
                <p className="mt-2 text-cream/75">
                  Your enquiry has been received. Our team will be in touch
                  shortly to arrange your private viewing.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm">
                    Name
                    <input
                      required
                      type="text"
                      name="name"
                      className="border-b border-cream/30 bg-transparent py-2.5 text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-rust-light"
                      placeholder="Your full name"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm">
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      className="border-b border-cream/30 bg-transparent py-2.5 text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-rust-light"
                      placeholder="you@email.com"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm">
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    className="border-b border-cream/30 bg-transparent py-2.5 text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-rust-light"
                    placeholder="+359"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm">
                  Message
                  <textarea
                    name="message"
                    rows={3}
                    className="resize-none border-b border-cream/30 bg-transparent py-2.5 text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-rust-light"
                    placeholder="Tell us what you're looking for"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-4 inline-flex w-fit items-center rounded-full bg-rust px-8 py-3.5 text-sm font-medium uppercase tracking-[0.05em] text-cream transition-colors hover:bg-rust-light"
                >
                  Request a Private Viewing
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
