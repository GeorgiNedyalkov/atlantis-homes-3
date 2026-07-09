import Image from "next/image";
import { team } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";

export function Team() {
  return (
    <section className="bg-cream px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <span className="mb-4 block text-xs font-medium uppercase tracking-[0.3em] text-rust">
            Meet the Team
          </span>
          <h2 className="font-display text-balance text-4xl font-medium uppercase leading-[1.05] tracking-tight text-ink sm:text-5xl">
            The people behind Atlantis Homes III
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 90}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-ink">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover grayscale-[10%] transition-transform duration-700 hover:scale-105"
                />
              </div>
              <p className="mt-4 font-display text-lg font-medium uppercase tracking-tight text-ink sm:text-xl">
                {member.name}
              </p>
              <p className="mt-1 text-sm text-muted">{member.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
