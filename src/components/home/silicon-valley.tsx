import { Inview } from "@/components/inview";
import { TechnicalLabel } from "@/components/ui";
import { company } from "@/lib/site";

export function SiliconValley() {
  return (
    <section className="theme-light relative overflow-hidden bg-bg text-fg" aria-labelledby="sv-heading">
      <div className="bp-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[84rem] gap-14 px-5 py-24 md:px-10 lg:grid-cols-[1.3fr_1fr] lg:gap-20 lg:py-36">
        <div>
          <Inview>
            <TechnicalLabel>Silicon Valley</TechnicalLabel>
            <h2 id="sv-heading" className="type-display-l mt-6">
              Located where technology moves&nbsp;fastest.
            </h2>
          </Inview>
          <Inview delay={140}>
            <p className="type-lede measure mt-8 text-fg-muted">
              ClearEdge Solutions is located in the heart of Silicon Valley —
              where innovation sets the pace and precision manufacturing keeps
              it real.
            </p>
            <p className="type-body measure mt-5 max-w-xl text-fg-muted">
              Being close to the industries we serve means faster collaboration,
              responsive service, and solutions that keep up with the speed of
              your roadmaps.
            </p>
          </Inview>

          {/* coordinates rule */}
          <div aria-hidden="true" className="mt-12 hidden max-w-xl sm:block">
            <div className="flex items-center gap-4 text-fg-faint">
              <span className="label-mono !text-[0.6rem]">37.35° N</span>
              <span className="tick-rule relative h-[1px] flex-1 bg-line-strong" />
              <span className="label-mono !text-[0.6rem]">121.95° W</span>
            </div>
          </div>
        </div>

        {/* drafting title block */}
        <Inview delay={200}>
          <div className="reg-corners border border-line-strong bg-surface p-7 md:p-8">
            <p className="label-mono !text-[0.62rem] text-fg-faint">LOCATION BLOCK</p>
            <dl className="mt-6 space-y-0 border-t border-line">
              {[
                { k: "Organization", v: company.name },
                { k: "Street", v: company.address.street },
                { k: "City", v: `${company.address.city}, ${company.address.state} ${company.address.zip}` },
                { k: "Country", v: company.address.country },
                { k: "Region", v: "Silicon Valley" },
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
          </div>
        </Inview>
      </div>
    </section>
  );
}
