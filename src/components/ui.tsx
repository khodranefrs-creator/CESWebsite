import Link from "next/link";
import type { ReactNode } from "react";

/* Technical metadata label — the site's annotation voice.
   Anatomy is THE TRACE: conductor stub → live node → text.
   Used sparingly: one per section, never as decoration. */
export function TechnicalLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`label-mono flex items-center gap-3.5 text-accent ${className}`}>
      <span aria-hidden="true" className="relative inline-flex h-[7px] w-9 shrink-0">
        <span className="trace-line absolute inset-x-0 top-1/2 !h-[1.5px]" />
        <span className="trace-dot absolute right-0 top-1/2 -translate-y-1/2" />
      </span>
      {children}
    </p>
  );
}

export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`text-link ${className}`}>
      {children}
      <svg
        className="text-link-arrow"
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M0 5h12M8 1l4 4-4 4" />
      </svg>
    </Link>
  );
}

/* Section index — oversized quiet numeral anchoring editorial compositions */
export function SectionIndex({
  n,
  className = "",
}: {
  n: string;
  className?: string;
}) {
  return (
    <span aria-hidden="true" className={`type-index block ${className}`}>
      {n}
    </span>
  );
}
