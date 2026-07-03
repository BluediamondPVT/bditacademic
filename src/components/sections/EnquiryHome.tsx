'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function EnquiryHome() {
  // === FORM STATE (UPDATED FOR MULTI-STEP) ===
  const [currentStep, setCurrentStep] = useState(1);
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

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (currentStep === 1) {
      const nameInput = document.getElementById('enquiry-fullname') as HTMLInputElement | null;
      const emailInput = document.getElementById('enquiry-email') as HTMLInputElement | null;
      
      if (nameInput && !nameInput.checkValidity()) {
        nameInput.reportValidity();
        return;
      }
      if (emailInput && !emailInput.checkValidity()) {
        emailInput.reportValidity();
        return;
      }
      if (!formData.fullName || !formData.email) {
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      const phoneInput = document.getElementById('enquiry-phone') as HTMLInputElement | null;
      const cityInput = document.getElementById('enquiry-city') as HTMLInputElement | null;
      
      if (phoneInput && !phoneInput.checkValidity()) {
        phoneInput.reportValidity();
        return;
      }
      if (cityInput && !cityInput.checkValidity()) {
        cityInput.reportValidity();
        return;
      }
      if (!formData.phone || !formData.city) {
        return;
      }
      setCurrentStep(3);
    }
  };

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      // Fallback if submitted via enter key
      const dummyEvent = { preventDefault: () => {} } as unknown as React.MouseEvent;
      handleNext(dummyEvent);
      return;
    }
    
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
      setCurrentStep(1);
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="enquiry-section py-20 md:py-28 bg-[#FAF9F6] font-sans overflow-hidden">
      {/* CSS Animation Keyframes for Step Transitions */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}} />

      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* === LEFT COLUMN: TEXT AND BADGE === */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start text-left">
            
            {/* Pill Badge */}
            <div className="flex items-center gap-2 bg-[#FDF8F3] border border-[#FBE6D5] text-[#D66A23] text-xs font-extrabold px-4 py-2 rounded-full w-fit mb-6 uppercase tracking-wider">
              <svg className="w-4 h-4 text-[#D66A23]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
              </svg>
              Find Course
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1B3B36] tracking-tight leading-[1.15] mb-6">
              Find your perfect <br />
              <span className="italic font-serif text-[#D66A23] font-normal">learning</span> course
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-[520px] mb-8">
              Select your course type, skill level, and preferred learning format to discover the courses that match.
            </p>

            {/* View All Courses Button Container */}
            <Link href="/courses" className="no-underline">
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
            </Link>
          </div>

          {/* === RIGHT COLUMN: MULTI-STEP FORM === */}
          <div className="lg:col-span-5 lg:col-start-8 z-20">
            <div className="bg-white border border-gray-100 rounded-[2rem] p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] text-gray-800 relative overflow-hidden">
              
              {/* Decorative Background Blob Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0B72B9]/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
              
              <div className="text-center mb-8 relative z-10">
                <span className="text-[#0B72B9] text-xs font-bold uppercase tracking-widest bg-blue-50 px-3.5 py-1.5 rounded-full">
                  Quick Enquiry
                </span>
              </div>

              {submitted ? (
                <div className="bg-[#0B72B9]/5 border border-[#0B72B9]/10 rounded-2xl p-8 text-center my-6 animate-fade-in relative z-10">
                  <svg className="w-14 h-14 text-emerald-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">Thank you!</h4>
                  <p className="text-base text-gray-600">Your details have been submitted successfully. Our team will contact you shortly.</p>
                </div>
              ) : (
                <div className="relative z-10 space-y-6">
                  {/* Step Progress Bar */}
                  <div>
                    <div className="flex justify-between items-center text-xs sm:text-sm font-bold mb-2 text-gray-700">
                      <span className="font-bold text-gray-805">Step {currentStep} Of 3</span>
                      <span className="font-bold text-gray-805">{currentStep === 1 ? '33%' : currentStep === 2 ? '66%' : '100%'}</span>
                    </div>
                    <div className="w-full bg-[#F5F2EB] h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#D66A23] h-full transition-all duration-300 ease-out"
                        style={{ width: `${currentStep === 1 ? 33 : currentStep === 2 ? 66 : 100}%` }}
                      />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* STEP 1: Name and Email */}
                    {currentStep === 1 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="text-left">
                          <h4 className="text-lg sm:text-xl font-extrabold text-[#1B3B36] tracking-tight mb-1">What is your name and email?</h4>
                          <p className="text-xs text-gray-500 font-medium">Please provide your details below.</p>
                        </div>
                        <div className="space-y-3.5">
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
                              className="w-full bg-white text-gray-800 placeholder-gray-400 text-xs sm:text-sm rounded-xl py-3 px-4 sm:py-4.5 sm:px-6 outline-none border border-gray-200 focus:border-[#0B72B9] focus:ring-4 focus:ring-[#0B72B9]/5 transition-all duration-300 font-medium shadow-sm"
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
                              className="w-full bg-white text-gray-800 placeholder-gray-400 text-xs sm:text-sm rounded-xl py-3 px-4 sm:py-4.5 sm:px-6 outline-none border border-gray-200 focus:border-[#0B72B9] focus:ring-4 focus:ring-[#0B72B9]/5 transition-all duration-300 font-medium shadow-sm"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Phone and City */}
                    {currentStep === 2 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="text-left">
                          <h4 className="text-lg sm:text-xl font-extrabold text-[#1B3B36] tracking-tight mb-1">How can we contact you?</h4>
                          <p className="text-xs text-gray-500 font-medium">Please enter your phone and city.</p>
                        </div>
                        <div className="space-y-3.5">
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
                              className="w-full bg-white text-gray-800 placeholder-gray-400 text-xs sm:text-sm rounded-xl py-3 px-4 sm:py-4.5 sm:px-6 outline-none border border-gray-200 focus:border-[#0B72B9] focus:ring-4 focus:ring-[#0B72B9]/5 transition-all duration-300 font-medium shadow-sm"
                            />
                          </div>
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
                              className="w-full bg-white text-gray-800 placeholder-gray-400 text-xs sm:text-sm rounded-xl py-3 px-4 sm:py-4.5 sm:px-6 outline-none border border-gray-200 focus:border-[#0B72B9] focus:ring-4 focus:ring-[#0B72B9]/5 transition-all duration-300 font-medium shadow-sm"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Course selection & optional message */}
                    {currentStep === 3 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="text-left">
                          <h4 className="text-lg sm:text-xl font-extrabold text-[#1B3B36] tracking-tight mb-1">What course are you looking for?</h4>
                          <p className="text-xs text-gray-500 font-medium">Select your preferred course.</p>
                        </div>
                        <div className="space-y-3.5">
                          <div className="relative">
                            <label htmlFor="course-select" className="sr-only">Choose Course</label>
                            <select
                              id="course-select"
                              name="course"
                              value={formData.course}
                              onChange={handleInputChange}
                              required
                              className="w-full bg-white text-gray-800 text-xs sm:text-sm rounded-xl py-3.5 px-4 pr-10 sm:py-4.5 sm:px-6 sm:pr-12 outline-none border border-gray-200 focus:border-[#0B72B9] focus:ring-4 focus:ring-[#0B72B9]/5 transition-all duration-300 font-medium cursor-pointer appearance-none shadow-sm"
                              style={{
                                backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none'%3E%3Cpath stroke='%239CA3AF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                                backgroundPosition: 'calc(100% - 1.25rem) center',
                                backgroundSize: '1.25rem',
                                backgroundRepeat: 'no-repeat',
                              }}
                            >
                              <option value="" disabled className="text-gray-400">-- Please Select Course --</option>
                              {courses.map((courseOption, idx) => (
                                <option key={idx} value={courseOption} className="text-gray-800">
                                  {courseOption}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label htmlFor="enquiry-message" className="sr-only">Message</label>
                            <textarea
                              id="enquiry-message"
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder="Enter Your Message (Optional)"
                              rows={3}
                              className="w-full bg-white text-gray-800 placeholder-gray-400 text-xs sm:text-sm rounded-xl py-3 px-4 sm:py-4 sm:px-6 outline-none border border-gray-200 focus:border-[#0B72B9] focus:ring-4 focus:ring-[#0B72B9]/5 transition-all duration-300 font-medium resize-none shadow-sm"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Privacy note */}
                    <div className="text-center">
                      <span className="text-[10px] sm:text-xs text-gray-400 font-bold tracking-wide">
                        (Privacy and Security Guaranteed)
                      </span>
                    </div>

                    {/* Action Buttons and Back Link */}
                    <div className="space-y-4 pt-2">
                      {currentStep < 3 ? (
                        <button
                          type="button"
                          onClick={handleNext}
                          className="w-full bg-[#123C35] hover:bg-[#0E2F2A] text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-between p-1.5 pl-6 group shadow-lg hover:shadow-xl hover:-translate-y-0.5 select-none cursor-pointer"
                        >
                          <span className="text-xs sm:text-sm uppercase tracking-[0.15em]">Continue</span>
                          <span className="bg-white border border-[#E0E0E0] text-[#D66A23] w-9 h-9 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 font-extrabold shadow-sm shrink-0">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                          </span>
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#123C35] hover:bg-[#0E2F2A] text-[#FAF9F6] font-bold rounded-xl transition-all duration-300 flex items-center justify-between p-1.5 pl-6 group shadow-lg hover:shadow-xl hover:-translate-y-0.5 select-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                        >
                          <span className="text-xs sm:text-sm uppercase tracking-[0.15em]">
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                          </span>
                          <span className="bg-white border border-[#E0E0E0] text-[#D66A23] w-9 h-9 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 font-extrabold shadow-sm shrink-0">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                          </span>
                        </button>
                      )}

                      {/* Back Button Link */}
                      {currentStep > 1 && (
                        <div className="flex justify-start">
                          <button
                            type="button"
                            onClick={handleBack}
                            className="text-gray-500 hover:text-gray-900 font-bold transition-all duration-200 text-xs sm:text-sm flex items-center gap-1.5 select-none cursor-pointer"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            Back
                          </button>
                        </div>
                      )}
                    </div>

                  </form>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}