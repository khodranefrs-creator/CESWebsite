import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { Inview } from "@/components/inview";
import { TechnicalLabel, ArrowLink } from "@/components/ui";
import { CTASection } from "@/components/cta-section";
import { productFamilies, industries } from "@/lib/site";
import {
  FiberGlyph,
  CopperGlyph,
  BoxBuildGlyph,
} from "@/components/graphics";
import mtpTrunkAssembly from "@/assets/mtp-trunk-assembly.webp";

export const metadata: Metadata = {
  title: "Products",
  description:
    "ClearEdge Solutions product families — fiber optic cable assemblies, copper cable assemblies, and electro-mechanical box builds, engineered to your print in Silicon Valley.",
  alternates: { canonical: "/products" },
};

const familyGlyphs: Record<string, typeof FiberGlyph> = {
  "fiber-optic": FiberGlyph,
  "copper-cabling": CopperGlyph,
  "electro-mechanical": BoxBuildGlyph,
};

const figureCaptions: Record<string, string> = {
  "fiber-optic": "MULTI-FIBER TRUNK ASSEMBLY",
  "copper-cabling": "COPPER CABLE SYSTEMS",
  "electro-mechanical": "BOX BUILD INTEGRATION",
};

/* accent annotations close every ClearEdge drafting plate */
const plateAnnotations: Record<string, string> = {
  "fiber-optic": "REPRESENTATIVE MULTI-FIBER ASSEMBLY",
  "copper-cabling": "CONFIGURED TO YOUR REQUIREMENT",
  "electro-mechanical": "CONNECTIVITY INTEGRATED INTO COMPLETE SYSTEMS",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title={
          <>
            Connectivity products, built to your&nbsp;print.
          </>
        }
        lede="Three product families spanning the entire signal path — fiber optic, copper, and electro-mechanical assemblies, each engineered around your requirements rather than a fixed catalogue."
        meta="PRODUCT FAMILIES / 03"
      />

      {/* catalog index — scan all three families before the deep sections */}
      <section className="theme-light bg-bg text-fg" aria-label="Product family index">
        <div className="mx-auto max-w-[84rem] px-5 pt-12 md:px-10 lg:pt-16">
          <div className="grid gap-px border border-line bg-line md:grid-cols-3">
            {productFamilies.map((family) => (
              <a
                key={family.id}
                href={`#${family.id}`}
                className="group bg-bg p-6 transition-colors duration-200 hover:bg-surface md:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="label-mono !text-[0.62rem] text-fg-faint transition-colors group-hover:text-accent">
                    FAMILY {family.index}
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
                </div>
                <p className="type-title mt-4">{family.name}</p>
                <p className="mt-2 text-sm text-fg-muted">{family.tagline}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {productFamilies.map((family, i) => {
        const Glyph = familyGlyphs[family.id];
        const dark = i % 2 === 1;
        return (
          <section
            key={family.id}
            id={family.id}
            className={`scroll-mt-24 ${
              dark ? "bg-bg-deep text-fg" : "theme-light bg-bg text-fg"
            }`}
            aria-labelledby={`${family.id}-heading`}
          >
            <div className="mx-auto max-w-[84rem] px-5 py-16 md:px-10 lg:py-24">
              <Inview>
                <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
                  {/* content */}
                  <div className={i % 2 === 1 ? "" : "lg:order-2"}>
                    <p className="label-mono !text-[0.66rem] text-fg-faint">
                      PRODUCT FAMILY {family.index} /{" "}
                      {String(productFamilies.length).padStart(2, "0")}
                    </p>
                    <h2
                      id={`${family.id}-heading`}
                      className="type-display-m mt-4"
                    >
                      {family.name}
                    </h2>
                    <p className="label-mono mt-4 !tracking-[0.16em] text-accent">
                      {family.tagline}
                    </p>
                    <p className="type-body measure mt-6 text-fg-muted">
                      {family.description}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6">
                      <span className="label-mono !text-[0.6rem] text-fg-faint">
                        Applications
                      </span>
                      {family.applications.map((appId) => {
                        const ind = industries.find((x) => x.id === appId);
                        if (!ind) return null;
                        return (
                          <Link
                            key={appId}
                            href={`/industries#${ind.id}`}
                            className="text-sm text-fg-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                          >
                            {ind.name}
                          </Link>
                        );
                      })}
                    </div>

                    <ArrowLink
                      href={`/contact?capability=${family.id}#quote-form`}
                      className="mt-9"
                    >
                      Discuss this family
                    </ArrowLink>
                  </div>

                  {/* figure */}
                  <div className={i % 2 === 1 ? "" : "lg:order-1"}>
                    {family.id === "fiber-optic" ? (
                      <figure className="reg-corners border border-line bg-surface p-4 md:p-6">
                        <figcaption className="flex items-center justify-between pb-4">
                          <span className="label-mono !text-[0.62rem] text-fg-faint">
                            FIG. {family.index}
                          </span>
                          <span className="label-mono !text-[0.62rem] text-fg-faint">
                            {figureCaptions[family.id]}
                          </span>
                        </figcaption>
                        <Image
                          src={mtpTrunkAssembly}
                          alt="Multi-fiber trunk cable assembly with an aqua jacket and MPO-style connectors"
                          sizes="(max-width: 1024px) 100vw, 560px"
                          className="h-auto w-full object-contain"
                        />
                        <p
                          aria-hidden="true"
                          className="label-mono mt-4 !text-[0.62rem] text-accent"
                        >
                          ▸ {plateAnnotations[family.id]}
                        </p>
                      </figure>
                    ) : (
                      <figure className="reg-corners relative border border-line bg-surface p-10 md:p-14">
                        <figcaption className="flex items-center justify-between pb-8">
                          <span className="label-mono !text-[0.62rem] text-fg-faint">
                            FIG. {family.index}
                          </span>
                          <span className="label-mono !text-[0.62rem] text-fg-faint">
                            {figureCaptions[family.id]}
                          </span>
                        </figcaption>
                        <div className="flex aspect-[850/390] items-center justify-center">
                          <Glyph className="h-20 w-20 text-accent md:h-32 md:w-32" />
                        </div>
                        <p
                          aria-hidden="true"
                          className="label-mono mt-4 !text-[0.62rem] text-accent"
                        >
                          ▸ {plateAnnotations[family.id]}
                        </p>
                      </figure>
                    )}
                  </div>
                </div>
              </Inview>
            </div>
          </section>
        );
      })}

      {/* quality standard */}
      <section className="theme-light bg-bg text-fg" aria-labelledby="quality-heading">
        <div className="mx-auto max-w-[84rem] px-5 py-20 md:px-10 lg:py-28">
          <div className="grid items-center gap-10 border-t border-line pt-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Inview>
              <TechnicalLabel>Quality commitment</TechnicalLabel>
              <h2 id="quality-heading" className="type-display-m mt-6 max-w-xl">
                Built to demanding performance and quality&nbsp;standards.
              </h2>
              <p className="type-body measure-tight mt-6 text-fg-muted">
                Driven by engineering excellence and a customer first mindset,
                we deliver products that meet the most demanding performance
                and quality standards — from concept to production.
              </p>
            </Inview>
            <Inview delay={150}>
              <div className="reg-corners border border-line-strong p-8 md:p-10">
                <p className="label-mono !text-[0.62rem] text-fg-faint">
                  QUALITY STANDARD
                </p>
                <p className="mt-6 text-sm leading-relaxed text-fg-muted">
                  ISO certified manufacturing with strict quality standards
                  maintained throughout our processes.
                </p>
              </div>
            </Inview>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
