"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { GraduationCap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger client-side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Tumhara data
import teamData from "@/data/experts.json";

// Swiper CSS (Agar _app.tsx ya layout.tsx me nahi hai to yahan chahiye)
import 'swiper/css';
import 'swiper/css/free-mode';

export function ExpertsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ctx = gsap.context(() => {
              // Header Animation
              gsap.fromTo(
                '.experts-header',
                { y: 30, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.6,
                  ease: 'power2.out',
                  scrollTrigger: {
                    trigger: '.experts-header',
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                  },
                }
              );

              // Slider Animation
              gsap.fromTo(
                '.experts-slider',
                { y: 40, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.8,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: '.experts-slider',
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                  },
                }
              );
            }, containerRef);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-16 md:py-24 bg-[#FAF9F6] overflow-hidden font-sans border-t border-slate-100 relative"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="experts-header will-change-transform flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FBE6D5] bg-[#FDF8F3] shadow-xs text-xs font-bold text-[#D66A23] mb-4 uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Our Academic Mentors</span>
            </div>
            
            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F2942] mb-4 tracking-tight leading-tight">
              Meet the <span className="italic text-[#E67E22] font-semibold font-serif">Experts</span>
            </h2>
            
            {/* Description */}
            <p className="text-slate-600 text-sm md:text-base">
              The leaders and visionaries driving excellence in online education and student success.
            </p>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="experts-slider will-change-transform relative -mx-4 px-4 md:mx-0 md:px-0">
          <style>{`
            .experts-slider .swiper-wrapper {
              transition-timing-function: linear !important;
            }
          `}</style>
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={24}
            slidesPerView={1.2}
            grabCursor={true}
            loop={true}
            freeMode={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="pb-4"
          >
            {teamData.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="group relative w-full h-[320px] sm:h-[350px] lg:h-[420px] rounded-3xl overflow-hidden bg-amber-50/20 border border-slate-100 cursor-grab active:cursor-grabbing shadow-xs hover:shadow-lg transition-all duration-500">
                  
                  {/* Image with smooth zoom on hover */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Premium Dark Green/Forest Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123C35] via-[#123C35]/50 to-transparent opacity-85 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Text Content - Slides up slightly on hover */}
                  <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    
                    {/* Decorative accent line */}
                    <div className="w-8 h-1 bg-[#E67E22] rounded-full mb-3.5 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform -translate-x-4 group-hover:translate-x-0" />
                    
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-1 tracking-wide capitalize line-clamp-1">
                      {member.name.toLowerCase()}
                    </h3>
                    
                    <p className="text-orange-300 font-semibold text-xs sm:text-sm tracking-wider uppercase line-clamp-2">
                      {member.position}
                    </p>
                  </div>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}