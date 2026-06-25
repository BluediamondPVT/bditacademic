'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import expertsData from '@/data/experts.json';

// Register ScrollTrigger client-side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Expert {
  id: number;
  name: string;
  position: string;
  image: string;
}

export function ExpertsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.expert-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.experts-grid',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="py-16 md:py-24 bg-white font-sans overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            Experts Who Guide Your <span className="text-[#3B82F6]">Online Academic</span> Journey
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            A dedicated team of academic advisors and professionals committed to guiding you at every step of your online education journey.
          </p>
        </div>

        {/* Experts Grid */}
        <div className="experts-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {expertsData.map((expert: Expert) => {
            const isActive = activeId === expert.id;
            
            return ( 
              <div
                key={expert.id}
                onClick={() => setActiveId(isActive ? null : expert.id)}
                onMouseEnter={() => setActiveId(expert.id)}
                onMouseLeave={() => setActiveId(null)}
                className="expert-card group relative aspect-3/4 rounded-2xl overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 ease-out select-none"
              >
                {/* Background State Layer */}
                <div 
                  className={`absolute inset-0 transition-all duration-500 ease-out ${
                    isActive 
                      ? 'bg-gradient-to-b from-[#60A5FA] to-[#2563EB]' 
                      : 'bg-neutral-600'
                  }`}
                />

                {/* Expert Image */}
                <div className="absolute inset-0 w-full h-full p-0.5 overflow-hidden">
                  <div className="relative w-full h-full overflow-hidden rounded-2xl">
                    <Image
                      src={expert.image}
                      alt={expert.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className={`object-cover object-center transition-all duration-500 ease-out origin-bottom ${
                        isActive 
                          ? 'grayscale-0 scale-105 brightness-105' 
                          : 'grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-105'
                      }`}
                    />
                  </div>
                </div>

                {/* Bottom Overlay Info Card */}
                <div 
                  className={`absolute bottom-0 left-0 right-0 bg-black py-4 px-3 text-center flex flex-col items-center justify-center transition-all duration-500 ease-out border-t border-white/10 z-10 ${
                    isActive 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-full opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100'
                  }`}
                >
                  <h3 className="text-sm md:text-base font-extrabold text-white tracking-wide uppercase leading-tight">
                    {expert.name}
                  </h3>
                  <p className="text-[10px] md:text-xs text-gray-300 mt-1 font-medium leading-normal">
                    {expert.position}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
