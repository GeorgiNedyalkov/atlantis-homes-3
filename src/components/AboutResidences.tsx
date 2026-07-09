import Image from "next/image";
import { aboutResidencesImage, residenceStats } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

export function AboutResidences() {
  return (
    <section id="residences" className="scroll-mt-24 bg-cream px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-md lg:aspect-auto">
          <Image
            src={aboutResidencesImage}
            alt="Atlantis Homes III residence exterior"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="mb-4 block text-xs font-medium uppercase tracking-[0.3em] text-rust">
              About Atlantis Homes 3
            </span>
            <h2 className="font-display text-balance text-4xl font-medium uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl">
              About Atlantis Homes III
            </h2>
            <p className="mt-6 text-balance text-lg leading-relaxed text-muted">
              Atlantis Homes 3 is a project of 4 houses with modern
              architecture and beautiful interior design – three minutes from
              the sea and close to a complex with spa, gym, sauna and a
              personal nutritionist.
            </p>
          </Reveal>

          <dl className="mt-12 grid grid-cols-1 gap-8 border-t border-ink/10 pt-10 sm:grid-cols-3">
            {residenceStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-5xl font-medium tracking-tight text-ink">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.05em] text-ink">
                  {stat.label}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{stat.body}</p>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
