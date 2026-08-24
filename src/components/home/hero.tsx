import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/site";
import mtpTrunkAssembly from "@/assets/mtp-trunk-assembly.webp";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-deep text-fg" aria-labelledby="hero-heading">
      <div className="bp-grid absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-[84rem] px-5 pb-0 pt-28 md:px-10 md:pt-32">
        <div className="grid items-center gap-14 pb-14 lg:min-h-[88svh] lg:grid-cols-[1.12fr_1fr] lg:gap-16 lg:pb-16">
          {/* copy */}
          <div>
            <p
              className="label-mono hero-rise flex flex-wrap items-center gap-x-4 gap-y-2 text-fg-muted"
              style={{ ["--hero-delay" as string]: 120 }}
            >
              <span aria-hidden="true" className="inline-block h-[1px] w-10 bg-accent" />
              {company.name}
              <span aria-hidden="true" className="text-fg-faint">/</span>
              <span className="text-accent">San Jose, California</span>
            </p>

            <h1 id="hero-heading" className="type-giant mt-9">
              <span className="hero-rise block" style={{ ["--hero-delay" as string]: 240 }}>
                Engineered
              </span>
              <span className="hero-rise block" style={{ ["--hero-delay" as string]: 360 }}>
                to connect<span className="text-accent">.</span>
              </span>
            </h1>

            <p
              className="type-lede mt-9 max-w-xl text-fg-muted hero-rise"
              style={{ ["--hero-delay" as string]: 540 }}
            >
              ClearEdge Solutions designs and manufactures high performance fiber
              optic and copper cabling systems, and electro-mechanical assemblies
              for technology-driven industries.
            </p>

            <div
              className="mt-10 grid grid-cols-1 gap-4 hero-rise sm:flex sm:flex-wrap sm:items-center"
              style={{ ["--hero-delay" as string]: 680 }}
            >
              <Link href="/contact#quote-form" className="btn btn-primary">
                Request a Quote
              </Link>
              <Link href="/capabilities" className="btn btn-ghost">
                Explore Capabilities
              </Link>
            </div>
          </div>

          {/* engineering artifact — approved T&S photograph, treated as a figure */}
          <figure
            className="hero-fade relative mx-auto w-full max-w-md lg:max-w-none"
            style={{ ["--hero-delay" as string]: 320 }}
          >
            {/* conductor bridging statement and artifact */}
            <span
              aria-hidden="true"
              className="absolute top-1/2 hidden h-[1px] w-16 -translate-y-[2px] lg:-left-16 lg:block"
            >
              <span className="absolute inset-x-0 top-0 h-[1px] bg-line-strong" />
              <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent bg-bg-deep" />
            </span>
            <div className="plate reg-corners p-4 md:p-6">
              <figcaption className="plate-head !mb-0 !pb-4">
                <span className="label-mono !text-[0.62rem] text-fg-faint">FIG. 01</span>
                <span className="label-mono !text-[0.62rem] text-fg-faint">
                  MULTI-FIBER TRUNK ASSEMBLY
                </span>
              </figcaption>
              <div className="pt-4">
                <Image
                  src={mtpTrunkAssembly}
                  alt="Multi-fiber trunk cable assembly with an aqua jacket and MPO-style connectors"
                  priority
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="h-auto w-full object-contain"
                />
              </div>
              <p aria-hidden="true" className="plate-note">
                ▸ Representative multi-fiber assembly
              </p>
            </div>
            <p
              className="label-mono hero-fade mt-4 hidden text-right !text-[0.62rem] text-fg-faint sm:block"
              style={{ ["--hero-delay" as string]: 1500 }}
            >
              Engineered pathways · high-density interconnect
            </p>
          </figure>
        </div>

        {/* baseline strip */}
        <div
          className="hairline-t hero-fade relative"
          style={{ ["--hero-delay" as string]: 1000 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-5">
            <ul className="label-mono flex flex-wrap gap-x-8 gap-y-2 !text-[0.66rem] text-fg-muted">
              <li>
                <Link
                  href="/products#fiber-optic"
                  className="text-fg transition-colors hover:text-accent"
                >
                  Fiber Optic
                </Link>
              </li>
              <li>
                <Link
                  href="/products#copper-cabling"
                  className="text-fg transition-colors hover:text-accent"
                >
                  Copper
                </Link>
              </li>
              <li>
                <Link
                  href="/products#electro-mechanical"
                  className="text-fg transition-colors hover:text-accent"
                >
                  Electro-Mechanical
                </Link>
              </li>
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
