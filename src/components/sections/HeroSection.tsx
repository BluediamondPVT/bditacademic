'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import { Send, RefreshCcw, GraduationCap, ChevronDown } from "lucide-react";
import { Images } from "@/assets";
import { Button } from "@/components/ui/button";
import gsap from 'gsap';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Captcha and Form States
  const [captchaCode, setCaptchaCode] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNo: '',
    program: ''
  });

  // 1. Function to generate random 5-character alphanumeric captcha
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(result);
    setCaptchaInput(''); // Reset captcha input field
  };

  // Run on mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  // 2. GSAP Entrance Animations Setup
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Stagger text and pills animation
      gsap.fromTo(".hero-element", 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", delay: 0.2 }
      );

      // Form layout entry animation
      gsap.fromTo(formRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.6 }
      );
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  // 3. Form submission handling with captcha verification
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (captchaInput.trim().toUpperCase() !== captchaCode) {
      alert('❌ Invalid Captcha Code! Please try again.');
      generateCaptcha(); // Force refresh captcha on wrong attempt
      return;
    }

    alert(`🎉 Success! Request submitted for ${formData.fullName}`);
    console.log('Form Data:', { ...formData, captchaCode });
    
    // Clear Form on Success
    setFormData({ fullName: '', phoneNo: '', program: '' });
    generateCaptcha();
  };

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden pb-16 pt-32 lg:pt-40">
      
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={Images.HeroBanner}
          alt="Students learning online"
          fill
          priority
          className="object-cover object-center scale-105" 
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031B33]/95 via-[#0A3D66]/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left Text Column */}
        <div className="text-white max-w-2xl">
          {/* Modern Pill Badge */}
          <div className="hero-element inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-blue-400/30 bg-blue-500/20 backdrop-blur-md mb-4 md:mb-6">
            <GraduationCap className="w-4 h-4 text-cyan-300" />
            <span className="text-xs md:text-sm font-semibold tracking-wide text-cyan-100 uppercase">
              Welcome To BDIT Academic
            </span>
          </div>
          
          <h1 className="hero-element text-3xl md:text-5xl lg:text-7xl font-extrabold leading-[1.15] md:leading-[1.1] mb-4 md:mb-6 tracking-tight">
            Elevate Your Career with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Top Universities</span>
          </h1>
          
          <p className="hero-element text-sm md:text-lg text-gray-200 mb-6 md:mb-10 leading-relaxed max-w-xl font-light">
            Upgrade your qualification with UGC Recognised, flexible and affordable online degrees designed for today's fast-growing professional world.
          </p>
          
          <div className="hero-element flex flex-col sm:flex-row gap-4 font-sans">
            {/* Primary Button: Liquid Fill & Glow Wave */}
            <Button className="group relative overflow-hidden bg-linear-to-r from-[#3B82F6] to-[#1D4ED8] text-white shadow-[0_4px_20px_rgba(59,130,246,0.4)] hover:shadow-[0_4px_30px_rgba(59,130,246,0.6)] rounded-tr-none rounded-bl-none w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-5 text-sm md:text-base font-semibold transition-all duration-300 active:scale-95">
              {/* Animated Liquid Overlay */}
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-[#1D4ED8] to-[#1E40AF] transition-all duration-500 ease-out -translate-x-full group-hover:translate-x-0 z-0" />
              
              {/* Sliding Text Block */}
              <span className="relative z-10 flex items-center justify-center gap-2 transition-transform duration-300 group-hover:scale-105">
                Free Video Consultation
              </span>
            </Button>

            {/* Secondary Button: Clean Glassmorphic Fill Shift */}
            <Button 
              variant="outline" 
              className="group relative overflow-hidden bg-white/5 text-white border border-white/20 backdrop-blur-md rounded-tr-none rounded-bl-none w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-5 text-sm md:text-base font-semibold transition-all duration-300 active:scale-95 hover:border-white/50"
            >
              {/* Bottom up reveal effect */}
              <span className="absolute inset-0 w-full h-full bg-white transition-all duration-300 ease-out translate-y-full group-hover:translate-y-0 z-0" />
              
              {/* Text color switch on hover */}
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#031B33] w-full text-center">
                Request a Call
              </span>
            </Button>
          </div>
        </div>

        {/* Right Form Column - Premium Glassmorphism UI */}
        <div 
          ref={formRef} 
          className="w-full max-w-md mx-auto lg:ml-auto bg-white/95 backdrop-blur-xl border border-white/40 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] p-5 md:p-8 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 rounded-full blur-[60px] opacity-10 pointer-events-none" />

          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight">
            Speak With Our <span className="text-[#3B82F6]">Experts</span>
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 relative z-10 font-sans">
            
            {/* Full Name Field */}
            <div className="relative">
              <label className="absolute -top-2 left-4 bg-transparent px-1 text-xs font-bold text-gray-500 z-10 before:absolute before:inset-0 before:bg-white before:-z-10 before:rounded-sm">
                Full Name
              </label>
              <input 
                type="text" 
                required
                placeholder="Enter Full Name" 
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full border-2 border-gray-100 bg-white/50 rounded-xl px-4 py-3 md:px-5 md:py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all shadow-sm"
              />
            </div>

            {/* Phone Number Field */}
            <div className="relative">
              <label className="absolute -top-2 left-4 bg-transparent px-1 text-xs font-bold text-gray-500 z-10 before:absolute before:inset-0 before:bg-white before:-z-10 before:rounded-sm">
                Phone No.
              </label>
              <input 
                type="tel" 
                required
                placeholder="Enter Phone Number" 
                value={formData.phoneNo}
                onChange={(e) => setFormData({ ...formData, phoneNo: e.target.value })}
                className="w-full border-2 border-gray-100 bg-white/50 rounded-xl px-4 py-3 md:px-5 md:py-3.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all shadow-sm"
              />
            </div>

            {/* Select Program Dropdown with Custom Arrow */}
            <div className="relative">
              <label className="absolute -top-2 left-4 bg-transparent px-1 text-xs font-bold text-gray-500 z-10 before:absolute before:inset-0 before:bg-white before:-z-10 before:rounded-sm">
                Select Program
              </label>
              <div className="relative">
                <select 
                  required
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full border-2 border-gray-100 bg-white/50 rounded-xl px-4 py-3 md:px-5 md:py-3.5 text-sm text-gray-800 focus:outline-none focus:border-[#3B82F6] focus:ring-4 focus:ring-blue-500/10 focus:bg-white transition-all appearance-none cursor-pointer shadow-sm pr-12"
                >
                  <option value="" disabled>-- Choose a Degree --</option>
                  <option value="Online-UG-Program">Online UG Program</option>
                  <option value="Online-PG-Program">Online PG Program</option>
                  <option value="Online-Diploma-Program">Online Diploma Program</option>
                  <option value="Other-Programs">Other Programs</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Functional Captcha Architecture */}
            <div className="bg-gray-50/80 rounded-xl p-3 md:p-4 border border-gray-100/80 shadow-inner">
              <div className="flex items-center justify-between mb-2 md:mb-3">
                <span className="text-[10px] md:text-xs font-bold text-gray-500">Security Check</span>
                <button 
                  type="button" 
                  onClick={generateCaptcha}
                  className="p-1 md:p-1.5 bg-white border border-gray-200 rounded-md hover:bg-gray-100 active:scale-95 transition-all shadow-sm"
                  title="Refresh Captcha"
                >
                  <RefreshCcw className="w-3 h-3 md:w-3.5 md:h-3.5 text-gray-600" />
                </button>
              </div>
              <div className="flex gap-2.5 md:gap-3">
                {/* Dynamic Styled Captcha Code Display Box */}
                <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 px-3 py-2.5 rounded-lg font-mono font-black text-sm md:text-base tracking-widest text-[#3B82F6] shadow-sm select-none w-1/3 flex items-center justify-center relative overflow-hidden italic line-through decoration-gray-400/40">
                  {captchaCode || '....'}
                </div>
                <input 
                  type="text" 
                  required
                  placeholder="Enter Code" 
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  className="w-2/3 border-2 border-gray-100 bg-white rounded-lg px-3 py-2.5 text-sm md:text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#3B82F6] focus:ring-4 focus:ring-blue-500/5 transition-all"
                />
              </div>
            </div>

            <Button type="submit" className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-xl py-3.5 md:py-5 text-sm md:text-base flex items-center justify-center gap-2 mt-2 shadow-lg shadow-blue-500/20 transition-all active:scale-[0.99] hover:-translate-y-0.5">
              Submit Request <Send className="w-4 h-4 ml-1" />
            </Button>
          </form>
        </div>

      </div>
    </section>
  );
}