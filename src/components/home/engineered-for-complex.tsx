import { Inview } from "@/components/inview";
import { TechnicalLabel, ArrowLink } from "@/components/ui";
import { AssemblyDiagram } from "@/components/graphics";

const traits = [
  { k: "Builds", v: "Complex & customized" },
  { k: "Configurations", v: "Diverse product variants" },
  { k: "Volumes", v: "Smaller production runs" },
  { k: "Requirements", v: "Exact performance & design" },
];

export function EngineeredForComplex() {
  return (
    <section className="relative overflow-hidden bg-bg-deep text-fg" aria-labelledby="efc-heading">
      <div className="relative mx-auto grid max-w-[84rem] items-center gap-14 px-5 py-24 md:px-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:py-36">
        <div>
          <Inview>
            <TechnicalLabel>Engineered for the complex</TechnicalLabel>
            <h2 id="efc-heading" className="type-display-l mt-6">
              Where standard catalogues end, our work&nbsp;begins.
            </h2>
          </Inview>
          <Inview delay={140}>
            <p className="type-lede measure mt-8 text-fg-muted">
              ClearEdge is distinguished by its ability to deliver complex,
              customized builds with efficiency and precision — managing diverse
              product configurations and smaller production volumes, so each
              solution is engineered to meet exact performance and design
              requirements.
            </p>
          </Inview>

          {/* technical trait table */}
          <dl className="mt-10 border-t border-line-strong">
            {traits.map((t, i) => (
              <Inview key={t.k} delay={i * 90}>
                <div className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                  <dt className="label-mono !text-[0.62rem] text-fg-faint">{t.k}</dt>
                  <dd className="text-right text-sm font-medium leading-snug">{t.v}</dd>
                </div>
              </Inview>
            ))}
          </dl>

          <Inview delay={200}>
            <ArrowLink href="/about" className="mt-10">
              Inside ClearEdge
            </ArrowLink>
          </Inview>
        </div>

        {/* exploded assembly — bare drafting figure on the dark field */}
        <div>
          <Inview variant="assemble" threshold={0.45} className="reveal-scale">
            <figure className="reg-corners p-6 md:p-8">
              <figcaption className="flex items-center justify-between pb-5">
                <span className="label-mono !text-[0.62rem] text-fg-faint">FIG. 02</span>
                <span className="label-mono !text-[0.62rem] text-fg-faint">
                  CUSTOM BUILD — EXPLODED VIEW
                </span>
              </figcaption>
              <AssemblyDiagram className="w-full text-fg" />
              <p
                aria-hidden="true"
                className="label-mono mt-6 !text-[0.62rem] text-accent"
              >
                ▸ Components align to specification
              </p>
            </figure>
          </Inview>
        </div>
      </div>
    </section>
  );
}
