import Link from "next/link";
import { Inview } from "@/components/inview";
import { TechnicalLabel } from "@/components/ui";
import {
  FiberGlyph,
  CopperGlyph,
  BoxBuildGlyph,
} from "@/components/graphics";

const pathways = [
  {
    id: "fiber",
    familyId: "fiber-optic",
    glyph: FiberGlyph,
    name: "Fiber Optic",
    note: "High performance cabling systems for speed-critical applications.",
  },
  {
    id: "copper",
    familyId: "copper-cabling",
    glyph: CopperGlyph,
    name: "Copper",
    note: "Copper cabling systems built for dependable everyday throughput.",
  },
  {
    id: "em",
    familyId: "electro-mechanical",
    glyph: BoxBuildGlyph,
    name: "Electro-Mechanical",
    note: "Box build assemblies that integrate connectivity into complete systems.",
  },
];

export function WhatWeConnect() {
  return (
    <section id="what-we-connect" className="theme-light bg-bg text-fg" aria-labelledby="wwc-heading">
      <div className="mx-auto grid max-w-[84rem] gap-16 px-5 py-24 md:px-10 lg:grid-cols-2 lg:gap-10 lg:py-36">
        {/* statement */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Inview>
            <TechnicalLabel>What we connect</TechnicalLabel>
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

        {/* connected product universe */}
        <div className="relative">
          {/* vertical connection rail — centered on the glyph column
              (sm:p-8 padding + half of the 3.3rem icon box) */}
          <span
            aria-hidden="true"
            className="absolute bottom-10 left-[3.65rem] top-10 hidden w-[1px] bg-line sm:block"
          />
          <ol className="space-y-4">
            {pathways.map((item, i) => {
              const Glyph = item.glyph;
              return (
                <li key={item.id}>
                  <Inview delay={i * 120}>
                    <Link
                      href={`/products#${item.familyId}`}
                      aria-label={`${item.name} — view product family`}
                      className="reg-corners group relative flex items-start gap-7 border border-line bg-surface p-7 transition-colors duration-300 hover:border-accent sm:p-8"
                    >
                      <span className="relative z-10 flex h-[3.3rem] w-[3.3rem] shrink-0 items-center justify-center border border-line-strong bg-bg text-fg transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
                        <Glyph className="h-9 w-9" />
                      </span>
                      <div>
                        <p className="label-mono !text-[0.62rem] text-fg-faint">
                          Pathway {String(i + 1).padStart(2, "0")}
                        </p>
                        <h3 className="type-title mt-2">{item.name}</h3>
                        <p className="type-body mt-2 text-fg-muted">{item.note}</p>
                      </div>
                      <span
                        aria-hidden="true"
                        className="ml-auto mt-1 hidden h-2 w-2 shrink-0 rounded-full border border-line-strong transition-colors duration-300 group-hover:border-accent group-hover:bg-accent lg:block"
                      />
                    </Link>
                  </Inview>
                </li>
              );
            })}
          </ol>

          <Inview delay={380}>
            <p className="label-mono mt-8 !text-[0.62rem] text-fg-faint">
              <span>Serving data centers · semiconductor equipment · automotive · clean energy</span>
            </p>
          </Inview>
        </div>
      </div>
    </section>
  );
}
