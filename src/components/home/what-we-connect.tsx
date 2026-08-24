import Link from "next/link";
import { Inview } from "@/components/inview";
import { TechnicalLabel, SectionIndex } from "@/components/ui";
import {
  FiberGlyph,
  CopperGlyph,
  BoxBuildGlyph,
} from "@/components/graphics";

const pathways = [
  {
    id: "fiber",
    familyId: "fiber-optic",
    index: "01",
    glyph: FiberGlyph,
    name: "Fiber Optic",
    note: "High performance cabling systems for speed-critical applications.",
  },
  {
    id: "copper",
    familyId: "copper-cabling",
    index: "02",
    glyph: CopperGlyph,
    name: "Copper",
    note: "Copper cabling systems built for dependable everyday throughput.",
  },
  {
    id: "em",
    familyId: "electro-mechanical",
    index: "03",
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
          </Inview>
        </div>

        {/* numbered editorial rows — one row per product pathway */}
        <div>
          <ol className="border-t border-line-strong">
            {pathways.map((item, i) => {
              const Glyph = item.glyph;
              return (
                <li key={item.id}>
                  <Inview delay={i * 110}>
                    <Link
                      href={`/products#${item.familyId}`}
                      aria-label={`${item.name} — view product family`}
                      className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-6 border-b border-line py-8 transition-colors duration-200 hover:bg-surface sm:gap-x-10 md:py-10"
                    >
                      <span className="label-mono !text-[0.72rem] text-fg-faint transition-colors group-hover:text-accent">
                        {item.index}
                      </span>
                      <span>
                        <span className="type-display-m !text-[clamp(1.5rem,1.2rem+1.7vw,2.75rem)] block leading-none tracking-tight transition-colors duration-200 group-hover:text-accent">
                          {item.name}
                        </span>
                        <span className="mt-3 block max-w-md text-sm leading-relaxed text-fg-muted">
                          {item.note}
                        </span>
                      </span>
                      <Glyph className="hidden h-11 w-11 shrink-0 text-fg-faint transition-colors duration-200 group-hover:text-accent sm:block" />
                    </Link>
                  </Inview>
                </li>
              );
            })}
          </ol>

          <Inview delay={360}>
            <p className="label-mono mt-8 !text-[0.62rem] text-fg-faint">
              Serving data centers · semiconductor equipment · automotive · clean energy
            </p>
          </Inview>
        </div>
      </div>
    </section>
  );
}
