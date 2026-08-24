import Link from "next/link";
import { company, navItems } from "@/lib/site";
import { BrandLogo } from "@/components/brand-logo";

export function SiteFooter() {
  return (
    <footer className="theme-light border-t border-line bg-bg-deep text-fg">
      <div className="mx-auto max-w-[84rem] px-5 pb-14 pt-16 md:px-10 md:pt-20">
        {/* closing statement */}
        <p className="font-display max-w-4xl text-[clamp(1.9rem,1.1rem+3vw,3.25rem)] font-semibold leading-[1.04] tracking-tight">
          Your Partner For Connectivity<span className="text-accent">.</span>
        </p>

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.5fr_1fr_1.25fr] lg:gap-20 lg:pt-2">
          {/* brand block */}
          <div>
            <Link href="/" aria-label="ClearEdge Solutions — home" className="inline-flex">
              <BrandLogo sizes="(max-width: 767px) 96px, 110px" className="h-16 w-auto md:h-[4.5rem]" />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-fg-muted">
              Designer and manufacturer of high performance fiber optic and
              copper cabling systems, and electro-mechanical assemblies.
            </p>
          </div>

          {/* index */}
          <nav aria-label="Footer">
            <h2 className="label-mono !text-[0.62rem] text-fg-faint">Index</h2>
            <ul className="mt-5 border-t border-line">
              {[{ href: "/", label: "Home", n: "00" }, ...navItems.map((item, i) => ({ ...item, n: String(i + 1).padStart(2, "0") }))].map(
                (item) => (
                  <li key={item.href} className="border-b border-line">
                    <Link
                      href={item.href}
                      className="group flex items-baseline gap-4 py-3"
                    >
                      <span className="label-mono !text-[0.62rem] text-fg-faint transition-colors group-hover:text-accent">
                        {item.n}
                      </span>
                      <span className="text-sm font-medium text-fg-muted transition-colors group-hover:text-accent">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          {/* direct lines */}
          <div>
            <h2 className="label-mono !text-[0.62rem] text-fg-faint">Direct lines</h2>
            <address className="mt-5 space-y-4 text-sm not-italic text-fg-muted">
              <p>
                {company.address.street}
                <br />
                {company.address.city}, {company.address.state} {company.address.zip}
                <br />
                {company.address.country}
              </p>
              <p className="flex flex-wrap gap-x-6 gap-y-2">
                <a href={`tel:${company.phoneHref}`} className="font-medium text-fg transition-colors hover:text-accent">
                  {company.phone}
                </a>
                <a href={`mailto:${company.email}`} className="font-medium text-fg transition-colors hover:text-accent">
                  {company.email}
                </a>
              </p>
            </address>
            <Link href="/contact#quote-form" className="btn btn-primary mt-8 !py-3 !text-[0.7rem]">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="hairline-t">
        <div className="mx-auto flex max-w-[84rem] flex-col gap-3 px-5 py-6 text-xs text-fg-faint sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="flex items-center gap-6">
            <span className="label-mono hidden !text-[0.6rem] md:inline" aria-hidden="true">
              37.35° N — 121.95° W · SILICON VALLEY
            </span>
            <span className="flex gap-6">
              <Link href="/privacy" className="transition-colors hover:text-fg-muted">Privacy Policy</Link>
              <Link href="/terms" className="transition-colors hover:text-fg-muted">Terms</Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
