import Link from "next/link";
import { company, navItems, capabilities } from "@/lib/site";
import { BrandLogo } from "@/components/brand-logo";

export function SiteFooter() {
  return (
    <footer className="theme-light border-t border-line bg-bg-deep text-fg">
      {/* final connection line */}
      <div className="mx-auto max-w-[84rem] px-5 pt-14 md:px-10" aria-hidden="true">
        <svg viewBox="0 0 1200 24" fill="none" stroke="currentColor" className="h-6 w-full text-fg-faint" preserveAspectRatio="none">
          <line x1="0" y1="12" x2="1200" y2="12" strokeWidth="1" opacity="0.4" />
          <circle cx="600" cy="12" r="3.5" strokeWidth="1.25" />
        </svg>
      </div>

      <div className="mx-auto grid max-w-[84rem] gap-12 px-5 pb-12 pt-10 md:grid-cols-2 md:px-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" aria-label="ClearEdge Solutions — home" className="inline-flex">
            <BrandLogo sizes="(max-width: 767px) 96px, 108px" className="h-16 w-auto md:h-[4.5rem]" />
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-fg-muted">
            Designer and manufacturer of high performance fiber optic and copper
            cabling systems, and electro-mechanical assemblies.
          </p>
          <p className="label-mono mt-6 !tracking-[0.16em] text-accent">
            {company.shortName} — {company.slogan}
          </p>
        </div>

        <nav aria-label="Footer — site" className="max-lg:order-3">
          <h2 className="label-mono text-fg-faint">Navigate</h2>
          <ul className="mt-4 space-y-1 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block py-2 text-fg-muted transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer — capabilities" className="max-lg:order-4">
          <h2 className="label-mono text-fg-faint">Capabilities</h2>
          <ul className="mt-4 space-y-1 text-sm">
            {capabilities.map((cap) => (
              <li key={cap.id}>
                <Link
                  href={`/capabilities#${cap.id}`}
                  className="block py-2 text-fg-muted transition-colors hover:text-accent"
                >
                  {cap.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="max-lg:order-2">
          <h2 className="label-mono text-fg-faint">Contact</h2>
          <address className="mt-5 space-y-3 text-sm not-italic text-fg-muted">
            <p>
              {company.address.street}
              <br />
              {company.address.city}, {company.address.state} {company.address.zip}
              <br />
              {company.address.country}
            </p>
            <p>
              <a href={`tel:${company.phoneHref}`} className="transition-colors hover:text-accent">
                {company.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${company.email}`} className="transition-colors hover:text-accent">
                {company.email}
              </a>
            </p>
            <p>
              <a href={company.url} className="transition-colors hover:text-accent">
                www.ClearEdgeSolutions.com
              </a>
            </p>
          </address>
          <Link href="/contact" className="btn btn-primary mt-7 !py-3 !text-[0.72rem]">
            Request a Quote
          </Link>
        </div>
      </div>

      <div className="hairline-t">
        <div className="mx-auto flex max-w-[84rem] flex-col gap-3 px-5 py-6 text-xs text-fg-faint sm:flex-row sm:items-center sm:justify-between md:px-10">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-fg-muted">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-fg-muted">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
