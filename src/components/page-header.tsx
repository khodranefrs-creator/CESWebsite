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
    <section className="relative overflow-hidden bg-bg-deep text-fg">
      <div className="bp-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-[84rem] px-5 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44">
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
      </div>
      <div className="hairline-b relative" />
    </section>
  );
}
