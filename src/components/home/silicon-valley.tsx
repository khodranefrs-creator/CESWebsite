import { Inview } from "@/components/inview";
import { company } from "@/lib/site";

export function SiliconValley() {
  return (
    <section
      className="theme-light relative border-t border-line bg-bg text-fg"
      aria-labelledby="sv-heading"
    >
      <div className="mx-auto max-w-[84rem] px-5 py-20 md:px-10 lg:py-28">
        {/* coordinates ruler */}
        <div aria-hidden="true" className="mb-12 hidden items-center gap-4 text-fg-faint md:flex">
          <span className="label-mono !text-[0.6rem]">37.35° N</span>
          <span className="tick-rule relative h-[1px] flex-1 bg-line-strong" />
          <span className="label-mono !text-[0.6rem]">121.95° W</span>
        </div>

        <div className="grid items-end gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <Inview>
            <p className="label-mono !text-[0.62rem] text-fg-faint">
              {company.shortName} · Operations
            </p>
            <h2 id="sv-heading" className="type-display-m mt-5">
              San Jose,&nbsp;California.
            </h2>
            <p className="type-body measure mt-6 text-fg-muted">
              Engineering and manufacturing stay under one roof in Silicon
              Valley — close to the industries we serve, so collaboration is
              faster, service is responsive, and builds keep up with your
              roadmaps.
            </p>
          </Inview>

          {/* drafting title block */}
          <Inview delay={160} className="reveal-scale">
            <div className="plate reg-corners p-7 md:p-8">
              <dl className="space-y-0 border-t border-line">
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
      </div>
    </section>
  );
}
