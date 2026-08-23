import Link from "next/link";
import { Inview } from "@/components/inview";
import { company } from "@/lib/site";

export function CTASection() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-bg-deep text-fg" aria-labelledby="cta-heading">
      {/* converging signal lines */}
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 h-full w-full"
        viewBox="0 0 1200 420"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
      >
        <g opacity="0.16">
          <path d="M-40 40 C 300 60, 500 160, 600 210 S 900 340, 1240 320" strokeWidth="1" />
          <path d="M-40 140 C 280 150, 480 220, 600 250 S 920 330, 1240 300" strokeWidth="1" />
          <path d="M-40 260 C 260 270, 460 290, 600 300 S 940 320, 1240 280" strokeWidth="1" />
        </g>
        <g className="text-accent" opacity="0.55">
          <path d="M-40 190 C 270 200, 470 245, 600 275 S 930 325, 1240 290" strokeWidth="1.25" />
        </g>
      </svg>

      <div className="relative mx-auto max-w-[84rem] px-5 py-28 text-center md:px-10 lg:py-40">
        <Inview>
          <p className="label-mono text-accent">{company.shortName} — {company.slogan}</p>
          <h2 id="cta-heading" className="type-display-l mx-auto mt-8 max-w-4xl">
            Let&rsquo;s engineer your next&nbsp;connection.
          </h2>
          <p className="type-lede mx-auto mt-8 max-w-2xl text-fg-muted">
            Bring us your most demanding connectivity requirement. We&rsquo;ll
            bring the engineering to meet it.
          </p>
        </Inview>

        <Inview delay={160}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact#quote-form" className="btn btn-primary">
              Request a Quote
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contact Us
            </Link>
          </div>
        </Inview>
      </div>
    </section>
  );
}
