import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Inview } from "@/components/inview";
import { CTASection } from "@/components/cta-section";
import { industries, productFamilies } from "@/lib/site";
import { industryGlyphs } from "@/components/graphics";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "ClearEdge Solutions serves technology-driven industries including data centers, semiconductor equipment, automotive, and clean energy with engineered connectivity and assembly solutions.",
  alternates: { canonical: "/industries" },
};

/* Derived from the applications each product family is verified to serve,
   so every industry lists only the families that actually name it. */
const relatedFamilies = (industryId: string) =>
  productFamilies.filter((f) => f.applications.includes(industryId));

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title={
          <>
            Connectivity for the industries that can&rsquo;t afford
            unreliable.
          </>
        }
        lede="We serve technology-driven industries — where performance requirements are exacting and dependability is the baseline, not the goal."
        meta="TECHNOLOGY-DRIVEN APPLICATIONS"
      />

      {/* editorial list */}
      <section className="theme-light bg-bg text-fg">
        <div className="mx-auto max-w-[84rem] px-5 py-16 md:px-10 lg:py-24">
          {industries.map((industry, i) => {
            const Glyph = industryGlyphs[industry.id];
            return (
              <Inview key={industry.id}>
                <article
                  id={industry.id}
                  className={`group scroll-mt-28 border-b border-line py-10 md:py-14 ${
                    i === 0 ? "border-t border-line-strong" : ""
                  }`}
                  aria-labelledby={`${industry.id}-heading`}
                >
                  <div className="grid gap-8 lg:grid-cols-[7rem_1fr_auto] lg:items-start lg:gap-x-14">
                    <span className="type-display-m !text-[clamp(1.8rem,1.5rem+2vw,3rem)] font-medium leading-none tracking-tight text-fg-faint transition-colors duration-200 group-hover:text-accent">
                      {industry.index}
                    </span>

                    <div>
                      <h2
                        id={`${industry.id}-heading`}
                        className="type-display-m !text-[clamp(1.7rem,1.45rem+1.6vw,2.75rem)] leading-[1.04]"
                      >
                        {industry.name}
                      </h2>
                      <p className="type-lede mt-4 max-w-xl !text-[1.05rem] text-fg-muted">
                        {industry.line}
                      </p>

                      {/* related products — derived from verified applications */}
                      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5">
                        <span className="label-mono !text-[0.6rem] text-fg-faint">
                          Related products
                        </span>
                        {relatedFamilies(industry.id).map((family) => (
                          <Link
                            key={family.id}
                            href={`/products#${family.id}`}
                            className="text-sm text-fg-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                          >
                            {family.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <Glyph className="hidden h-14 w-14 shrink-0 text-fg-faint transition-colors duration-200 group-hover:text-accent lg:block" />
                  </div>
                </article>
              </Inview>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
