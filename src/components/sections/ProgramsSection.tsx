"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

import programsData from '@/data/programs.json';

const categories = [
  {
    id: "ug",
    tag: "Undergraduate",
    title: "Explore Our UG",
    subtitle: "Degree Programs",
    desc: "Start your career with our top-ranked Bachelor's degree programs recognized globally.",
    data: programsData.ug,
  },
  {
    id: "pg",
    tag: "Postgraduate",
    title: "Advance with PG",
    subtitle: "Degree Programs",
    desc: "Take your expertise to the next level with our specialized Master's degree programs.",
    data: programsData.pg,
  },
  {
    id: "diploma",
    tag: "Diploma",
    title: "Accelerated Diploma",
    subtitle: "Programs",
    desc: "Fast-track your skills with our industry-focused diploma and PG diploma courses.",
    data: programsData.diploma,
  }
];

export default function ScrollProgramsSection() {
  const pageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // 💻 DESKTOP ANIMATION
      mm.add("(min-width: 1024px)", () => {
        const sections = gsap.utils.toArray('.category-section') as HTMLElement[];

        sections.forEach((section) => {
          const leftText = section.querySelector('.left-text');
          const cards = section.querySelectorAll('.scroll-card');

          ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            pin: leftText,
            scrub: true,
          });

          cards.forEach((card, index) => {
            if (index === 0) return; 

            gsap.fromTo(
              card,
              { y: "100%" }, 
              {
                y: "0%",
                ease: "none",
                scrollTrigger: {
                  trigger: card,
                  start: "top 95%", 
                  end: "top 20%",
                  scrub: true,
                },
              }
            );
          });
        });
      });

      // 📱 MOBILE & TABLET ANIMATION
      mm.add("(max-width: 1023px)", () => {
        const cards = gsap.utils.toArray('.scroll-card') as HTMLElement[];
        
        cards.forEach((card) => {
          gsap.from(card, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          });
        });
      });

    }, pageRef);

    return () => ctx.revert(); 
  }, []);
  

  return (
    // YAHAN SE 'overflow-hidden' HATA DIYA HAI
    <div ref={pageRef} className="w-full bg-white font-sans">
      
      {categories.map((category) => (
        <section 
          key={category.id} 
          className="category-section relative w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row border-b border-gray-100 last:border-0"
        >
          
          {/* LEFT COLUMN: HERO THEMED CONTENT */}
          <div className="w-full lg:w-5/12 relative bg-white">
            <div className="left-text flex flex-col justify-center px-4 py-12 sm:p-10 lg:p-10 z-10 w-full min-h-auto lg:h-screen relative overflow-hidden lg:overflow-visible">
              
              <figure className="absolute top-8 left-4 lg:left-8 z-0">
                <svg className="fill-orange-200 opacity-80 w-6 h-6 sm:w-[29px] sm:h-[29px]" viewBox="0 0 29 29">
                  <path d="M29.004,14.502 C29.004,22.512 22.511,29.004 14.502,29.004 C6.492,29.004 -0.001,22.512 -0.001,14.502 C-0.001,6.492 6.492,-0.001 14.502,-0.001 C22.511,-0.001 29.004,6.492 29.004,14.502 Z"></path>
                </svg>
              </figure>

              <figure className="fill-emerald-400 absolute top-16 right-10 lg:left-1/2 z-0 hidden sm:block">
                <svg width="22px" height="21px">
                  <path d="M10.717,4.757 L14.440,-0.001 L14.215,6.023 L20.142,4.757 L16.076,9.228 L21.435,12.046 L15.430,12.873 L17.713,18.457 L12.579,15.252 L10.717,20.988 L8.856,15.252 L3.722,18.457 L6.005,12.873 L-0.000,12.046 L5.359,9.228 L1.292,4.757 L7.220,6.023 L6.995,-0.001 L10.717,4.757 Z"></path>
                </svg>
              </figure>

              <figure className="fill-yellow-400 absolute bottom-10 lg:bottom-32 right-4 lg:right-12 z-0">
                <svg width="32px" height="32px" className="sm:w-[42px] sm:h-[42px]">
                  <path d="M21.000,-0.001 L28.424,13.575 L41.999,20.999 L28.424,28.424 L21.000,41.998 L13.575,28.424 L-0.000,20.999 L13.575,13.575 L21.000,-0.001 Z"></path>
                </svg>
              </figure>

              <div className="relative z-10 text-center lg:text-left mt-4 lg:mt-0">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FBE6D5] bg-[#FDF8F3] shadow-xs text-xs font-bold text-[#D66A23] mb-4 md:mb-6 uppercase tracking-wider">
                  <span>🎓</span>
                  <span>{category.tag} Programs</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-[#0F2942] mb-4 sm:mb-6 tracking-tight leading-[1.2]">
                  {category.title}{' '}
                  <span className="italic text-[#E67E22] font-semibold font-serif block sm:inline mt-1 lg:mt-0">
                    {category.subtitle}
                  </span>
                </h2>
                
                <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 md:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed px-2 lg:px-0">
                  {category.desc}
                </p>

                <ul className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8 text-slate-700 font-medium text-sm px-2 lg:px-0">
                  <li className="flex items-center justify-center sm:justify-start gap-2">
                    <CheckCircle className="w-4 h-4 text-slate-800" /> Career Guidance
                  </li>
                  <li className="flex items-center justify-center sm:justify-start gap-2">
                    <CheckCircle className="w-4 h-4 text-slate-800" /> 100% Placement
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 px-4 lg:px-0">
                  <button className="flex items-center w-fit bg-white border border-gray-200/80 rounded-xl p-1.5 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer hover:border-gray-300">
                    <span className="text-[#1B3B36] font-bold text-sm sm:text-base px-5 select-none">
                      Apply Now
                    </span>
                    <div className="bg-[#D66A23] group-hover:bg-[#c55d1c] text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 shrink-0">
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </button>

                  {/* <button className="flex items-center gap-3 group w-full sm:w-auto justify-center bg-transparent border-none">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 shadow-sm shrink-0">
                      <Play className="w-4 h-4 text-blue-600 group-hover:text-white fill-current transition-colors" />
                    </div>
                    <span className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">Course Info</span>
                  </button> */}
                </div>
              </div>
            </div>
          </div>

{/* ==============================================
              RIGHT COLUMN: SCROLLABLE IMAGES
              ============================================== */}
          <div className="w-full lg:w-7/12 flex flex-col px-4 sm:px-8 lg:px-12 py-8 lg:pt-[10vh] lg:pb-[30vh] bg-slate-50 lg:bg-transparent">
            
            {/* Mobile ke liye 2-column Grid, Desktop ke liye Flex-col */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 lg:flex lg:flex-col lg:gap-0">
              {category.data.map((program, index) => (
                <div 
                  key={program.id} 
                  // {/* Aspect ratio set taaki mobile pe perfect square/rectangle lage */}
                  className="scroll-card h-auto aspect-square sm:aspect-[4/3] lg:h-[450px] w-full relative mb-2 sm:mb-6 lg:mb-16 rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm border border-gray-100 lg:shadow-[0_15px_30px_rgba(0,0,0,0.08)] lg:sticky lg:top-[20vh] bg-gray-200 group"
                  style={{ zIndex: index }}
                >
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 lg:group-hover:scale-105"
                  />
                  
                  {/* Halka sa dark gradient (bottom se top) taaki white text box pop kare */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* 👇 YAHAN HAI MAIN FIX: Text Box ko absolute bottom-0 kiya hai 👇 */}
                  <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3 bg-white/95 backdrop-blur-md lg:bottom-8 lg:left-8 lg:right-auto lg:rounded-2xl lg:shadow-xl lg:transform lg:translate-y-2 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500 lg:w-max lg:max-w-[85%] border-t lg:border-none border-gray-100">
                    
                    <p className="text-[#D66A23] text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs font-bold uppercase tracking-wider mb-0.5 lg:mb-1">
                      {program.type}
                    </p>
                    <h3 className="text-[10px] sm:text-[11px] md:text-sm lg:text-xl font-bold text-slate-900 truncate">
                      {program.title}
                    </h3>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>
      ))}

    </div>
  );
}