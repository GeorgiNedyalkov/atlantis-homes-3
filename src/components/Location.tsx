import Image from "next/image";
import { locationImage } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";

const amenities = [
  "Three minutes to the coastline",
  "Spa & wellness centre",
  "Tennis & fitness facilities",
  "Yachting opportunities",
];

export function Location() {
  return (
    <section id="location" className="scroll-mt-24 bg-paper px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.3em] text-rust">
            Location
          </span>
          <h2 className="font-display text-balance text-4xl font-medium uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl">
            Set on Bulgaria&rsquo;s southern coast
          </h2>
          <p className="mt-6 text-balance text-lg leading-relaxed text-muted">
            A quiet residential setting minutes from the sea, with everyday
            essentials, wellness and sport close at hand.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="relative aspect-[16/10] overflow-hidden rounded-md bg-ink">
            <iframe
              title="Atlantis Homes III location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=27.560%2C42.410%2C27.700%2C42.480&layer=mapnik&marker=42.443%2C27.633"
              className="h-full w-full grayscale-[15%]"
              loading="lazy"
            />
          </Reveal>

          <Reveal delay={120} className="relative flex flex-col justify-between overflow-hidden rounded-md bg-ink p-8">
            <Image
              src={locationImage}
              alt="Coastal surroundings near Atlantis Homes III"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover opacity-30"
            />
            <ul className="relative flex flex-col gap-4">
              {amenities.map((item) => (
                <li key={item} className="flex items-center gap-3 text-cream">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-rust-light" />
                  <span className="text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="relative mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium uppercase tracking-[0.05em] text-cream underline decoration-rust-light underline-offset-4"
            >
              Ask about the neighbourhood
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
