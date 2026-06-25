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
  image: string;
}

export default function WhatWeOffer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger steps entry
      gsap.fromTo(
        '.step-card-wrapper',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.steps-container',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps: Step[] = [
    {
      id: 1,
      title: 'Registration',
      description: 'Register with your education and work details and pay the registration fee',
      image: '/images/how-does-it-work/1.png',
    },
    {
      id: 2,
      title: 'Document Upload',
      description: 'Upload supporting documents on the admission portal',
      image: '/images/how-does-it-work/2.png',
    },
    {
      id: 3,
      title: 'University Verification',
      description: 'The university will verify your documents & eligibility',
      image: '/images/how-does-it-work/3.png',
    },
    {
      id: 4,
      title: 'Admission Fee Payment',
      description: 'After successful verification, pay your admission fee or avail of no-cost EMI',
      image: '/images/how-does-it-work/4.png',
    },
    {
      id: 5,
      title: 'Student Registration',
      description: 'Begin your learning journey with access to LMS',
      image: '/images/how-does-it-work/5.png',
    },
  ];

  return (
    <section 
      ref={containerRef} 
      className="py-6 md:py-12 bg-gray-100 font-sans overflow-hidden border-t border-gray-100"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Badge Indicator */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center px-5 py-1.5 bg-[#EFF6FF] text-[#3B82F6] text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
            What We Offer
          </div>
        </div> 

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24"> 
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
            <span className="text-[#3B82F6]">How</span> Does It Work?
          </h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Answer a few easy questions and find the perfect online university tailored to your needs—anytime, anywhere.
          </p>
        </div>

        {/* Timeline / Process Flow Container */}
        <div className="steps-container relative flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-4 max-w-6xl mx-auto px-4">
          
          {/* Desktop Connecting Dotted Line */}
          <div className="absolute top-[72px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-blue-200 -z-10 hidden lg:block" />

          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step Card Wrapper */}
              <div className="step-card-wrapper flex flex-col items-center text-center max-w-[220px] group">
                
                {/* Circle Container */}
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full flex items-center justify-center border border-dashed border-blue-300 bg-[#F8FAFC]/40 transition-all duration-500 group-hover:border-[#3B82F6] group-hover:scale-105 group-hover:bg-[#EFF6FF]/20 relative mb-5 md:mb-6">
                  
                  {/* Inner White Circle */}
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white shadow-[0_8px_30px_rgba(224,242,254,0.6)] border border-sky-100/50 flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_12px_35px_rgba(59,130,246,0.15)] group-hover:scale-105">
                    {/* PNG Icon */}
                    <div className="relative w-12 h-12 md:w-14 md:h-14">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-sm md:text-base font-bold text-[#0B5C9C] mb-2 transition-colors duration-300 group-hover:text-[#3B82F6]">
                  {step.title}
                </h3>
                <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed font-medium px-2">
                  {step.description}
                </p>
              </div>

              {/* Mobile Vertical Dotted Line Connector */}
              {index < steps.length - 1 && (
                <div className="w-[2px] h-8 border-l-2 border-dashed border-blue-200 lg:hidden my-1" />
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}