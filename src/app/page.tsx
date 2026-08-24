import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { WhatWeAre } from "@/components/home/what-we-are";
import { WhatWeConnect } from "@/components/home/what-we-connect";
import { WhatWeBuild } from "@/components/home/what-we-build";
import { EngineeredForComplex } from "@/components/home/engineered-for-complex";
import { CapabilitiesPreview } from "@/components/home/capabilities-preview";
import { EngineeringFlow } from "@/components/home/engineering-flow";
import { IndustriesSection } from "@/components/home/industries-section";
import { WhyClearEdge } from "@/components/home/why-clearedge";
import { SiliconValley } from "@/components/home/silicon-valley";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* 00 — arrival */}
      <Hero />
      {/* 01 — what we are */}
      <WhatWeAre />
      {/* 02 — what we connect */}
      <WhatWeConnect />
      {/* 03 — what we build */}
      <WhatWeBuild />
      {/* complexity thesis */}
      <EngineeredForComplex />
      {/* 04 — how we engineer */}
      <CapabilitiesPreview />
      <EngineeringFlow />
      {/* 05 — where it matters */}
      <IndustriesSection />
      {/* 06 — why trust us */}
      <WhyClearEdge />
      {/* 07 — where we are */}
      <SiliconValley />
      {/* 08 — contact */}
      <CTASection />
    </>
  );
}
