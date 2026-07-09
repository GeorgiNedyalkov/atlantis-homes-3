import { Reveal } from "@/components/Reveal";

export function Intro() {
  return (
    <section className="bg-cream px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <span className="mb-6 inline-block h-px w-16 bg-rust align-middle" />
          <h2 className="font-display text-balance text-4xl font-medium uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl">
            Modern seaside living, moments from the shore.
          </h2>
        </Reveal>
        <Reveal delay={120} className="flex items-end">
          <p className="text-balance text-lg leading-relaxed text-muted">
            A serene neighbourhood set close to the coastline—ideal for morning
            swims, evening walks, and effortless access to wellness and leisure.
            Everyday essentials and a spa/wellness centre are nearby, keeping
            life simple and beautifully paced.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
