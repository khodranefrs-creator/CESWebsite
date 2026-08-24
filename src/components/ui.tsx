import Link from "next/link";
import type { ReactNode } from "react";

/* Technical metadata label — the site's annotation voice.
   Used sparingly: one per section, never as decoration. */
export function TechnicalLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`label-mono flex items-center gap-3 text-accent ${className}`}>
      <span aria-hidden="true" className="inline-block h-[1px] w-8 bg-current" />
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
