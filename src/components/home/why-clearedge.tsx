import { Inview } from "@/components/inview";
import { TechnicalLabel, ArrowLink } from "@/components/ui";
import { differentiators } from "@/lib/site";

export function WhyClearEdge() {
  return (
    <section className="theme-light border-t border-line bg-bg text-fg" aria-labelledby="why-heading">
      <div className="mx-auto max-w-[84rem] px-5 py-24 md:px-10 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          <div>
            <Inview>
              <TechnicalLabel>Why ClearEdge</TechnicalLabel>
              <h2 id="why-heading" className="type-display-l mt-6">
                The difference is in how we&nbsp;build.
              </h2>
              <p className="type-body measure-tight mt-6 text-fg-muted">
                Precision engineering and customer-focused design are the
                constants behind every ClearEdge build — from a single custom
                assembly to a full production program.
              </p>
            </Inview>
            <Inview delay={140}>
              <blockquote className="mt-10 border-l-2 border-accent pl-6">
                <p className="type-lede leading-relaxed text-fg-muted">
                  &ldquo;We partner with our customers to transform ideas into
                  reality — delivering trusted quality, responsive service, and
                  scalable solutions that grow with their needs.&rdquo;
                </p>
              </blockquote>
              <ArrowLink href="/about" className="mt-10">
                Our philosophy
              </ArrowLink>
            </Inview>
          </div>

          {/* spec sheet */}
          <div>
            <dl className="grid sm:grid-cols-2">
              {differentiators.map((item, i) => (
                <Inview key={item.term} delay={(i % 2) * 80 + Math.floor(i / 2) * 40}>
                  <div className="group hairline-t flex h-full flex-col justify-between gap-4 border-line px-0 py-5 sm:px-6 sm:first:pl-0">
                    <dt className="text-[0.95rem] font-semibold tracking-tight transition-colors group-hover:text-accent">
                      {item.term}
                    </dt>
                    <dd className="text-sm text-fg-muted">{item.note}</dd>
                  </div>
                </Inview>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
