import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { WhatWeConnect } from "@/components/home/what-we-connect";
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
      <Hero />
      <WhatWeConnect />
      <EngineeredForComplex />
      <CapabilitiesPreview />
      <EngineeringFlow />
      <IndustriesSection />
      <WhyClearEdge />
      <SiliconValley />
      <CTASection />
    </>
  );
}
