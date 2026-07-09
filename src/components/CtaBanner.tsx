import Image from "next/image";
import { ctaBannerImage } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-28 lg:px-10 lg:py-36">
      <Image
        src={ctaBannerImage}
        alt="Atlantis Homes III at dusk"
        fill
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />

      <Reveal className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-display text-balance text-5xl font-medium uppercase leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-7xl">
          Be one of the four.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-cream/80">
          Atlantis Homes III: four contemporary residences, ACT 16 certified,
          just three minutes from the sea. Modern architecture, elegant
          interiors, and a lifestyle enriched with spa, gym, sauna, and
          personal wellness services.
        </p>
        <a
          href="#contact"
          className="mt-9 inline-flex items-center rounded-full bg-rust px-8 py-4 text-sm font-medium uppercase tracking-[0.05em] text-cream transition-colors hover:bg-rust-light"
        >
          Request a Private Viewing
        </a>
      </Reveal>
    </section>
  );
}
