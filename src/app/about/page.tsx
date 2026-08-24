import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Inview } from "@/components/inview";
import { TechnicalLabel, ArrowLink, SectionIndex } from "@/components/ui";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "ClearEdge Solutions designs and manufactures advanced connectivity and assembly solutions in the heart of Silicon Valley — fiber optic, copper cable assembly, and electro-mechanical box build products.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    index: "01",
    name: "Engineering Excellence",
    body: "Driven by engineering excellence, we deliver products that meet the most demanding performance and quality standards — from concept to production.",
  },
  {
    index: "02",
    name: "Customer-First Mindset",
    body: "Our mission is to enable technology driven industries with the connectivity and integration they need to thrive in a connected world. Every engagement starts with your requirements.",
  },
  {
    index: "03",
    name: "Agility With Precision",
    body: "Our approach combines agility with technical excellence — responsive service without compromising the exactness your build demands.",
  },
];

const complexTraits = [
  {
    term: "Complex Customized Builds",
    body: "We specialize where requirements don't fit a catalogue — builds engineered around your design, not the other way around.",
  },
  {
    term: "Diverse Product Configurations",
    body: "Wide variation across products and configurations is not an exception here. It is how we work, managed with discipline.",
  },
  {
    term: "Smaller Production Volumes",
    body: "Each solution is engineered to meet exact performance and design requirements — at volumes larger operations overlook.",
  },
];

const portfolio = [
  {
    familyId: "fiber-optic",
    name: "Fiber Optic",
    body: "High performance fiber optic cabling systems for technology-driven industries.",
  },
  {
    familyId: "copper-cabling",
    name: "Copper Cable Assembly",
    body: "Copper cabling systems engineered for reliability across demanding applications.",
  },
  {
    familyId: "electro-mechanical",
    name: "Electro-Mechanical Box Build",
    body: "Integrated electro-mechanical assemblies that turn connectivity into complete systems.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About ClearEdge"
        title={
          <>
            The engineering partner behind precise&nbsp;connections.
          </>
        }
        lede="Located in the heart of Silicon Valley, ClearEdge Solutions designs and manufactures advanced connectivity and assembly solutions that keep technology moving."
        meta="CLEAREDGE SOLUTIONS, INC. · SAN JOSE, CALIFORNIA"
      />

      {/* what we manufacture — numbered rows */}
      <section className="theme-light bg-bg text-fg" aria-labelledby="mfg-heading">
        <div className="mx-auto max-w-[84rem] px-5 py-20 md:px-10 lg:py-28">
          <Inview>
            <h2 id="mfg-heading" className="type-display-m max-w-3xl">
              Our product portfolio is built around one thing: keeping
              technology connected.
            </h2>
          </Inview>
          <ol className="mt-14 border-t border-line-strong">
            {portfolio.map((item, i) => (
              <li key={item.familyId}>
                <Inview delay={i * 90}>
                  <Link
                    href={`/products#${item.familyId}`}
                    aria-label={`${item.name} — view product family`}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-6 border-b border-line py-7 transition-colors duration-200 hover:bg-surface sm:gap-x-10 md:py-8"
                  >
                    <span className="label-mono !text-[0.72rem] text-fg-faint transition-colors group-hover:text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="type-title block transition-colors duration-200 group-hover:text-accent">
                        {item.name}
                      </span>
                      <span className="mt-1.5 block max-w-xl text-sm leading-relaxed text-fg-muted">
                        {item.body}
                      </span>
                    </span>
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 14 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                      className="text-fg-faint transition-all duration-200 group-hover:translate-x-1.5 group-hover:text-accent"
                    >
                      <path d="M0 5h12M8 1l4 4-4 4" />
                    </svg>
                  </Link>
                </Inview>
              </li>
            ))}
          </ol>
          <Inview delay={120}>
            <p className="mt-8 text-sm text-fg-muted">
              Serving data centers, semiconductor equipment, automotive, and
              clean energy.{" "}
              <Link href="/capabilities" className="text-accent underline underline-offset-4 hover:no-underline">
                Explore all capabilities
              </Link>
            </p>
          </Inview>
        </div>
      </section>

      {/* principles */}
      <section className="bg-bg-deep text-fg" aria-labelledby="principles-heading">
        <div className="mx-auto grid max-w-[84rem] gap-12 px-5 py-20 md:px-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20 lg:py-32">
          <div>
            <Inview>
              <SectionIndex n="02" />
              <TechnicalLabel className="mt-6">How we think</TechnicalLabel>
              <h2 id="principles-heading" className="type-display-l mt-6">
                Principles we engineer&nbsp;by.
              </h2>
              <p className="type-body measure-tight mt-6 text-fg-muted">
                From concept to production, ClearEdge partners with clients to
                design innovative, scalable solutions that support their most
                critical applications.
              </p>
            </Inview>
          </div>
          <ol>
            {principles.map((p, i) => (
              <li key={p.index}>
                <Inview delay={i * 90}>
                  <div className="hairline-t group grid gap-3 py-8 sm:grid-cols-[4rem_1fr] sm:gap-8">
                    <span className="label-mono !text-[0.72rem] text-accent">{p.index}</span>
                    <div>
                      <h3 className="type-title">{p.name}</h3>
                      <p className="type-body mt-3 text-fg-muted">{p.body}</p>
                    </div>
                  </div>
                </Inview>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* built for the complex — mirrored composition: traits left,
          intro right, inverting the Principles section above it */}
      <section className="theme-light bg-bg text-fg" aria-labelledby="complex-heading">
        <div className="mx-auto max-w-[84rem] px-5 py-20 md:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
            <Inview className="lg:order-2">
              <TechnicalLabel>Built for the complex</TechnicalLabel>
              <h2 id="complex-heading" className="type-display-m mt-6">
                Distinguished by complexity, delivered with&nbsp;efficiency.
              </h2>
              <p className="type-body measure mt-6 text-fg-muted">
                ClearEdge Solutions is distinguished by its ability to deliver
                complex, customized builds with efficiency and precision —
                combining agility with technical excellence to provide unmatched
                value and reliability.
              </p>
            </Inview>
            <dl className="lg:order-1">
              {complexTraits.map((t, i) => (
                <Inview key={t.term} delay={i * 90}>
                  <div className="hairline-t py-7 first:border-t first:border-line-strong">
                    <dt className="type-title">{t.term}</dt>
                    <dd className="type-body mt-2 text-fg-muted">{t.body}</dd>
                  </div>
                </Inview>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* partnership quote */}
      <section className="bg-bg text-fg" aria-label="Partnership philosophy">
        <div className="mx-auto max-w-4xl px-5 py-24 text-center md:px-10 lg:py-36">
          <Inview>
            <svg width="34" height="24" viewBox="0 0 34 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto text-accent" aria-hidden="true">
              <path d="M0 12h13M21 12h13M17 0v24" opacity="0.5" />
            </svg>
            <blockquote className="mt-8">
              <p className="type-display-m leading-snug">
                &ldquo;We partner with our customers to transform ideas into
                reality.&rdquo;
              </p>
            </blockquote>
            <p className="label-mono mt-8 !tracking-[0.18em] text-fg-muted">
              Trusted quality · Responsive service · Scalable solutions
            </p>
          </Inview>
          <Inview delay={150}>
            <ArrowLink href="/capabilities" className="mt-10">
              See what we build
            </ArrowLink>
          </Inview>
        </div>
      </section>

      <CTASection />
    </>
  );
}
