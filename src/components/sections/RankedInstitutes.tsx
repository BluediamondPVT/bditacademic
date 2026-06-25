'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import ChevronLeft from 'lucide-react/dist/esm/icons/chevron-left';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Images } from '../../assets';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface University {
  id: number;
  name: string;
  image: string;
}

const universities: University[] = [
  { id: 1, name: 'NMIMS University', image: '/images/universities/nmims.jpg' },
  { id: 2, name: 'Symbiosis International University', image: '/images/universities/symbiosis.png' },
  { id: 3, name: 'Asian International University', image: '/images/universities/asian.png' },
  { id: 4, name: 'Manipal University', image: '/images/universities/manipal.png' },
  { id: 5, name: 'Chandigarh University', image: '/images/universities/chandigarh.png' },
  { id: 6, name: 'Amity University', image: '/images/universities/amity.png' },
  { id: 7, name: 'D.Y. Patil University', image: '/images/universities/dy-patil.png' },
  { id: 8, name: 'Mangalayatan University', image: '/images/universities/mangalayatan.png' },
  { id: 9, name: 'Subharti University', image: '/images/universities/swami-vivkanand.png' },
];

export default function RankedInstitutes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ctx = gsap.context(() => {
              // Header entrance animation
              gsap.fromTo(
                '.ranked-title-block',
                { y: 30, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.8,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                  },
                }
              );

              // Slider cards stagger entry
              gsap.fromTo(
                '.swiper-slide',
                { y: 40, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.8,
                  stagger: 0.08,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: '.ranked-slider-trigger',
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
      className="py-16 md:py-24 bg-white font-sans overflow-hidden border-t border-slate-100 relative"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10 select-none">
        <Image
          src={Images.LagecyBg}
          alt="Legacy Background"
          fill
          className="object-cover object-center opacity-85"
          priority
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Heading Block */}
        <div className="ranked-title-block will-change-transform text-center max-w-3xl mx-auto mb-12 md:mb-16">
          {/* Badge */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-[#3B82F6]">
              Start Learning Today
            </div>
          </div>
          
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            Learn From Top Ranked Institutes & Universities
          </h2>
          <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Study with India's top UGC-recognised, NAAC-accredited universities providing flexible and globally accepted online UG & PG degree programs.
          </p>
        </div>

        {/* Swiper Slider Wrapper */}
        <div className="ranked-slider-trigger relative max-w-6xl mx-auto px-4 md:px-8">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={5}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              prevEl: '.swiper-button-prev-ranked',
              nextEl: '.swiper-button-next-ranked',
            }}
            breakpoints={{
              320: { slidesPerView: 1.8, spaceBetween: 16 },
              480: { slidesPerView: 2.3, spaceBetween: 16 },
              768: { slidesPerView: 3.5, spaceBetween: 20 },
              1024: { slidesPerView: 5, spaceBetween: 24 },
            }}
            className="py-4 px-1" // prevents clip of card hover shadow
          >
            {universities.map((uni) => (
              <SwiperSlide key={uni.id} className="py-2 will-change-transform">
                {/* University Logo Card with Hover highlight border/glow */}
                <div className="bg-white rounded-2xl border border-slate-150 p-2 flex items-center justify-center aspect-4/3 relative transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:border-[#406094] hover:scale-105 hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)] cursor-pointer group/card">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={uni.image}
                      alt={uni.name}
                      fill
                      sizes="(max-width: 640px) 120px, 180px"
                      className="object-contain p-1 filter contrast-[1.02] transition-transform duration-300 group-hover/card:scale-105"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons - Positioned Bottom Right side */}
          <div className="flex justify-end gap-3 mt-6 pr-1 z-10 relative">
            <button 
              className="swiper-button-prev-ranked w-10 h-10 md:w-11 md:h-11 rounded-full border border-slate-200 bg-white text-slate-600 flex items-center justify-center hover:bg-[#3B82F6] hover:text-white hover:border-[#3B82F6] transition-all duration-300 shadow-sm cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              className="swiper-button-next-ranked w-10 h-10 md:w-11 md:h-11 rounded-full border border-slate-200 bg-white text-slate-600 flex items-center justify-center hover:bg-[#3B82F6] hover:text-white hover:border-[#3B82F6] transition-all duration-300 shadow-sm cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}