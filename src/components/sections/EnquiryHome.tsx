'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

interface AvatarItem {
  id: number;
  name: string;
  logo: string;
}

// Exactly 6 images as requested
const avatars: AvatarItem[] = [
  { id: 1, name: 'Amity', logo: '/images/universities/amity.png' },
  { id: 2, name: 'DY Patil', logo: '/images/universities/dy-patil.png' },
  { id: 3, name: 'Manipal', logo: '/images/universities/manipal.png' },
  { id: 4, name: 'Chandigarh', logo: '/images/universities/chandigarh.png' },
  { id: 5, name: 'Asian', logo: '/images/universities/asian.png' },
  { id: 6, name: 'Symbiosis', logo: '/images/universities/symbiosis.png' },
];

export function EnquiryHome() {
  // === FORM STATE (UNTOUCHED) ===
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    course: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const courses = [
    'MBA (Master of Business Administration)',
    'MCA (Master of Computer Applications)',
    'BBA (Bachelor of Business Administration)',
    'BCA (Bachelor of Computer Applications)',
    'M.Com (Master of Commerce)',
    'B.Com (Bachelor of Commerce)',
    'M.Sc (Master of Science)',
    'B.Sc (Bachelor of Science)',
    'MA (Master of Arts)',
    'BA (Bachelor of Arts)',
    'DCA (Diploma in Computer Applications)',
    'PGDBA (Post Graduate Diploma in Business Administration)',
    'PGDCA (Post Graduate Diploma in Computer Applications)',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        city: '',
        course: '',
        message: '',
      });
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  // === NEW LEFT UI ANIMATION LOGIC ===
  const containerRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
   // Smarter responsive radius to prevent left/right cutoff
    const getRadius = () => {
      if (window.innerWidth < 768) return 110; // Mobile
      if (window.innerWidth < 1024) return 160; // Tablet
      return 190; // Desktop (Reduced from 200 to prevent edge clipping)
    };
    
    const radius = getRadius();
    const ctx = gsap.context(() => {
      
      // 1. Set Initial positions on the outer ring for all 6 logos
      logosRef.current.forEach((logo, index) => {
        if (!logo) return;
        const angle = (index * 60) * (Math.PI / 180); 
        const startX = Math.cos(angle) * radius;
        const startY = Math.sin(angle) * radius;

        // Place them on the ring, scaled DOWN (keeps them crisp)
        gsap.set(logo, {
          x: startX,
          y: startY,
          scale: 0.6, // Changed from 0.6
          opacity: 0.8,
          xPercent: -50,
          yPercent: -50,
        });
      });

      // 2. Create the looping animation timeline
      const tl = gsap.timeline({ repeat: -1 });

      logosRef.current.forEach((logo, index) => {
        if (!logo) return;
        
        const angle = (index * 60) * (Math.PI / 180);
        const startX = Math.cos(angle) * radius;
        const startY = Math.sin(angle) * radius;

        tl.to(logo, {
          x: 0,
          y: 0,
          scale: 1.1, // Changed from 1.3 (returns to full crisp resolution)
          opacity: 1,
          duration: 1,
          ease: "back.out(1.2)",
          zIndex: 50 
        })
        .to({}, { duration: 1.5 }) 
        .to(logo, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power2.in"
        })
        .set(logo, {
          x: startX,
          y: startY,
          scale: 0.9, // Changed from 0.6
          opacity: 0.9,
          zIndex: 10
        });
      });
      
    }, containerRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section className="enquiry-section py-16 md:py-24 bg-[#29354098] font-sans overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-center">
          
          {/* === LEFT COLUMN: DYNAMIC ANIMATED RING === */}
          <div ref={containerRef} className="lg:col-span-6 flex justify-center items-center relative min-h-[400px] md:min-h-[600px] lg:min-h-[760px]">
            
            {/* Center Anchor Point */}
            <div className="relative w-full z-0 h-full flex justify-center items-center">
              
              {/* Single Dashed Outer Ring (Sizes updated to match new radius) */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-dashed border-blue-300/60 rounded-full pointer-events-none w-[220px] h-[220px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px]" 
              />
              
              {/* Center Glow / Target Area */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-400/10 rounded-full blur-xl pointer-events-none" />

              {/* The 6 Animated Logos (Increased width/height classes) */}
              {avatars.map((avatar, index) => (
                <div
                  key={avatar.id}
                  ref={(el) => {
                    logosRef.current[index] = el;
                  }}
                  // Increased sizes here: w-20 to w-32
                  className="absolute top-1/2 left-1/2 w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32"
                >
                  <div className="bg-white rounded-full p-5 md:p-6 border border-gray-200 shadow-[0_8px_30px_rgba(11,114,185,0.12)] flex items-center justify-center w-full h-full">
                    <div className="relative w-full h-full">
                      <Image
                        src={avatar.logo}
                        alt={avatar.name}
                        fill
                        sizes="(max-width: 768px) 80px, 128px"
                        className="object-contain"
                        quality={90}
                      />
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* === RIGHT COLUMN: UNTOUCHED FORM === */}
          <div className="lg:col-span-5 lg:col-start-8 z-20">
            <div className="bg-[#0B72B9] rounded-[2rem] p-6 sm:p-10 md:p-12 shadow-2xl shadow-blue-900/20 text-white relative overflow-hidden">
              
              {/* Decorative Background Blob Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
              
              <div className="text-center mb-10 relative z-10">
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Enquiry</h3>
                <p className="text-blue-100 text-sm sm:text-base font-medium">Fill the form to get more information.</p>
              </div>

              {submitted ? (
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center my-6 animate-fade-in relative z-10">
                  <svg className="w-14 h-14 text-emerald-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-xl font-bold mb-2">Thank you!</h4>
                  <p className="text-base text-blue-100">Your details have been submitted successfully. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-5 relative z-10">
                  
                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
                    <div>
                      <label htmlFor="enquiry-fullname" className="sr-only">Full Name</label>
                      <input
                        id="enquiry-fullname"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter Your Full Name"
                        required
                        className="w-full bg-white text-gray-800 placeholder-gray-500 text-xs sm:text-sm rounded-full py-2.5 px-4 sm:py-4 sm:px-6 outline-none border-2 border-transparent focus:border-white/30 focus:ring-4 focus:ring-white/10 transition-all duration-300 font-medium shadow-inner"
                      />
                    </div>
                    <div>
                      <label htmlFor="enquiry-email" className="sr-only">Email Address</label>
                      <input
                        id="enquiry-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter Your Email ID"
                        required
                        className="w-full bg-white text-gray-800 placeholder-gray-500 text-xs sm:text-sm rounded-full py-2.5 px-4 sm:py-4 sm:px-6 outline-none border-2 border-transparent focus:border-white/30 focus:ring-4 focus:ring-white/10 transition-all duration-300 font-medium shadow-inner"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="enquiry-phone" className="sr-only">Phone Number</label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter Your Phone Number"
                      required
                      className="w-full bg-white text-gray-800 placeholder-gray-500 text-xs sm:text-sm rounded-full py-2.5 px-4 sm:py-4 sm:px-6 outline-none border-2 border-transparent focus:border-white/30 focus:ring-4 focus:ring-white/10 transition-all duration-300 font-medium shadow-inner"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label htmlFor="enquiry-city" className="sr-only">City</label>
                    <input
                      id="enquiry-city"
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="Enter Your City"
                      required
                      className="w-full bg-white text-gray-800 placeholder-gray-500 text-xs sm:text-sm rounded-full py-2.5 px-4 sm:py-4 sm:px-6 outline-none border-2 border-transparent focus:border-white/30 focus:ring-4 focus:ring-white/10 transition-all duration-300 font-medium shadow-inner"
                    />
                  </div>

                  {/* Course Dropdown */}
                  <div className="relative">
                    <label htmlFor="course-select" className="sr-only">Choose Course</label>
                    <select
                      id="course-select"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white text-gray-800 text-xs sm:text-sm rounded-full py-2.5 px-4 pr-10 sm:py-4 sm:px-6 sm:pr-12 outline-none border-2 border-transparent focus:border-white/30 focus:ring-4 focus:ring-white/10 transition-all duration-300 font-medium cursor-pointer appearance-none shadow-inner"
                      style={{
                        backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath stroke='%239CA3AF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                        backgroundPosition: 'calc(100% - 1.25rem) center',
                        backgroundSize: '1.25rem',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      <option value="" disabled className="text-gray-400">-- Please Select --</option>
                      {courses.map((courseOption, idx) => (
                        <option key={idx} value={courseOption} className="text-gray-800">
                          {courseOption}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="enquiry-message" className="sr-only">Message</label>
                    <textarea
                      id="enquiry-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Enter Your Message"
                      rows={3}
                      required
                      className="w-full bg-white text-gray-800 placeholder-gray-500 text-xs sm:text-sm rounded-2xl py-2.5 px-4 sm:rounded-3xl sm:py-4 sm:px-6 outline-none border-2 border-transparent focus:border-white/30 focus:ring-4 focus:ring-white/10 transition-all duration-300 font-medium resize-none shadow-inner"
                    />
                  </div>

                  {/* Privacy note */}
                  <div className="text-center pt-1.5">
                    <span className="text-[10px] sm:text-xs text-blue-50 font-bold tracking-wide">
                      (Privacy and Security Guaranteed)
                    </span>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center mt-2.5">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#2D2D2D] hover:bg-black text-white font-extrabold py-2.5 px-8 sm:py-4 sm:px-14 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-xs sm:text-sm uppercase tracking-[0.15em] disabled:opacity-50 disabled:cursor-not-allowed select-none w-full sm:w-auto"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}