import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Inview } from "@/components/inview";
import { CTASection } from "@/components/cta-section";
import { industries } from "@/lib/site";
import { industryGlyphs } from "@/components/graphics";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "ClearEdge Solutions serves technology-driven industries including data centers, semiconductor equipment, automotive, and clean energy with engineered connectivity and assembly solutions.",
  alternates: { canonical: "/industries" },
};

const capabilityLinks = [
  { label: "Fiber Optic", href: "/capabilities#fiber-optic" },
  { label: "Copper Cabling", href: "/capabilities#copper-cabling" },
  { label: "Electro-Mechanical", href: "/capabilities#electro-mechanical" },
];

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

      {industries.map((industry, i) => {
        const Glyph = industryGlyphs[industry.id];
        const dark = i % 2 === 1;
        return (
          <section
            key={industry.id}
            id={industry.id}
            className={`scroll-mt-24 ${
              dark ? "bg-bg-deep text-fg" : "theme-light bg-bg text-fg"
            }`}
            aria-labelledby={`${industry.id}-heading`}
          >
            <div className="mx-auto max-w-[84rem] px-5 py-16 md:px-10 lg:py-24">
              <Inview>
                <div className="grid items-center gap-10 md:grid-cols-[auto_1fr_auto] md:gap-14">
                  <span
                    className={`flex h-28 w-28 items-center justify-center border md:h-36 md:w-36 ${
                      dark ? "border-line-strong" : "border-line-strong bg-surface"
                    }`}
                  >
                    <Glyph className="h-16 w-16 text-accent md:h-20 md:w-20" />
                  </span>
                  <div>
                    <p className="label-mono !text-[0.66rem] text-fg-faint">
                      INDUSTRY {industry.index} / {String(industries.length).padStart(2, "0")}
                    </p>
                    <h2 id={`${industry.id}-heading`} className="type-display-m mt-4">
                      {industry.name}
                    </h2>
                    <p className="type-lede measure mt-5 text-fg-muted">
                      {industry.line}
                    </p>
                  </div>
                  <ul className="space-y-3 md:w-56">
                    <li className="label-mono hidden !text-[0.6rem] text-fg-faint md:block">
                      RELEVANT CAPABILITIES
                    </li>
                    {capabilityLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-fg-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Inview>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
