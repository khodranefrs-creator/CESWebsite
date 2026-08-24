import { Inview } from "@/components/inview";
import { TechnicalLabel } from "@/components/ui";
import { flowSteps } from "@/lib/site";

export function EngineeringFlow() {
  return (
    <section className="relative bg-bg-deep text-fg" aria-labelledby="flow-heading">
      <div className="mx-auto max-w-[84rem] px-5 py-24 md:px-10 lg:py-36">
        <Inview>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-2xl">
              <TechnicalLabel>Engineering to production</TechnicalLabel>
              <h2 id="flow-heading" className="type-display-l mt-6">
                Your requirements, carried all the way&nbsp;through.
              </h2>
            </div>
            <p className="label-mono !text-[0.62rem] text-fg-faint" aria-hidden="true">
              PROCESS DIAGRAM · CLEAREDGE ↔ CUSTOMER
            </p>
          </div>
        </Inview>

        <Inview variant="flow" threshold={0.3} className="relative mt-16 md:mt-24">
          {/* desktop connector */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[1px] hidden h-4 w-full text-accent md:block"
            viewBox="0 0 1000 16"
            preserveAspectRatio="none"
            fill="none"
            stroke="currentColor"
          >
            <path className="flow-path" d="M10 8 H 990" strokeWidth="2" pathLength={1} />
          </svg>

          <ol className="relative space-y-12 md:grid md:grid-cols-5 md:gap-x-8 md:space-y-0">
            {/* mobile rail */}
            <span
              aria-hidden="true"
              className="absolute bottom-3 left-[7px] top-3 w-[2px] bg-line md:hidden"
            />
            {flowSteps.map((step) => (
              <li key={step.id} className="flow-node relative pl-10 md:pl-0">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 flex h-4 w-4 items-center justify-center border border-line-strong bg-bg-deep md:relative md:left-0 md:mb-8 md:inline-flex"
                >
                  <span className="h-1.5 w-1.5 bg-accent" />
                </span>
                <p className="label-mono !text-[0.62rem] text-fg-faint">{step.step}</p>
                <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
                  {step.name}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-fg-muted">
                  {step.line}
                </p>
              </li>
            ))}
          </ol>
        </Inview>

        <p className="hairline-t mt-16 pt-6 text-sm leading-relaxed text-fg-faint lg:mt-20">
          Every engagement is shaped around your team&rsquo;s requirements — the
          sequence adapts to what your build actually needs.
        </p>
      </div>
    </section>
  );
}
