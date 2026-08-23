import Link from "next/link";
import { company } from "@/lib/site";
import { HeroConnector } from "@/components/graphics";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-deep" aria-labelledby="hero-heading">
      <div className="bp-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(120% 90% at 70% 10%, transparent 40%, rgba(7,9,11,0.9) 100%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[84rem] flex-col justify-end px-5 pb-0 pt-32 md:px-10 lg:pt-36">
        <div className="grid items-center gap-14 pb-16 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
          {/* copy */}
          <div>
            <p className="label-mono hero-rise flex items-center gap-4 text-fg-muted" style={{ ["--hero-delay" as string]: 120 }}>
              <span aria-hidden="true" className="inline-block h-[1px] w-10 bg-accent" />
              {company.name}
              <span aria-hidden="true" className="text-fg-faint">/</span>
              <span className="text-accent">San Jose, CA</span>
            </p>

            <h1 id="hero-heading" className="type-display-xl mt-8">
              <span className="hero-rise block" style={{ ["--hero-delay" as string]: 240 }}>
                Precision
              </span>
              <span className="hero-rise block" style={{ ["--hero-delay" as string]: 340 }}>
                connects{" "}
                <span className="relative inline-block whitespace-nowrap">
                  what&rsquo;s&nbsp;next.
                  <svg
                    className="hero-fade absolute -bottom-2 left-0 w-full text-accent"
                    viewBox="0 0 320 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                    style={{ ["--hero-delay" as string]: 700 }}
                    preserveAspectRatio="none"
                  >
                    <path d="M0 3 H130" opacity="0.35" />
                    <circle cx="140" cy="3" r="2" />
                    <path d="M152 3 H320" />
                  </svg>
                </span>
              </span>
            </h1>

            <p
              className="type-lede measure mt-9 max-w-xl text-fg-muted hero-rise"
              style={{ ["--hero-delay" as string]: 520 }}
            >
              ClearEdge Solutions designs and manufactures high performance fiber
              optic and copper cabling systems, and electro-mechanical assemblies
              for technology-driven industries.
            </p>

            <div
              className="mt-10 flex flex-wrap items-center gap-4 hero-rise"
              style={{ ["--hero-delay" as string]: 660 }}
            >
              <Link href="/capabilities" className="btn btn-primary">
                Explore Capabilities
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Request a Quote
              </Link>
            </div>
          </div>

          {/* technical plate */}
          <div
            className="hero-fade relative mx-auto hidden w-full max-w-xl sm:block lg:max-w-none"
            style={{ ["--hero-delay" as string]: 300 }}
          >
            <div className="reg-corners border border-line bg-bg/60 p-6 backdrop-blur-sm md:p-8">
              <div className="flex items-center justify-between pb-4 text-fg-faint">
                <span className="label-mono !text-[0.62rem]">FIG. 01</span>
                <span className="label-mono !text-[0.62rem]">CONNECTOR INTERFACE</span>
              </div>
              <div className="hero-svg">
                <HeroConnector className="w-full text-fg" />
              </div>
            </div>
            <p
              className="label-mono hero-fade mt-4 text-right !text-[0.62rem] text-fg-faint"
              style={{ ["--hero-delay" as string]: 1900 }}
            >
              ENGINEERED PATHWAYS · HIGH-DENSITY INTERCONNECT
            </p>
          </div>
        </div>

        {/* baseline strip */}
        <div
          className="hairline-t hero-fade relative"
          style={{ ["--hero-delay" as string]: 1000 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-5">
            <ul className="label-mono flex flex-wrap gap-x-8 gap-y-2 !text-[0.66rem] text-fg-muted">
              <li className="text-fg">Fiber Optic</li>
              <li>Copper</li>
              <li>Electro-Mechanical</li>
              <li className="hidden sm:list-item sm:text-fg-faint">Engineering</li>
              <li className="hidden sm:list-item sm:text-fg-faint">Contract Manufacturing</li>
            </ul>
            <a
              href="#what-we-connect"
              className="label-mono group flex items-center gap-3 !text-[0.66rem] text-fg-faint transition-colors hover:text-accent"
            >
              Scroll
              <span
                aria-hidden="true"
                className="inline-block h-6 w-[1px] bg-current transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
