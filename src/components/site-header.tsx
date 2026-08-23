"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { company, navItems } from "@/lib/site";
import { BrandLogo } from "@/components/brand-logo";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = Array.from(
          panelRef.current.querySelectorAll<HTMLElement>("a[href], button"),
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeAndReturnFocus = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  return (
    <>
      <a
        href="#main"
        className="btn btn-primary sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
      >
        Skip to content
      </a>

      {/* Solid light bar: correct surface for the official logo and for
          legibility over every section environment. */}
      <header className="site-header theme-light fixed inset-x-0 top-0 z-50 bg-surface">
        <div className="mx-auto flex h-16 max-w-[84rem] items-center justify-between px-5 md:h-[4.5rem] md:px-10">
          <Link
            href="/"
            className="flex shrink-0 items-center transition-opacity duration-200 hover:opacity-80"
            aria-label="ClearEdge Solutions — home"
          >
            <BrandLogo priority sizes="(max-width: 767px) 60px, 72px" className="h-10 w-auto md:h-12" />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {navItems.map((item) => {
                const active = pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`label-mono py-2 transition-colors duration-150 hover:text-accent ${
                        active ? "text-accent" : "text-fg-muted"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="btn btn-primary hidden md:inline-flex !py-3 !text-[0.72rem]"
            >
              Request a Quote
            </Link>
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center border border-line-strong text-fg transition-colors hover:border-accent hover:text-accent lg:hidden"
            >
              <span className="sr-only">Open menu</span>
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M0 1h20M0 7h20M0 13h13" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* mobile navigation */}
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
        className="theme-light fixed inset-0 z-[60] flex flex-col bg-bg"
      >
        <div className="flex h-16 items-center justify-between px-5 hairline-b md:px-10">
          <Link
            href="/"
            onClick={closeAndReturnFocus}
            className="flex shrink-0 items-center"
            aria-label="ClearEdge Solutions — home"
          >
            <BrandLogo priority sizes="(max-width: 639px) 54px, 60px" className="h-9 w-auto sm:h-10" />
          </Link>
          <button
            type="button"
            onClick={closeAndReturnFocus}
            className="flex h-11 w-11 items-center justify-center border border-line-strong text-fg transition-colors hover:border-accent hover:text-accent"
          >
            <span className="sr-only">Close menu</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M1 1l14 14M15 1L1 15" />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile" className="flex flex-1 flex-col overflow-y-auto px-5 pb-10 pt-6 md:px-10">
          <ul className="flex flex-col">
            {navItems.map((item, i) => (
              <li key={item.href} className="hairline-b">
                <Link
                  href={item.href}
                  className="group flex items-baseline justify-between py-5"
                  style={{ ["--reveal-delay" as string]: i * 40 }}
                >
                  <span className="type-display-m group-hover:text-accent transition-colors">
                    {item.label}
                  </span>
                  <span className="label-mono text-fg-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="btn btn-primary mt-8 w-full">
            Request a Quote
          </Link>

          <div className="mt-10 space-y-2 text-sm text-fg-muted">
            <p>{company.address.street}, {company.address.city}, {company.address.state} {company.address.zip}</p>
            <p>
              <a className="hover:text-accent" href={`tel:${company.phoneHref}`}>{company.phone}</a>
              {" · "}
              <a className="hover:text-accent" href={`mailto:${company.email}`}>{company.email}</a>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
