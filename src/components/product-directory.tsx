import Link from "next/link";
import { productFamilies } from "@/lib/site";

/* The product directory — a dense, scalable catalog grid.
   One cell per family; scales to N without redesign. */
export function ProductDirectory() {
  return (
    <ol className="grid gap-px border border-line bg-line sm:grid-cols-3">
      {productFamilies.map((family) => (
        <li key={family.id}>
          <Link
            href={family.href}
            aria-label={`${family.name} — view family`}
            className="group flex h-full flex-col justify-between gap-10 bg-bg p-6 transition-colors duration-200 hover:bg-surface md:p-7"
          >
            <span className="flex items-center justify-between">
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
            </span>
            <span>
              <span className="type-title block transition-colors duration-200 group-hover:text-accent">
                {family.shortName ?? family.name}
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-fg-muted">
                {family.tagline}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ol>
  );
}
