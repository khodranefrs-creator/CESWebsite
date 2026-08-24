import Link from "next/link";
import { Inview } from "@/components/inview";
import { TechnicalLabel, ArrowLink } from "@/components/ui";
import { capabilities } from "@/lib/site";
import { capabilityGlyphs } from "@/components/graphics";

export function CapabilitiesPreview() {
  return (
    <section className="theme-light bg-bg text-fg" aria-labelledby="cap-heading">
      <div className="mx-auto max-w-[84rem] px-5 py-24 md:px-10 lg:py-36">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Inview>
            <div className="max-w-2xl">
              <TechnicalLabel>Capabilities</TechnicalLabel>
              <h2 id="cap-heading" className="type-display-l mt-6">
                Five disciplines. One standard of&nbsp;quality.
              </h2>
            </div>
          </Inview>
          <Inview delay={150}>
            <ArrowLink href="/capabilities">All capabilities</ArrowLink>
          </Inview>
        </div>

        {/* the canonical expanding-row system */}
        <div className="mt-16 border-t border-line-strong">
          {capabilities.map((cap, i) => {
            const Glyph = capabilityGlyphs[cap.id];
            return (
              <Inview key={cap.id} delay={i * 70}>
                <Link
                  href={`/capabilities#${cap.id}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-6 border-b border-line py-7 transition-colors duration-200 hover:bg-surface sm:grid-cols-[3.5rem_1fr_1fr_auto] sm:gap-x-10 md:py-9"
                >
                  <span className="label-mono !text-[0.72rem] text-fg-faint transition-colors group-hover:text-accent">
                    {cap.index}
                  </span>
                  <span className="flex items-center gap-5 md:gap-7">
                    <Glyph className="hidden h-9 w-9 shrink-0 text-fg-faint transition-colors duration-200 group-hover:text-accent sm:block" />
                    <span className="type-display-m !text-[clamp(1.35rem,1.1rem+1.4vw,2.4rem)] font-semibold leading-none tracking-tight transition-colors duration-200 group-hover:text-accent">
                      {cap.name}
                    </span>
                  </span>
                  <span className="hidden text-sm text-fg-muted md:block">
                    {cap.tagline}
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
            );
          })}
        </div>

        <Inview delay={200}>
          <p className="label-mono mt-8 !text-[0.62rem] text-fg-faint">
            Fiber to full box build — engineered in-house, built to your print.
          </p>
        </Inview>
      </div>
    </section>
  );
}
