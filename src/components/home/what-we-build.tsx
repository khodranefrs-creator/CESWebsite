import { Inview } from "@/components/inview";
import { TechnicalLabel, ArrowLink } from "@/components/ui";
import { ProductDirectory } from "@/components/product-directory";

/* 03 — WHAT WE BUILD. The physical outputs, stated as a catalog:
   proof that ClearEdge manufactures, not merely consults. */
export function WhatWeBuild() {
  return (
    <section className="theme-light bg-bg text-fg" aria-labelledby="wwb-heading">
      <div className="mx-auto max-w-[84rem] px-5 py-20 md:px-10 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Inview>
            <div className="max-w-2xl">
              <TechnicalLabel>What we build</TechnicalLabel>
              <h2 id="wwb-heading" className="type-display-l mt-7">
                Three product families. One signal&nbsp;path.
              </h2>
            </div>
          </Inview>
          <Inview delay={150}>
            <ArrowLink href="/products">Product catalog</ArrowLink>
          </Inview>
        </div>

        <Inview delay={100} className="mt-14 block">
          <ProductDirectory />
        </Inview>

        <Inview delay={200}>
          <p className="label-mono mt-8 !text-[0.62rem] text-fg-faint">
            Engineered to your print — not selected from a fixed catalogue
          </p>
        </Inview>
      </div>
    </section>
  );
}
