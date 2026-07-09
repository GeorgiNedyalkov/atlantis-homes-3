import Image from "next/image";
import { companyImage, companyNote, companyStats } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

export function AboutCompany() {
  return (
    <section className="bg-paper px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 aspect-[4/5] overflow-hidden rounded-md lg:order-1 lg:aspect-auto">
          <Image
            src={companyImage}
            alt="NOVI Property Group at work"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div className="order-1 flex flex-col justify-center lg:order-2">
          <Reveal>
            <span className="mb-4 block text-xs font-medium uppercase tracking-[0.3em] text-rust">
              {companyNote.eyebrow}
            </span>
            <h2 className="font-display text-balance text-4xl font-medium uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl">
              {companyNote.heading}
            </h2>
            <p className="mt-6 text-balance text-lg leading-relaxed text-muted">
              {companyNote.body}
            </p>
          </Reveal>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-ink/10 pt-10">
            {companyStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
                <p className="mt-2 text-xs font-medium uppercase leading-snug tracking-[0.03em] text-muted sm:text-sm">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
