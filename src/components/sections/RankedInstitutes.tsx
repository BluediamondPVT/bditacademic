'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { GraduationCap, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  { id: 5, name: 'Amity University', image: '/images/universities/amity.png' },
  { id: 6, name: 'Chandigarh University', image: '/images/universities/chandigarh.png' },
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
              // Left column content stagger entrance animation
              gsap.fromTo(
                '.ranked-animate-item',
                { y: 30, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.8,
                  stagger: 0.12,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                  },
                }
              );

              // Grid cards stagger entrance animation
              gsap.fromTo(
                '.university-card',
                { y: 40, opacity: 0, scale: 0.96 },
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 0.8,
                  stagger: 0.06,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: '.university-grid-trigger',
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

  const handleGetInTouch = () => {
    const element = document.querySelector('.enquiry-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="py-16 md:py-24 bg-white font-sans overflow-hidden border-t border-slate-100 relative"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Call to Action */}
          <div className="lg:col-span-5 text-left flex flex-col items-start">
            
            {/* Pill Badge */}
            <div className="ranked-animate-item inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-100 bg-slate-50/50 shadow-sm mb-6 text-xs font-semibold text-slate-800">
              <GraduationCap className="w-4.5 h-4.5 text-[#E67E22]" />
              <span>Our Partners</span>
            </div>

            {/* Heading */}
            <h2 className="ranked-animate-item text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] mb-6 tracking-tight font-sans">
              Learn From Top Ranked <br />
              Institutes & <span className="italic text-[#E67E22] font-semibold font-serif">universities</span>
            </h2>

            {/* Description Paragraph */}
            <p className="ranked-animate-item text-xs md:text-sm text-gray-500 leading-relaxed max-w-md mb-8">
              Study with India's top UGC-recognised, NAAC-accredited universities providing flexible and globally accepted online UG & PG degree programs.
            </p>

            {/* Premium Button */}
            <button 
              onClick={handleGetInTouch}
              className="ranked-animate-item group flex items-center justify-between pl-6 pr-2 py-2 border border-slate-200 rounded-xl bg-white hover:border-[#E67E22] hover:shadow-[0_8px_30px_rgba(230,126,34,0.12)] transition-all duration-300 cursor-pointer"
            >
              <span className="font-bold text-slate-800 mr-5 text-sm group-hover:text-[#E67E22] transition-colors duration-300">
                Get In Touch
              </span>
              <div className="w-9 h-9 rounded-lg bg-[#E67E22] flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-4.5 h-4.5" />
              </div>
            </button>
          </div>

          {/* Right Column: 3x3 Logo Grid */}
          <div className="lg:col-span-7 w-full university-grid-trigger">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {universities.map((uni, idx) => {
                const isCenter = idx === 4; // 5th card (index 4) is the center card of the 3x3 grid
                return (
                  <div
                    key={uni.id}
                    className={`university-card flex items-center justify-center p-5 aspect-4/3 rounded-2xl border transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-pointer ${
                      isCenter
                        ? 'bg-[#E67E22] border-[#E67E22] text-white shadow-[0_12px_24px_rgba(230,126,34,0.25)]'
                        : 'bg-white border-slate-100 hover:border-slate-300 text-slate-850'
                    }`}
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={uni.image}
                        alt={uni.name}
                        fill
                        sizes="(max-width: 640px) 120px, 180px"
                        className={`object-contain p-2 transition-all duration-300 ${
                          isCenter ? 'brightness-0 invert scale-105' : 'contrast-[1.02]'
                        }`}
                        quality={85}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}