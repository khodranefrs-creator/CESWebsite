import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Inview } from "@/components/inview";
import { TechnicalLabel, ArrowLink } from "@/components/ui";
import { CTASection } from "@/components/cta-section";
import { capabilities } from "@/lib/site";
import {
  capabilityGlyphs,
  PathDivider,
  EngineeringGlyph,
} from "@/components/graphics";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Fiber optic cabling, copper cabling, electro-mechanical box build assemblies, engineering collaboration, and build-to-print contract manufacturing — ISO certified quality throughout.",
  alternates: { canonical: "/capabilities" },
};

export default function CapabilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Capabilities"
        title={
          <>
            Engineered capability, end to&nbsp;end.
          </>
        }
        lede="Five connected disciplines — one team, one standard of quality. Every capability exists to move your requirement from design intent to manufactured reality."
        meta="05 CONNECTED DISCIPLINES"
      />

      {/* overview diagram strip */}
      <section className="bg-bg-deep text-fg" aria-hidden="true">
        <div className="mx-auto max-w-[84rem] px-5 pb-12 md:px-10">
          <div className="flex items-center justify-between pb-3 text-fg-faint">
            <span className="label-mono !text-[0.62rem]">FIG. 01</span>
            <span className="label-mono hidden !text-[0.62rem] sm:block">SIGNAL PATH — DESIGN TO PRODUCTION</span>
          </div>
          <Inview variant="draw">
            <PathDivider />
          </Inview>
        </div>
      </section>

      {/* capability bands — one technical system, five rows */}
      <section className="theme-light bg-bg text-fg">
        <div className="mx-auto max-w-[84rem] px-5 py-16 md:px-10 lg:py-24">
          {capabilities.map((cap, i) => {
            const Glyph = capabilityGlyphs[cap.id];
            return (
              <Inview key={cap.id}>
                <article
                  id={cap.id}
                  className={`scroll-mt-28 border-b border-line py-10 md:py-14 ${
                    i === 0 ? "border-t border-line-strong" : ""
                  }`}
                >
                  <div className="grid gap-8 lg:grid-cols-[7rem_auto_1fr_1.1fr] lg:items-start lg:gap-x-14">
                    {/* index + glyph */}
                    <div className="flex items-center justify-between gap-6 lg:flex-col lg:items-start lg:justify-start lg:gap-8">
                      <span className="type-display-m !text-[clamp(1.8rem,1.5rem+2vw,3rem)] font-medium leading-none tracking-tight text-fg-faint">
                        {cap.index}
                      </span>
                      <Glyph className="h-11 w-11 shrink-0 text-accent" />
                    </div>

                    {/* name */}
                    <div className="lg:w-64">
                      <h2 className="type-display-m !text-[clamp(1.6rem,1.35rem+1.4vw,2.5rem)] leading-[1.04]">
                        {cap.name}
                      </h2>
                      <p className="label-mono mt-4 !text-[0.62rem] !tracking-[0.14em] text-fg-muted">
                        {cap.tagline}
                      </p>
                    </div>

                    {/* description */}
                    <div className="lg:border-l lg:border-line lg:pl-14 lg:pt-1">
                      <p className="type-body max-w-xl text-fg-muted">{cap.description}</p>
                      <Link
                        href={`/contact?capability=${cap.id}#quote-form`}
                        className="text-link mt-7"
                      >
                        Discuss this capability
                        <svg className="text-link-arrow" width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                          <path d="M0 5h12M8 1l4 4-4 4" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </Inview>
            );
          })}
        </div>
      </section>

      {/* engineering collaboration note */}
      <section className="bg-bg-deep text-fg" aria-labelledby="collab-heading">
        <div className="mx-auto grid max-w-[84rem] items-center gap-12 px-5 py-20 md:px-10 lg:grid-cols-[1fr_1fr] lg:py-32">
          <Inview>
            <TechnicalLabel>How we engage</TechnicalLabel>
            <h2 id="collab-heading" className="type-display-m mt-6 max-w-xl">
              Collaboration is a capability&nbsp;too.
            </h2>
            <p className="type-body measure-tight mt-6 text-fg-muted">
              Our engineering and manufacturing teams collaborate with your
              team for design, documentation, and manufacturing of cabling
              needs — as a complete build-to-print manufacturing partner for
              low-to-high volume requirements.
            </p>
            <ArrowLink href="/contact#quote-form" className="mt-9">
              Start the conversation
            </ArrowLink>
          </Inview>
          <Inview delay={150} className="reveal-scale">
            <figure className="plate reg-corners p-8 md:p-10">
              <EngineeringGlyph className="h-12 w-12 text-accent" />
              <figcaption className="mt-6 text-sm leading-relaxed text-fg-muted">
                Quality standard: ISO certified manufacturing with strict
                quality standards maintained throughout our processes.
              </figcaption>
            </figure>
          </Inview>
        </div>
      </section>

      <CTASection />
    </>
  );
}
