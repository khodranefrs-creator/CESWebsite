import { Inview } from "@/components/inview";
import { TechnicalLabel } from "@/components/ui";
import { IndustrySelector } from "@/components/home/industry-selector";

export function IndustriesSection() {
  return (
    <section className="theme-light bg-bg text-fg" aria-labelledby="ind-heading">
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

        <Inview className="mt-16">
          <IndustrySelector />
        </Inview>
      </div>
    </section>
  );
}
