'use client';

import { HeroSection } from "@/components/sections/HeroSection";
import dynamic from "next/dynamic";

const ProgramsSection = dynamic(() => import("@/components/sections/ProgramsSection").then((mod) => mod.ProgramsSection), {
  ssr: false,
  loading: () => <div className="min-h-[600px] md:min-h-[750px] bg-slate-50 w-full animate-pulse" />,
});
const ExpertsSection = dynamic(() => import("@/components/sections/ExpertsSection").then((mod) => mod.ExpertsSection), {
  ssr: false,
  loading: () => <div className="min-h-[400px] bg-white w-full animate-pulse" />,
});
const WhatWeOffer = dynamic(() => import("@/components/sections/WhatWeOffer"), {
  ssr: false,
  loading: () => <div className="min-h-[300px] bg-gray-100 w-full animate-pulse" />,
});
const RankedInstitutes = dynamic(() => import("@/components/sections/RankedInstitutes"), {
  ssr: false,
  loading: () => <div className="min-h-[400px] bg-white w-full animate-pulse" />,
});
const Blogs = dynamic(() => import("@/components/sections/Blogs").then((mod) => mod.Blogs), {
  ssr: false,
  loading: () => <div className="min-h-[400px] bg-gray-100 w-full animate-pulse" />,
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