import Link from "next/link";
import { Inview } from "@/components/inview";
import { TechnicalLabel, SectionIndex, ArrowLink } from "@/components/ui";
import {
  FiberGlyph,
  CopperGlyph,
  BoxBuildGlyph,
} from "@/components/graphics";

const pathways = [
  {
    id: "fiber",
    familyId: "fiber-optic",
    tag: "ST.01",
    glyph: FiberGlyph,
    name: "Fiber Optic",
    note: "High performance cabling systems for speed-critical applications.",
  },
  {
    id: "copper",
    familyId: "copper-cabling",
    tag: "ST.02",
    glyph: CopperGlyph,
    name: "Copper",
    note: "Copper cabling systems built for dependable everyday throughput.",
  },
  {
    id: "em",
    familyId: "electro-mechanical",
    tag: "ST.03",
    glyph: BoxBuildGlyph,
    name: "Electro-Mechanical",
    note: "Box build assemblies that integrate connectivity into complete systems.",
  },
];

export function WhatWeConnect() {
  return (
    <section id="what-we-connect" className="theme-light bg-bg text-fg" aria-labelledby="wwc-heading">
      <div className="mx-auto grid max-w-[84rem] gap-16 px-5 py-24 md:px-10 lg:grid-cols-[1fr_1.25fr] lg:gap-20 lg:py-36">
        {/* statement */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Inview>
            <SectionIndex n="01" />
            <TechnicalLabel className="mt-6">What we connect</TechnicalLabel>
            <h2 id="wwc-heading" className="type-display-l mt-6">
              One engineering partner across the entire signal&nbsp;path.
            </h2>
          </Inview>
          <Inview delay={140}>
            <p className="type-body measure mt-8 text-fg-muted">
              Located in the heart of Silicon Valley, ClearEdge Solutions designs
              and manufactures advanced connectivity and assembly solutions that
              keep technology moving.
            </p>
            <ArrowLink href="/products" className="mt-9">
              View products
            </ArrowLink>
          </Inview>
        </div>

        {/* signal-path diagram — three stations on one drawn line */}
        <Inview variant="flow" threshold={0.3}>
          <div className="relative">
            {/* desktop conductor — aligned to node centers (tag 16 + mb 16 + half node 40 = 72px) */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-[4rem] hidden h-4 w-full lg:block"
              viewBox="0 0 1000 16"
              preserveAspectRatio="none"
              fill="none"
              stroke="currentColor"
            >
              <path className="flow-path text-fg-faint" d="M4 8 H 996" strokeWidth="1.5" pathLength={1} />
            </svg>
            {/* endpoint nodes */}
            <span
              aria-hidden="true"
              className="absolute left-0 top-[calc(4rem+5px)] hidden h-1.5 w-1.5 rounded-full bg-accent lg:block"
            />
            <span
              aria-hidden="true"
              className="absolute right-0 top-[calc(4rem+5px)] hidden h-1.5 w-1.5 rounded-full bg-accent lg:block"
            />

            <ol className="relative space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-10 lg:space-y-0">
              {/* mobile rail */}
              <span
                aria-hidden="true"
                className="absolute bottom-10 left-[39px] top-10 w-[2px] bg-line-strong lg:hidden"
              />
              {pathways.map((item) => {
                const Glyph = item.glyph;
                return (
                  <li key={item.id} className="relative pl-24 lg:pl-0">
                    <p className="label-mono mb-4 h-4 !leading-none !text-[0.62rem] text-fg-faint lg:mb-4">
                      {item.tag}
                    </p>
                    {/* station node sits on the line */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-8 flex h-20 w-20 items-center justify-center border border-line-strong bg-bg lg:relative lg:top-0 lg:left-0"
                    >
                      <Glyph className="h-9 w-9 text-fg" />
                      <span className="absolute -right-[3px] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent" />
                    </span>
                    <h3 className="mt-7 font-display text-[1.3rem] font-semibold leading-none tracking-tight lg:mt-6">
                      <Link
                        href={`/products#${item.familyId}`}
                        className="transition-colors duration-200 hover:text-accent"
                      >
                        {item.name}
                      </Link>
                    </h3>
                    <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-fg-muted">
                      {item.note}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>

          <p className="label-mono mt-14 border-t border-line pt-5 !text-[0.62rem] text-fg-faint">
            Serving data centers · semiconductor equipment · automotive · clean energy
          </p>
        </Inview>
      </div>
    </section>
  );
}
