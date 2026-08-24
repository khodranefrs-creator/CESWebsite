import { Inview } from "@/components/inview";
import { TechnicalLabel } from "@/components/ui";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  lede,
  meta,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  meta?: string;
}) {
  return (
    <section className="theme-light relative overflow-hidden bg-bg text-fg">
      <div className="relative mx-auto max-w-[84rem] px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
        <Inview>
          <div className="flex items-center justify-between gap-6">
            <TechnicalLabel>{eyebrow}</TechnicalLabel>
            {meta ? (
              <span className="label-mono hidden !text-[0.62rem] text-fg-faint sm:block" aria-hidden="true">
                {meta}
              </span>
            ) : null}
          </div>
          <h1 className="type-display-l mt-8 max-w-4xl">{title}</h1>
          {lede ? (
            <p className="type-lede measure mt-8 text-fg-muted">{lede}</p>
          ) : null}
        </Inview>

        {/* drafting stamp — anchors the lower-right field of the header band.
            Purely decorative: coordinates mirror the location block data. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-7 right-5 hidden flex-col items-end gap-3 text-fg-faint md:right-10 xl:flex"
        >
          <span className="label-mono !text-[0.6rem]">37.35° N — 121.95° W</span>
          <span className="rule-ticks-y h-16 w-[1px]" />
          <span className="label-mono !text-[0.6rem]">SILICON VALLEY · US</span>
        </div>
      </div>
      <div className="hairline-b relative" />
    </section>
  );
}
