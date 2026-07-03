'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger client-side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Step {
  id: number;
  title: string;
  description: string;
  iconBg: string;
  icon: React.ReactNode;
}

export default function WhatWeOffer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in and scale up the collage images
      gsap.fromTo(
        '.collage-img-container',
        { scale: 0.95, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.collage-container',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Stagger steps entry
      gsap.fromTo(
        '.step-item-wrapper',
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.steps-container',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Floating card micro-animations
      gsap.to('.floating-card-1', {
        y: -6,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
      gsap.to('.floating-card-2', {
        y: 6,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.3
      });
      gsap.to('.floating-card-3', {
        y: -5,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.15
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Steps data mapping
  const steps: Step[] = [
    {
      id: 1,
      title: 'Registration',
      description: 'Register with your education and work details and pay the registration fee',
      iconBg: 'bg-[#EFF6FF]',
      icon: (
        <svg className="w-6 h-6 text-[#1E3A8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z" />
          <circle cx="16" cy="16" r="3" className="fill-[#EFF6FF] stroke-[#3B82F6]" strokeWidth="1.5" />
          <path d="M14.5 18a1.5 1.5 0 0 1 3 0" strokeLinecap="round" className="stroke-[#3B82F6]" strokeWidth="1.5" />
          <circle cx="16" cy="15" r="0.75" className="fill-[#3B82F6] stroke-[#3B82F6]" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Document Upload',
      description: 'Upload supporting documents on the admission portal',
      iconBg: 'bg-[#FFF7ED]',
      icon: (
        <svg className="w-6 h-6 text-[#7C2D12]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h1.52c.314 0 .62.113.86.32l2.08 1.8c.24.207.546.32.86.32H19.5a2.25 2.25 0 0 1 2.25 2.25v5.25a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25v-4.5Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75V11.25m0 0 2.25 2.25M12 11.25 9.75 13.5" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'University Verification',
      description: 'The university will verify your documents & eligibility',
      iconBg: 'bg-[#EFF6FF]',
      icon: (
        <svg className="w-6 h-6 text-[#1E3A8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z" />
          <circle cx="16" cy="16" r="3" className="fill-[#EFF6FF] stroke-[#3B82F6]" strokeWidth="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 16l1 1 2-2" className="stroke-[#3B82F6]" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Admission Fee Payment',
      description: 'After successful verification, pay your admission fee or avail of no-cost EMI',
      iconBg: 'bg-[#FFF7ED]',
      icon: (
        <svg className="w-6 h-6 text-[#7C2D12]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <rect x="4" y="6" width="16" height="10" rx="1.5" stroke="currentColor" />
          <line x1="4" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1.5" />
          <path d="M2 18h4.5c.6 0 1.2-.2 1.6-.6l3.4-3.4c.4-.4 1-.6 1.6-.6H19.5c.8 0 1.5.7 1.5 1.5v0c0 .8-.7 1.5-1.5 1.5H8.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Student Registration',
      description: 'Begin your learning journey with access to LMS',
      iconBg: 'bg-[#EFF6FF]',
      icon: (
        <svg className="w-6 h-6 text-[#1E3A8A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 12v5c0 2 2.7 3.5 6 3.5s6-1.5 6-3.5v-5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 21v-4.5m0 0 1.5 1.5M19 16.5l-1.5 1.5" strokeLinecap="round" strokeLinejoin="round" className="stroke-[#3B82F6]" />
        </svg>
      )
    },
  ];

  return (
    <section 
      ref={containerRef} 
      className="py-16 md:py-24 bg-white font-sans overflow-hidden border-t border-gray-100"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photo Collage */}
          <div className="lg:col-span-5 collage-container relative w-full max-w-[480px] h-[520px] sm:h-[580px] md:h-[620px] mx-auto mb-8 lg:mb-0">
            
            {/* Left Image (Blonde Woman) */}
            <div className="collage-img-container absolute left-0 top-[10%] w-[46%] h-[80%] rounded-[28px] overflow-hidden bg-[#9D174D] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] z-0">
              <Image
                src="/images/what-we-offer/blonde_woman.png"
                alt="Student registration representation"
                fill
                priority
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Top Right Image (Man) */}
            <div className="collage-img-container absolute right-0 top-0 w-[48%] h-[42%] rounded-[28px] overflow-hidden bg-[#EED9C4] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] z-0">
              <Image
                src="/images/what-we-offer/man_glasses.png"
                alt="Admission counselor guidance representation"
                fill
                priority
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Bottom Right Image (Redhead) */}
            <div className="collage-img-container absolute right-0 bottom-0 w-[48%] h-[53%] rounded-[28px] overflow-hidden bg-[#15803D] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] z-0">
              <Image
                src="/images/what-we-offer/redhead_tablet.png"
                alt="Student learning support representation"
                fill
                priority
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Floating Card 1: Red Heart */}
            <div className="floating-card-1 absolute left-[-16px] top-[26%] z-10 w-14 h-14 bg-white rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] flex items-center justify-center border border-gray-100/50 transition-transform duration-300 hover:scale-110">
              <svg className="w-7 h-7 text-[#EF4444] fill-[#EF4444]" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </div>

            {/* Floating Card 2: Monitor + Profile */}
            <div className="floating-card-2 absolute right-[-12px] top-[18%] z-10 w-14 h-14 bg-white rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] flex items-center justify-center border border-gray-100/50 transition-transform duration-300 hover:scale-110">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="13" rx="2" className="stroke-gray-800 fill-[#FFFBEB]" />
                <path d="M12 16v4M8 20h8" className="stroke-gray-800" strokeLinecap="round" strokeWidth="1.5" />
                <circle cx="12" cy="9" r="2.5" className="fill-amber-900 stroke-amber-900" strokeWidth="1" />
                <path d="M7.5 14.5c0-2 2-3 4.5-3s4.5 1 4.5 3" className="fill-amber-900 stroke-amber-900" strokeWidth="1" />
              </svg>
            </div>

            {/* Floating Card 3: Monitor + Heart */}
            <div className="floating-card-3 absolute left-[18%] bottom-[6%] z-10 w-14 h-14 bg-white rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] flex items-center justify-center border border-gray-100/50 transition-transform duration-300 hover:scale-110">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="3" width="20" height="13" rx="2" className="stroke-gray-800 fill-[#EFF6FF]" />
                <path d="M12 16v4M8 20h8" className="stroke-gray-800" strokeLinecap="round" strokeWidth="1.5" />
                <path d="M12 12.2c-.8-.7-1.8-1.5-1.8-2.5 0-.8.6-1.5 1.5-1.5.5 0 1 .3 1.3.7.3-.4.8-.7 1.3-.7.9 0 1.5.7 1.5 1.5 0 1-1 1.8-1.8 2.5l-1 1z" className="fill-red-500 stroke-red-500" strokeWidth="1" />
              </svg>
            </div>

          </div>

          {/* Right Column: Steps Information */}
          <div className="lg:col-span-7 steps-container lg:pl-4">
            
            {/* Badge Indicator */}
            <div className="inline-flex items-center px-4 py-1.5 bg-[#FFF2E6] text-[#E67E22] text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm mb-6">
              What We Offer
            </div> 

            {/* Section Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
              How Does It Work?
            </h2>
            
            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xl mb-10">
              Answer a few easy questions and find the perfect online university tailored to your needs—anytime, anywhere.
            </p>

            {/* Steps Vertical List */}
            <div className="space-y-6 md:space-y-8 mb-10">
              {steps.map((step) => (
                <div 
                  key={step.id} 
                  className="step-item-wrapper flex items-start gap-4 md:gap-5 group"
                >
                  {/* Step Icon Container */}
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0 ${step.iconBg} border border-transparent shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)]`}>
                    {step.icon}
                  </div>

                  {/* Step Text Content */}
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-[#3B82F6]">
                      {step.title}
                    </h3>
                    <p className="text-[12px] md:text-sm text-gray-500 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Get Started Button */}
            <div className="flex items-center w-fit bg-white border border-gray-200/80 rounded-xl p-1.5 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer hover:border-gray-300">
              <span className="text-[#1B3B36] font-bold text-sm sm:text-base px-5 select-none">
                View All Courses
              </span>
              <div className="bg-[#D66A23] group-hover:bg-[#c55d1c] text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200">
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}