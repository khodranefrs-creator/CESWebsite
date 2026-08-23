import Link from "next/link";
import type { ReactNode } from "react";
import { Inview } from "@/components/inview";

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

export function SectionIntro({
  eyebrow,
  title,
  lede,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  className?: string;
}) {
  return (
    <Inview className={className}>
      <div className="max-w-3xl">
        <TechnicalLabel>{eyebrow}</TechnicalLabel>
        <h2 className="type-display-m mt-6">{title}</h2>
        {lede ? (
          <p className="type-lede measure mt-6 text-fg-muted">{lede}</p>
        ) : null}
      </div>
    </Inview>
  );
}
