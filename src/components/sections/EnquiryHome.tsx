'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface AvatarItem {
  id: number;
  name: string;
  logo: string;
  ring: number;
  angle: number;
}

const avatars: AvatarItem[] = [
  // Ring 1 (Center - Static)
  { id: 1, name: 'Amity', logo: '/images/universities/amity.png', ring: 1, angle: 0 },
  
  // Ring 2 (Middle Ring - 3 avatars)
  { id: 2, name: 'DY Patil', logo: '/images/universities/dy-patil.png', ring: 2, angle: -90 },
  { id: 3, name: 'Manipal', logo: '/images/universities/manipal.png', ring: 2, angle: 30 },
  { id: 4, name: 'Chandigarh', logo: '/images/universities/chandigarh.png', ring: 2, angle: 150 },
  
  // Ring 3 (Outer Ring - 5 avatars)
  { id: 5, name: 'Asian', logo: '/images/universities/asian.png', ring: 3, angle: 180 },
  { id: 6, name: 'Mangalayatan', logo: '/images/universities/mangalayatan.png', ring: 3, angle: 252 },
  { id: 7, name: 'Symbiosis', logo: '/images/universities/symbiosis.png', ring: 3, angle: 324 },
  { id: 8, name: 'Swami Vivekanand', logo: '/images/universities/swami-vivkanand.png', ring: 3, angle: 36 },
  { id: 9, name: 'NMIMS', logo: '/images/universities/nmims.jpg', ring: 3, angle: 108 },
];

export function EnquiryHome() {
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

  const degToRad = (deg: number) => (deg * Math.PI) / 180;

  return (
    <section className="enquiry-section py-16 md:py-24 bg-[#F4F7F9] font-sans overflow-hidden">
      
      {/* Static CSS Variables for Radii */}
      <style>{`
        .enquiry-section {
          --radius-inner: 80px;
          --radius-middle: 150px;
          --radius-outer: 220px;
        }
        @media (min-width: 768px) {
          .enquiry-section {
            --radius-inner: 120px;
            --radius-middle: 220px;
            --radius-outer: 320px;
          }
        }
        @media (min-width: 1024px) {
          .enquiry-section {
            --radius-inner: 130px;
            --radius-middle: 240px;
            --radius-outer: 340px;
          }
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        {/* Increased gap between columns for more space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-center">
          
          {/* Left Column: Static Avatar Network (Takes 6 cols) */}
          <div className="lg:col-span-6 flex justify-center items-center relative min-h-[500px] md:min-h-[700px] lg:min-h-[760px]">
            <div className="relative w-full h-full flex justify-center items-center">
              
              {/* Concentric Dashed Rings - Exactly matched to radii */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[1.5px] border-dashed border-blue-200/80 rounded-full pointer-events-none" 
                style={{ width: 'calc(var(--radius-outer) * 2)', height: 'calc(var(--radius-outer) * 2)' }} 
              />
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[1.5px] border-dashed border-blue-200/80 rounded-full pointer-events-none" 
                style={{ width: 'calc(var(--radius-middle) * 2)', height: 'calc(var(--radius-middle) * 2)' }} 
              />
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[1.5px] border-dashed border-blue-200/80 rounded-full pointer-events-none bg-blue-50/20" 
                style={{ width: 'calc(var(--radius-inner) * 2)', height: 'calc(var(--radius-inner) * 2)' }} 
              />

              {/* Ring 3 (Outer Ring Avatars) */}
              {avatars.filter(a => a.ring === 3).map((avatar) => {
                const cos = Math.cos(degToRad(avatar.angle));
                const sin = Math.sin(degToRad(avatar.angle));
                return (
                  <div
                    key={avatar.id}
                    className="absolute w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 z-20"
                    style={{
                      left: `calc(50% + (var(--radius-outer) * ${cos}))`,
                      top: `calc(50% + (var(--radius-outer) * ${sin}))`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="bg-white rounded-full p-2 md:p-3 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_40px_rgba(11,114,185,0.15)] transition-all duration-300 hover:scale-110 flex items-center justify-center w-full h-full cursor-pointer group">
                      <div className="relative w-full h-full">
                        <Image
                          src={avatar.logo}
                          alt={avatar.name}
                          fill
                          sizes="(max-width: 768px) 56px, 96px"
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Ring 2 (Middle Ring Avatars) */}
              {avatars.filter(a => a.ring === 2).map((avatar) => {
                const cos = Math.cos(degToRad(avatar.angle));
                const sin = Math.sin(degToRad(avatar.angle));
                return (
                  <div
                    key={avatar.id}
                    className="absolute w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 z-20"
                    style={{
                      left: `calc(50% + (var(--radius-middle) * ${cos}))`,
                      top: `calc(50% + (var(--radius-middle) * ${sin}))`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="bg-white rounded-full p-2 md:p-3 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_40px_rgba(11,114,185,0.15)] transition-all duration-300 hover:scale-110 flex items-center justify-center w-full h-full cursor-pointer group">
                      <div className="relative w-full h-full">
                        <Image
                          src={avatar.logo}
                          alt={avatar.name}
                          fill
                          sizes="(max-width: 768px) 56px, 96px"
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Ring 1 (Center Ring: Static Centered Avatar) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-white border border-gray-100 rounded-full p-4 md:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex items-center justify-center z-30 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/universities/amity.png"
                    alt="Amity University"
                    fill
                    sizes="(max-width: 768px) 96px, 176px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Theme-matching Enquiry Form (Takes 5 cols, starts at 8, creates empty gap of 1 col) */}
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