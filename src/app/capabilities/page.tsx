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

      <section className="theme-light bg-bg text-fg">
        <div className="mx-auto max-w-[84rem] px-5 py-20 md:px-10 lg:py-28">
          <div className="space-y-6 md:space-y-10">
            {capabilities.map((cap, i) => {
              const Glyph = capabilityGlyphs[cap.id];
              const flipped = i % 2 === 1;
              return (
                <Inview key={cap.id}>
                  <article
                    id={cap.id}
                    className="reg-corners scroll-mt-28 border border-line bg-surface"
                  >
                    <div
                      className={`grid gap-8 p-8 md:p-12 lg:grid-cols-[auto_1.2fr_1fr] lg:items-center lg:gap-14 ${
                        flipped ? "lg:[&>*:first-child]:order-3" : ""
                      }`}
                    >
                      <div className="flex items-center gap-6 lg:w-44 lg:flex-col lg:items-start">
                        <span className="flex h-20 w-20 items-center justify-center border border-line-strong bg-bg text-fg transition-colors duration-300 hover:border-accent hover:text-accent">
                          <Glyph className="h-12 w-12" />
                        </span>
                        <span className="label-mono !text-[0.7rem] text-fg-faint lg:mt-4">
                          CAP. {cap.index}
                        </span>
                      </div>

                      <div>
                        <h2 className="type-display-m">{cap.name}</h2>
                        <p className="label-mono mt-4 !tracking-[0.16em] text-accent">
                          {cap.tagline}
                        </p>
                      </div>

                      <div className="border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
                        <p className="type-body text-fg-muted">{cap.description}</p>
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
        </div>
      </section>

      {/* engineering collaboration note */}
      <section className="bg-bg text-fg" aria-labelledby="collab-heading">
        <div className="mx-auto grid max-w-[84rem] items-center gap-10 px-5 py-20 md:px-10 lg:grid-cols-[1fr_1fr] lg:py-32">
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
          <Inview delay={150}>
            <div className="reg-corners border border-line p-8 md:p-10">
              <EngineeringGlyph className="h-12 w-12 text-accent" />
              <p className="mt-6 text-sm leading-relaxed text-fg-muted">
                Quality standard: ISO certified manufacturing with strict
                quality standards maintained throughout our processes.
              </p>
            </div>
          </Inview>
        </div>
      </section>

      <CTASection />
    </>
  );
}
