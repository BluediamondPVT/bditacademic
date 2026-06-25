import { HeroSection } from "@/components/sections/HeroSection";
// Future imports
import {ProgramsSection}  from "@/components/sections/ProgramsSection";
import { ExpertsSection } from "@/components/sections/ExpertsSection";
import WhatWeOffer from "@/components/sections/WhatWeOffer";
import RankedInstitutes from "@/components/sections/RankedInstitutes";
// import { HowItWorksSection } from "@/components/sections/HowItWorksSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Banner */}
      <HeroSection />

      {/* 2. Programs Section (Aage banayenge) */}
      <ProgramsSection />

      {/* 3. Experts Section (Aage banayenge) */}
      <ExpertsSection />

      {/* 4. What We Offer Section */}
      <WhatWeOffer />
      
      <RankedInstitutes />
      {/* ... baki ke sections */}
    </div>
  );
}