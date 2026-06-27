'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import Clock from 'lucide-react/dist/esm/icons/clock';
import GraduationCap from 'lucide-react/dist/esm/icons/graduation-cap';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import programsData from '@/data/programs.json';

type TabType = 'ug' | 'pg' | 'diploma';

export function ProgramsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('ug');
  const [hoveredTab, setHoveredTab] = useState<TabType | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const tabs: { id: TabType; label: string }[] = [
    { id: 'ug', label: 'UG Programs' },
    { id: 'pg', label: 'PG Programs' },
    { id: 'diploma', label: 'Diploma' },
  ];

  return (
    <section ref={containerRef} className="py-10 md:py-15 bg-slate-50 font-sans overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-3 md:mb-6 tracking-tight">
            Explore Our <span className="text-[#3B82F6]">Online Degree</span> Programs
          </h2>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
            Pursue your online degree from India's top-ranked UGC-recognised, NAAC A++ accredited universities.
          </p>
        </div>

        {/* Animated Magnetic Tabs */}
        <div className="flex justify-center mb-10 md:mb-12">
          <div 
            className="inline-flex items-center p-1 md:p-1.5 bg-white border border-gray-200 rounded-full shadow-sm relative z-10"
            onMouseLeave={() => setHoveredTab(null)}
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const isHovered = hoveredTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  onMouseEnter={() => setHoveredTab(tab.id)}
                  className={cn(
                    "relative px-4 md:px-8 py-2 md:py-3 text-[11px] md:text-sm font-bold rounded-full transition-colors duration-300 outline-none",
                    isActive ? "text-white" : "text-gray-500 hover:text-[#1D4ED8]"
                  )}
                >
                  {/* Solid Active Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activeProgramTab"
                      className="absolute inset-0 bg-[#1D4ED8] rounded-full shadow-md -z-20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Sliding Magnetic Hover Pill */}
                  {isHovered && !isActive && (
                    <motion.div
                      layoutId="hoverProgramTab"
                      className="absolute inset-0 bg-blue-50/80 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

       {/* Swiper Slider Block */}
        {isInViewport ? (
          <div className="relative max-w-[1400px] mx-auto px-4 md:px-12 group min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Swiper
                  modules={[Navigation, Pagination, A11y, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation={{
                    prevEl: '.swiper-button-prev-custom',
                    nextEl: '.swiper-button-next-custom',
                  }}
                  pagination={{ clickable: true, dynamicBullets: false }}
                  autoplay={{ delay: 5000, disableOnInteraction: false }}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  className="pb-16 flex items-stretch"
                >
                  {programsData[activeTab].map((program) => (
                    <SwiperSlide key={program.id} className="h-auto">
                      {/* Premium Card UI with Equal Height Logic */}
                      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)] transition-all duration-300 hover:-translate-y-2 h-full flex flex-col group/card cursor-pointer">
                        
                        {/* Image Container */}
                        <div className="relative h-48 md:h-56 w-full overflow-hidden bg-gray-100 shrink-0">
                          <Image
                            src={program.image}
                            alt={program.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Card Content - flex-grow pushes button to the bottom */}
                        <div className="p-5 md:p-8 flex flex-col flex-grow">
                          {/* Type Badge */}
                          <div className="inline-flex px-2.5 py-1 bg-blue-50 text-[#3B82F6] text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-md mb-3 md:mb-4 self-start">
                            {program.type}
                          </div>

                          {/* Title */}
                          <h3 className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-3 md:mb-4 leading-snug line-clamp-2 min-h-[2.25rem] md:min-h-[3.25rem]">
                            {program.title}
                          </h3>

                          {/* Details List */}
                          <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                            <div className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-gray-600">
                              <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                              <span><strong>Duration:</strong> {program.duration}</span>
                            </div>
                            <div className="flex items-start gap-2 md:gap-3 text-xs md:text-sm text-gray-600">
                              <GraduationCap className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                              <span className="line-clamp-3"><strong>Eligibility:</strong> {program.eligibility}</span>
                            </div>
                          </div>

                          {/* New Liquid CTA Button aligned to bottom via mt-auto */}
                          <div className="mt-auto">
                            <Button className="group/btn relative overflow-hidden bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] text-white shadow-[0_4px_20px_rgba(59,130,246,0.4)] hover:shadow-[0_4px_30px_rgba(59,130,246,0.6)] rounded-xl w-full py-3.5 md:py-5 text-xs md:text-sm lg:text-base font-semibold transition-all duration-300 active:scale-95">
                              {/* Animated Liquid Overlay */}
                              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#1D4ED8] to-[#1E40AF] transition-all duration-500 ease-out -translate-x-full group-hover/btn:translate-x-0 z-0" />
                              
                              {/* Sliding Text Block with Minimal Arrow */}
                              <span className="relative z-10 flex items-center justify-center gap-2 transition-transform duration-300 group-hover/btn:scale-105">
                                Learn More
                                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1 transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth={2} />
                              </span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            </AnimatePresence>

            {/* Custom Swiper Navigation Buttons */}
            <button 
              className="swiper-button-prev-custom absolute top-1/2 left-2 lg:-left-6 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 lg:bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] lg:shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center text-gray-600 hover:text-[#3B82F6] hover:scale-105 lg:hover:scale-110 active:scale-95 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 disabled:opacity-0"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
            <button 
              className="swiper-button-next-custom absolute top-1/2 right-2 lg:-right-6 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 lg:bg-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] lg:shadow-[0_4px_20px_rgba(0,0,0,0.1)] flex items-center justify-center text-gray-600 hover:text-[#3B82F6] hover:scale-105 lg:hover:scale-110 active:scale-95 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 disabled:opacity-0"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </div>
        ) : (
          <div className="relative max-w-[1400px] mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[450px]">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-150 shadow-[0_4px_20px_rgba(0,0,0,0.02)] h-[450px] animate-pulse" />
            ))}
          </div>
        )}
      </div>

      {/* Global CSS override for Swiper Pagination dots */}
      <style dangerouslySetInnerHTML={{__html: `
        .swiper-pagination-bullet { background: #E2E8F0; opacity: 1; width: 8px; height: 8px; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .swiper-pagination-bullet-active { background: #1D4ED8; width: 22px; border-radius: 9999px; }
      `}} />
    </section>
  );
}