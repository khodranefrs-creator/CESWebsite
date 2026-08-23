# ClearEdge Solutions — Website

Competition build for **ClearEdge Solutions, Inc.** — a Silicon Valley designer
and manufacturer of high performance fiber optic and copper cabling systems and
electro-mechanical assemblies.

**Concept:** *Precision connects what's next.*

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS v4 (CSS-first tokens in `src/app/globals.css`)
- Zero runtime dependencies beyond React/Next — motion is CSS-driven,
  orchestrated by one small `IntersectionObserver` component
  (`src/components/inview.tsx`)
- Fonts: Inter + IBM Plex Mono via `next/font` (self-hosted at build)
- `sharp` for production image optimization

## Brand system

- **Official logo:** `src/assets/mainlogo.png` (supplied asset, never altered).
  Rendered exclusively through `src/components/brand-logo.tsx` using
  `next/image` static import (intrinsic 3:2 dimensions, responsive variants,
  zero layout shift). Touchpoints: desktop header, mobile header, mobile menu,
  footer.
- **Color balance:** white / off-white dominant, graphite engineering bands
  (hero, *Engineered for the Complex*, *Engineering to Production*, final CTA),
  and the official ClearEdge blue `#0092FC` — sampled from the logo — used as a
  controlled technical signal (labels, links, active states, line work, CTAs).
  On white surfaces, text-level blue uses the WCAG-safe deep variant `#0071C4`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Pages

| Route           | Purpose                                    |
| --------------- | ------------------------------------------ |
| `/`             | Competition homepage                       |
| `/about`        | Company background & philosophy            |
| `/capabilities` | Fiber, copper, box build, engineering, contract manufacturing |
| `/industries`   | Data centers, semiconductor, automotive, clean energy |
| `/contact`      | Request-a-quote form + direct contact info |
| `/privacy` `/terms` | Legal                                  |

## Approved product imagery

All interface visuals besides the official logo are original SVG technical
line art (`src/components/graphics.tsx`). If approved product photography is
supplied (e.g., from the approved MPO/MTP cable assembly reference), insert it
as follows:

1. Place the file in `public/` (e.g., `public/products/mpo-mtp.jpg`).
2. In `src/components/home/hero.tsx`, the framed panel containing
   `<HeroConnector … />` is the designated hero image slot — replace the
   `<HeroConnector>` element with `next/image` using that asset, keeping the
   surrounding frame/caption chrome.
3. On the Capabilities page, each capability card's glyph block is the
   equivalent slot per capability.

Do **not** present third-party product photos as ClearEdge products or imply
third-party relationships; keep captions generic (e.g., "MPO/MTP-style
connector interface").

## Contact form integration

The form currently validates input client-side and hands the inquiry to the
visitor's email client via `mailto:` (honest behavior — no fake "sent"
states). The integration point for a real backend is marked in
`src/components/contact-form.tsx` under `FRONTEND INTEGRATION POINT`.

## Content rules honored

All copy is derived from the supplied company material. No invented clients,
statistics, certifications (beyond the stated ISO certification), locations,
or claims.
