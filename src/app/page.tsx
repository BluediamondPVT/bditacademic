'use client';

import { ExpertsSection } from "@/components/sections/ExpertsSection";
import WhatWeOffer from "@/components/sections/WhatWeOffer";
import RankedInstitutes from "@/components/sections/RankedInstitutes";
import { Blogs } from "@/components/sections/Blogs";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/sections/HeroSection").then((mod) => mod.HeroSection), {
  ssr: false,
  loading: () => <div className="min-h-[90vh] bg-[#031B33] w-full" />,
});
const ProgramsSection = dynamic(() => import("@/components/sections/ProgramsSection").then((mod) => mod.ProgramsSection), {
  ssr: false,
  loading: () => <div className="min-h-[600px] md:min-h-[750px] bg-slate-50 w-full animate-pulse" />,
});
const EnquiryHome = dynamic(() => import("@/components/sections/EnquiryHome").then((mod) => mod.EnquiryHome), {
  ssr: false,
  loading: () => <div className="min-h-[550px] md:min-h-[750px] bg-[#F4F7F9] w-full animate-pulse" />,
});

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

      {/* 5. Ranked Institutes Section  */}
      <RankedInstitutes />

      {/* 6. Blogs Section  */}
      <Blogs />
      
      {/* 7. Enquiry Home Section */}
      <EnquiryHome />
    </div>
  );
}