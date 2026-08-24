import Link from "next/link";
import { Inview } from "@/components/inview";
import { TechnicalLabel } from "@/components/ui";
import { industries } from "@/lib/site";
import { industryGlyphs } from "@/components/graphics";

export function IndustriesSection() {
  return (
    <section className="relative bg-bg-deep text-fg" aria-labelledby="ind-heading">
      <div className="mx-auto max-w-[84rem] px-5 py-24 md:px-10 lg:py-36">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Inview>
            <div className="max-w-2xl">
              <TechnicalLabel>Industries</TechnicalLabel>
              <h2 id="ind-heading" className="type-display-l mt-6">
                Built for technology-driven&nbsp;industries.
              </h2>
            </div>
          </Inview>
          <Inview delay={150}>
            <p className="max-w-sm text-sm leading-relaxed text-fg-muted">
              Wherever reliability is non-negotiable, connectivity has to be
              engineered — not just assembled.
            </p>
          </Inview>
        </div>

        {/* editorial industry index */}
        <div className="mt-16 border-t border-line-strong">
          {industries.map((industry, i) => {
            const Glyph = industryGlyphs[industry.id];
            return (
              <Inview key={industry.id} delay={i * 70}>
                <Link
                  href={`/industries#${industry.id}`}
                  aria-label={`${industry.name} — serving this industry`}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-6 border-b border-line py-8 sm:gap-x-10 md:py-9"
                >
                  <span className="type-display-m !text-[clamp(1.6rem,1.3rem+1.8vw,3rem)] font-medium leading-none tracking-tight text-fg-faint transition-colors duration-200 group-hover:text-fg">
                    {industry.index}
                  </span>
                  <span>
                    <span className="type-display-m !text-[clamp(1.5rem,1.25rem+1.7vw,2.75rem)] block leading-none tracking-tight transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent">
                      {industry.name}
                    </span>
                    <span className="mt-3 block max-w-xl text-sm leading-relaxed text-fg-muted">
                      {industry.line}
                    </span>
                  </span>
                  <Glyph className="hidden h-10 w-10 shrink-0 text-fg-faint transition-colors duration-200 group-hover:text-accent sm:block" />
                </Link>
              </Inview>
            );
          })}
        </div>

        <Inview delay={200}>
          <p className="label-mono mt-8 hidden !text-[0.62rem] text-fg-faint lg:block">
            Data centers · Semiconductor equipment · Automotive · Clean energy
          </p>
        </Inview>
      </div>
    </section>
  );
}
