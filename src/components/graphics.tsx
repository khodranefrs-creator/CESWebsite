import type { ComponentType, SVGProps } from "react";

/* Original technical line-art system for ClearEdge Solutions.
   All graphics are stroke-based, inherit currentColor, and support
   the shared draw-on animation primitives (hero-svg / data-draw). */

type G = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* ------------------------------------------------------------ brand */

export function EdgeMark(props: G) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...base} {...props}>
      <rect x="1.5" y="1.5" width="29" height="29" strokeWidth="1.5" />
      <polyline points="5,21 12.5,21 12.5,11 27,11" strokeWidth="2" pathLength={1} />
      <circle cx="12.5" cy="11" r="2.4" strokeWidth="1.5" />
    </svg>
  );
}

/* ------------------------------------------------------ hero drawing */

export function HeroConnector(props: G) {
  return (
    <svg
      viewBox="0 0 640 520"
      role="img"
      aria-label="Technical line drawing of a multi-fiber optic connector interface"
      {...base}
      {...props}
    >
      {/* incoming optical signal path */}
      <g className="text-accent" style={{ ["--draw-delay" as string]: 200 }}>
        <polyline
          points="8,262 92,262 112,246 138,246"
          strokeWidth="2"
          pathLength={1}
        />
        <circle cx="8" cy="262" r="3.5" strokeWidth="1.5" pathLength={1} />
      </g>

      {/* housing */}
      <g style={{ ["--draw-delay" as string]: 350 }}>
        <path
          d="M172 122 H458 L498 162 V358 L458 398 H172 L142 368 V152 Z"
          strokeWidth="1.5"
          pathLength={1}
        />
        <path
          d="M156 168 V352"
          strokeWidth="0.75"
          opacity="0.5"
          pathLength={1}
        />
      </g>

      {/* key */}
      <g style={{ ["--draw-delay" as string]: 650 }}>
        <path d="M303 122 V104 H337 V122" strokeWidth="1.5" pathLength={1} />
      </g>

      {/* latch hardware */}
      <g style={{ ["--draw-delay" as string]: 800 }}>
        <rect x="130" y="238" width="12" height="44" strokeWidth="1.25" pathLength={1} />
        <rect x="498" y="238" width="12" height="44" strokeWidth="1.25" pathLength={1} />
      </g>

      {/* ferrule */}
      <g style={{ ["--draw-delay" as string]: 950 }}>
        <rect x="206" y="212" width="228" height="96" strokeWidth="1.5" pathLength={1} />
        <line x1="206" y1="260" x2="434" y2="260" strokeWidth="0.75" opacity="0.5" pathLength={1} />
      </g>

      {/* fiber array — top row accent */}
      <g className="text-accent" style={{ ["--draw-delay" as string]: 1150 }}>
        {[236, 266, 296, 326, 356, 386].map((cx) => (
          <circle key={cx} cx={cx} cy="236" r="8.5" strokeWidth="1.5" pathLength={1} />
        ))}
      </g>
      <g style={{ ["--draw-delay" as string]: 1300 }}>
        {[236, 266, 296, 326, 356, 386].map((cx) => (
          <circle key={cx} cx={cx} cy="284" r="8.5" strokeWidth="1.5" pathLength={1} />
        ))}
      </g>

      {/* dimensioning */}
      <g opacity="0.65" style={{ ["--draw-delay" as string]: 1500 }}>
        <line x1="142" y1="440" x2="498" y2="440" strokeWidth="1" pathLength={1} />
        <line x1="142" y1="404" x2="142" y2="446" strokeWidth="0.75" pathLength={1} />
        <line x1="498" y1="404" x2="498" y2="446" strokeWidth="0.75" pathLength={1} />
        <polyline points="148,437 142,440 148,443" strokeWidth="1" pathLength={1} />
        <polyline points="492,437 498,440 492,443" strokeWidth="1" pathLength={1} />
      </g>
      <g className="hero-fade" opacity="0.75" style={{ ["--hero-delay" as string]: 1750 }}>
        <text
          x="320"
          y="464"
          textAnchor="middle"
          fill="currentColor"
          stroke="none"
          fontSize="11"
          letterSpacing="3"
          fontFamily="var(--font-mono)"
        >
          INTERFACE
        </text>
      </g>

      {/* registration crosses */}
      <g opacity="0.5" style={{ ["--draw-delay" as string]: 1650 }}>
        <path d="M84 96 v16 M76 104 h16" strokeWidth="1" pathLength={1} />
        <path d="M540 408 v16 M532 416 h16" strokeWidth="1" pathLength={1} />
      </g>

      {/* callouts */}
      <g className="hero-fade" opacity="0.85" style={{ ["--hero-delay" as string]: 1850 }}>
        <text x="206" y="196" fill="currentColor" stroke="none" fontSize="10" letterSpacing="2.5" fontFamily="var(--font-mono)">FIBER ARRAY</text>
        <text x="303" y="94" fill="currentColor" stroke="none" fontSize="10" letterSpacing="2.5" fontFamily="var(--font-mono)" textAnchor="middle">KEY</text>
        <text x="8" y="286" fill="var(--accent)" stroke="none" fontSize="10" letterSpacing="2.5" fontFamily="var(--font-mono)">SIGNAL PATH</text>
      </g>
    </svg>
  );
}

/* -------------------------------------------------- exploded assembly */

export function AssemblyDiagram(props: G) {
  return (
    <svg
      viewBox="0 0 720 430"
      role="img"
      aria-label="Exploded technical diagram of an engineered assembly coming together"
      {...base}
      {...props}
    >
      {/* alignment axis */}
      <g opacity="0.4">
        <line x1="360" y1="18" x2="360" y2="412" strokeWidth="0.75" strokeDasharray="4 7" pathLength={1} />
      </g>

      {/* cables */}
      <g className="assembly-layer text-accent" style={{ ["--scatter-x" as string]: "-60px", ["--scatter-y" as string]: "-110px", ["--layer-delay" as string]: 0 }}>
        <path d="M390 118 C 470 118, 520 96, 572 96 S 668 116, 706 108" strokeWidth="1.75" pathLength={1} />
        <path d="M390 126 C 480 126, 540 158, 592 158 S 676 146, 706 150" strokeWidth="1.75" pathLength={1} />
        <path d="M390 134 C 460 134, 500 208, 552 208 S 664 188, 706 194" strokeWidth="1.75" pathLength={1} />
      </g>

      {/* connector head */}
      <g className="assembly-layer" style={{ ["--scatter-x" as string]: "120px", ["--scatter-y" as string]: "40px", ["--layer-delay" as string]: 1 }}>
        <rect x="330" y="86" width="60" height="62" strokeWidth="1.5" pathLength={1} />
        <line x1="342" y1="86" x2="342" y2="148" strokeWidth="0.75" opacity="0.5" pathLength={1} />
        <line x1="378" y1="86" x2="378" y2="148" strokeWidth="0.75" opacity="0.5" pathLength={1} />
      </g>

      {/* board */}
      <g className="assembly-layer" style={{ ["--scatter-x" as string]: "80px", ["--scatter-y" as string]: "-100px", ["--layer-delay" as string]: 2 }}>
        <rect x="240" y="164" width="240" height="44" strokeWidth="1.5" pathLength={1} />
        <polyline points="256,186 292,186 306,172 340,172" strokeWidth="1" opacity="0.6" pathLength={1} />
        <polyline points="256,198 316,198 330,212 380,212" strokeWidth="1" opacity="0.6" pathLength={1} />
        <polyline points="424,172 452,172 464,184 464,200" strokeWidth="1" opacity="0.6" pathLength={1} />
        <rect x="352" y="176" width="18" height="12" strokeWidth="1" pathLength={1} />
        <rect x="408" y="192" width="12" height="8" strokeWidth="1" pathLength={1} />
      </g>

      {/* housing */}
      <g className="assembly-layer" style={{ ["--scatter-x" as string]: "-110px", ["--scatter-y" as string]: "-30px", ["--layer-delay" as string]: 3 }}>
        <rect x="204" y="222" width="312" height="102" strokeWidth="1.5" pathLength={1} />
        {[236, 252, 268, 284, 300].map((x) => (
          <line key={x} x1={x} y1="238" x2={x} y2="308" strokeWidth="0.75" opacity="0.35" pathLength={1} />
        ))}
        {[420, 436, 452, 468, 484, 500].map((x) => (
          <line key={x} x1={x} y1="238" x2={x} y2="308" strokeWidth="0.75" opacity="0.35" pathLength={1} />
        ))}
      </g>

      {/* base plate */}
      <g className="assembly-layer" style={{ ["--scatter-x" as string]: "0px", ["--scatter-y" as string]: "130px", ["--layer-delay" as string]: 4 }}>
        <rect x="160" y="338" width="400" height="34" strokeWidth="1.5" pathLength={1} />
        <line x1="160" y1="355" x2="560" y2="355" strokeWidth="0.75" opacity="0.4" pathLength={1} />
        <path d="M180 372 v10 M540 372 v10" strokeWidth="1.25" pathLength={1} />
      </g>

      {/* fasteners */}
      <g className="assembly-layer" style={{ ["--scatter-x" as string]: "60px", ["--scatter-y" as string]: "-140px", ["--layer-delay" as string]: 5 }}>
        <circle cx="178" cy="230" r="5" strokeWidth="1.25" pathLength={1} />
        <circle cx="542" cy="230" r="5" strokeWidth="1.25" pathLength={1} />
      </g>

      {/* datum targets */}
      <g opacity="0.55">
        <path d="M132 88 v14 M125 95 h14" strokeWidth="1" pathLength={1} />
        <path d="M576 356 v14 M569 363 h14" strokeWidth="1" pathLength={1} />
      </g>
    </svg>
  );
}

/* --------------------------------------------------------- divider */

export function PathDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`text-fg-faint ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1200 48" {...base} className="w-full h-12">
        <g>
          <line x1="0" y1="24" x2="512" y2="24" strokeWidth="1" pathLength={1} />
          <circle cx="540" cy="24" r="3" strokeWidth="1.25" pathLength={1} />
          <line x1="568" y1="24" x2="632" y2="24" strokeWidth="2" pathLength={1} />
          <circle cx="660" cy="24" r="3" strokeWidth="1.25" pathLength={1} />
          <line x1="688" y1="24" x2="1200" y2="24" strokeWidth="1" pathLength={1} />
          <line x1="300" y1="19" x2="300" y2="29" strokeWidth="1" pathLength={1} />
          <line x1="900" y1="19" x2="900" y2="29" strokeWidth="1" pathLength={1} />
        </g>
      </svg>
    </div>
  );
}

/* ----------------------------------------------- capability glyphs */

export function FiberGlyph(props: G) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...base} strokeWidth="2" {...props}>
      <rect x="44" y="20" width="14" height="24" strokeWidth="1.75" />
      <path d="M4 12 C 24 12, 30 25, 44 26" />
      <path d="M4 32 C 20 32, 28 32, 44 32" />
      <path d="M4 52 C 24 52, 30 39, 44 38" />
    </svg>
  );
}

export function CopperGlyph(props: G) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...base} strokeWidth="2" {...props}>
      <rect x="6" y="20" width="20" height="24" strokeWidth="1.75" />
      <circle cx="12.5" cy="28" r="2.5" strokeWidth="1.5" />
      <circle cx="19.5" cy="28" r="2.5" strokeWidth="1.5" />
      <circle cx="12.5" cy="36" r="2.5" strokeWidth="1.5" />
      <circle cx="19.5" cy="36" r="2.5" strokeWidth="1.5" />
      <path d="M26 26 H 42 M26 38 H 42" />
      <path d="M42 22 V 30 M42 34 V 42" />
    </svg>
  );
}

export function BoxBuildGlyph(props: G) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...base} strokeWidth="2" {...props}>
      <rect x="12" y="26" width="26" height="22" strokeWidth="1.75" />
      <path d="M38 26 L 52 16 V 38 L 38 48" />
      <path d="M12 26 L 26 16 H 52 L 38 26" />
      <line x1="17" y1="31" x2="27" y2="31" strokeWidth="1.5" />
      <circle cx="33" cy="42" r="1.75" strokeWidth="1.5" />
    </svg>
  );
}

export function EngineeringGlyph(props: G) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...base} strokeWidth="2" {...props}>
      <circle cx="32" cy="14" r="3.5" strokeWidth="1.75" />
      <path d="M30 17.5 L 20 50 M34 17.5 L 44 50" />
      <path d="M24 40 C 28 43, 36 43, 40 40" strokeWidth="1.5" />
      <line x1="10" y1="54" x2="54" y2="54" strokeWidth="1.75" />
      <path d="M16 51 v6 M24 52 v4 M32 51 v6 M40 52 v4 M48 51 v6" strokeWidth="1.25" />
    </svg>
  );
}

export function ContractGlyph(props: G) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...base} strokeWidth="2" {...props}>
      <path d="M10 10 h24 l6 6 v30 h-30 z" strokeWidth="1.75" />
      <path d="M34 10 v6 h6" strokeWidth="1.5" />
      <line x1="16" y1="24" x2="30" y2="24" strokeWidth="1.5" />
      <line x1="16" y1="31" x2="30" y2="31" strokeWidth="1.5" />
      <rect x="36" y="34" width="20" height="20" strokeWidth="1.75" />
      <circle cx="46" cy="44" r="3" strokeWidth="1.5" />
      <path d="M34 40 h-4 M34 48 h-4" strokeWidth="1" strokeDasharray="2 3" />
    </svg>
  );
}

export const capabilityGlyphs: Record<string, ComponentType<G>> = {
  "fiber-optic": FiberGlyph,
  "copper-cabling": CopperGlyph,
  "electro-mechanical": BoxBuildGlyph,
  engineering: EngineeringGlyph,
  "contract-manufacturing": ContractGlyph,
};

/* ------------------------------------------------- industry glyphs */

export function DataCenterGlyph(props: G) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...base} strokeWidth="2" {...props}>
      <rect x="18" y="8" width="28" height="48" strokeWidth="1.75" />
      <line x1="18" y1="20" x2="46" y2="20" strokeWidth="1.25" />
      <line x1="18" y1="32" x2="46" y2="32" strokeWidth="1.25" />
      <line x1="18" y1="44" x2="46" y2="44" strokeWidth="1.25" />
      <circle cx="41" cy="14" r="1.5" strokeWidth="1.25" />
      <circle cx="41" cy="26" r="1.5" strokeWidth="1.25" />
      <circle cx="41" cy="38" r="1.5" strokeWidth="1.25" />
      <circle cx="41" cy="50" r="1.5" strokeWidth="1.25" />
      <line x1="23" y1="14" x2="35" y2="14" strokeWidth="1.25" />
      <line x1="23" y1="26" x2="35" y2="26" strokeWidth="1.25" />
      <line x1="23" y1="38" x2="35" y2="38" strokeWidth="1.25" />
      <line x1="23" y1="50" x2="35" y2="50" strokeWidth="1.25" />
    </svg>
  );
}

export function SemiconductorGlyph(props: G) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...base} strokeWidth="2" {...props}>
      <rect x="16" y="16" width="32" height="32" strokeWidth="1.75" />
      <rect x="26" y="26" width="12" height="12" strokeWidth="1.5" />
      <line x1="16" y1="26" x2="26" y2="26" strokeWidth="1" />
      <line x1="16" y1="38" x2="26" y2="38" strokeWidth="1" />
      <line x1="38" y1="26" x2="48" y2="26" strokeWidth="1" />
      <line x1="38" y1="38" x2="48" y2="38" strokeWidth="1" />
      <line x1="26" y1="16" x2="26" y2="26" strokeWidth="1" />
      <line x1="38" y1="16" x2="38" y2="26" strokeWidth="1" />
      <line x1="26" y1="38" x2="26" y2="48" strokeWidth="1" />
      <line x1="38" y1="38" x2="38" y2="48" strokeWidth="1" />
    </svg>
  );
}

export function AutomotiveGlyph(props: G) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...base} strokeWidth="2" {...props}>
      <path d="M8 44 H 56" strokeWidth="1.75" />
      <path d="M14 44 L 20 32 L 28 24 H 40 L 48 32 L 52 44" strokeWidth="1.75" />
      <path d="M28 24 V 32 H 20 M28 32 H 48" strokeWidth="1.25" />
      <circle cx="24" cy="46" r="6" strokeWidth="1.75" />
      <circle cx="44" cy="46" r="6" strokeWidth="1.75" />
      <circle cx="24" cy="46" r="2" strokeWidth="1.25" />
      <circle cx="44" cy="46" r="2" strokeWidth="1.25" />
    </svg>
  );
}

export function CleanEnergyGlyph(props: G) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...base} strokeWidth="2" {...props}>
      <line x1="32" y1="56" x2="32" y2="30" strokeWidth="1.75" />
      <circle cx="32" cy="27" r="3" strokeWidth="1.75" />
      <line x1="32" y1="24" x2="32" y2="8" strokeWidth="1.75" />
      <line x1="29.5" y1="28.5" x2="15" y2="37" strokeWidth="1.75" />
      <line x1="34.5" y1="28.5" x2="49" y2="37" strokeWidth="1.75" />
      <line x1="12" y1="56" x2="52" y2="56" strokeWidth="1.75" />
      <path d="M18 51 v5 M46 51 v5" strokeWidth="1.25" />
    </svg>
  );
}

export const industryGlyphs: Record<string, ComponentType<G>> = {
  "data-centers": DataCenterGlyph,
  "semiconductor-equipment": SemiconductorGlyph,
  automotive: AutomotiveGlyph,
  "clean-energy": CleanEnergyGlyph,
};
