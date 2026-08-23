"use client";

import Link from "next/link";
import { useState } from "react";
import { industries } from "@/lib/site";
import { industryGlyphs } from "@/components/graphics";

export function IndustrySelector() {
  const [openId, setOpenId] = useState<string>(industries[0].id);

  return (
    <div className="border-t border-line-strong">
      {industries.map((industry) => {
        const open = openId === industry.id;
        const Glyph = industryGlyphs[industry.id];
        const panelId = `industry-panel-${industry.id}`;
        return (
          <div
            key={industry.id}
            className="industry-row border-b border-line-strong"
            data-open={open}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpenId(open ? "" : industry.id)}
                aria-expanded={open}
                aria-controls={panelId}
                className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-x-5 py-7 text-left transition-colors duration-200 hover:bg-surface sm:grid-cols-[3.5rem_auto_1fr_auto] sm:gap-x-8"
              >
                <span
                  className={`label-mono !text-[0.72rem] transition-colors ${
                    open ? "text-accent" : "text-fg-faint group-hover:text-accent"
                  }`}
                >
                  {industry.index}
                </span>
                <Glyph
                  className={`hidden h-9 w-9 shrink-0 transition-colors sm:block ${
                    open ? "text-accent" : "text-fg-faint group-hover:text-fg"
                  }`}
                />
                <span
                  className={`type-display-m !text-[clamp(1.4rem,1.15rem+1.6vw,2.6rem)] font-semibold leading-none tracking-tight transition-colors ${
                    open ? "text-fg" : "text-fg-muted group-hover:text-fg"
                  }`}
                >
                  {industry.name}
                </span>
                <span
                  aria-hidden="true"
                  className={`relative flex h-8 w-8 items-center justify-center border transition-colors ${
                    open
                      ? "border-accent text-accent"
                      : "border-line-strong text-fg-muted group-hover:border-fg"
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d={open ? "M2 6h8" : "M6 2v8M2 6h8"} />
                  </svg>
                </span>
              </button>
            </h3>

            <div className="industry-body" id={panelId} role="region" aria-label={industry.name}>
              <div>
                <div className="grid gap-5 pb-8 pl-0 pr-4 sm:pl-[calc(3.5rem+2rem)] sm:pr-16">
                  <p className="type-lede max-w-xl text-fg-muted">{industry.line}</p>
                  <Link
                    href={`/industries#${industry.id}`}
                    className="text-link w-fit"
                  >
                    Serving this industry
                    <svg className="text-link-arrow" width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <path d="M0 5h12M8 1l4 4-4 4" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
