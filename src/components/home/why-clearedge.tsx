import { Inview } from "@/components/inview";
import { TechnicalLabel, ArrowLink } from "@/components/ui";
import { differentiators } from "@/lib/site";

export function WhyClearEdge() {
  return (
    <section className="bg-bg-deep text-fg" aria-labelledby="why-heading">
      <div className="mx-auto max-w-[84rem] px-5 py-24 md:px-10 lg:py-36">
        <Inview>
          <TechnicalLabel>Why ClearEdge</TechnicalLabel>
          <h2 id="why-heading" className="type-giant mt-8 max-w-5xl">
            <span className="block">Precision isn&rsquo;t a feature.</span>
            <span className="mt-2 block text-accent">It&rsquo;s the standard.</span>
          </h2>
          <p className="type-lede measure-tight mt-12 text-fg-muted">
            The difference is in how we build — precision engineering and
            customer-focused design as the constants behind every ClearEdge
            build, from a single custom assembly to a full production program.
          </p>
        </Inview>

        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          {/* numbered differentiators — spec sheet, not cards */}
          <ol className="border-t border-line-strong sm:columns-1 lg:columns-2 lg:gap-16">
            {differentiators.map((item, i) => (
              <li key={item.term} className="break-inside-avoid">
                <Inview delay={(i % 5) * 60}>
                  <div className="hairline-t flex items-baseline gap-6 py-4">
                    <span className="label-mono shrink-0 !text-[0.62rem] text-fg-faint tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-[0.95rem] font-semibold tracking-tight">{item.term}</h3>
                      <p className="mt-0.5 text-sm text-fg-muted">{item.note}</p>
                    </div>
                  </div>
                </Inview>
              </li>
            ))}
          </ol>

          <Inview delay={160}>
            <figure className="reg-corners border border-line p-8 md:p-9">
              <blockquote>
                <p className="type-lede leading-relaxed text-fg-muted">
                  &ldquo;We partner with our customers to transform ideas into
                  reality — delivering trusted quality, responsive service, and
                  scalable solutions that grow with their needs.&rdquo;
                </p>
              </blockquote>
              <figcaption className="label-mono mt-6 !text-[0.62rem] text-fg-faint">
                Operating principle
              </figcaption>
            </figure>
            <ArrowLink href="/about" className="mt-9">
              Our philosophy
            </ArrowLink>
          </Inview>
        </div>
      </div>
    </section>
  );
}
