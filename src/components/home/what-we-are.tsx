import { Inview } from "@/components/inview";
import { TechnicalLabel } from "@/components/ui";
import { company } from "@/lib/site";

/* 01 — WHAT WE ARE. The page's opening statement: who ClearEdge is,
   set as a quiet editorial band between the hero and the signal path. */
export function WhatWeAre() {
  return (
    <section className="theme-light bg-bg text-fg" aria-labelledby="wwa-heading">
      <div className="mx-auto max-w-[84rem] px-5 py-20 md:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <Inview>
            <TechnicalLabel>What we are</TechnicalLabel>
            <h2 id="wwa-heading" className="type-display-l mt-7">
              A Silicon Valley engineering and manufacturing partner for
              advanced connectivity.
            </h2>
            <p className="type-body measure mt-8 text-fg-muted">
              ClearEdge Solutions designs and manufactures high performance
              fiber optic and copper cabling systems and electro-mechanical
              assemblies — taking customer requirements from design intent to
              manufactured reality.
            </p>
          </Inview>

          <Inview delay={160}>
            {/* specification block — the company stated as data */}
            <dl className="border-t border-line-strong lg:mt-2">
              {[
                { k: "Organization", v: company.shortName },
                { k: "Based in", v: `${company.address.city}, ${company.address.state}` },
                { k: "Disciplines", v: "Fiber · Copper · Box build" },
                { k: "Engagement", v: "Build-to-print" },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-3.5"
                >
                  <dt className="label-mono shrink-0 !text-[0.62rem] text-fg-faint">{row.k}</dt>
                  <dd className="text-right text-sm font-medium">{row.v}</dd>
                </div>
              ))}
            </dl>
          </Inview>
        </div>
      </div>
    </section>
  );
}
