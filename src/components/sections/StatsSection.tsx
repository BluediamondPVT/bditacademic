"use client";

import React from "react";

// Tumhara data array colors aur icons ke sath
const statsData = [
  {
    id: 1,
    count: "10K",
    label: "Online Courses",
    bgColor: "bg-[#FFF8E7]", // Pastel Yellow
    iconColor: "fill-[#F4C150]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 3H4C2.89 3 2 3.89 2 5V17C2 18.11 2.89 19 4 19H8V21H16V19H20C21.1 19 22 18.11 22 17V5C22 3.89 21.1 3 20 3ZM20 17H4V5H20V17Z" />
      </svg>
    ),
  },
  {
    id: 2,
    count: "200+",
    label: "Expert Tutors",
    bgColor: "bg-[#E2E8F0]", // Pastel Slate/Gray
    iconColor: "fill-[#2C3E50]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" />
        {/* Halka sa tie/suit detail add karne ke liye (Optional, original jaisa) */}
        <path d="M12 14L10 20H14L12 14Z" className="fill-white" />
      </svg>
    ),
  },
  {
    id: 3,
    count: "60K+",
    label: "Online Students",
    bgColor: "bg-[#F3E8FF]", // Pastel Purple
    iconColor: "fill-[#7C3AED]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
      </svg>
    ),
  },
  {
    id: 4,
    count: "6K+",
    label: "Certified Courses",
    bgColor: "bg-[#E0F2F1]", // Pastel Teal
    iconColor: "fill-[#45A29E]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L14.8 4.7L18.7 4.2L19.8 7.9L23 9.9L21.5 13.5L22.9 17.1L19.3 18.5L18.2 22.3L14.4 21.2L12 24L9.6 21.2L5.8 22.3L4.7 18.5L1.1 17.1L2.5 13.5L1 9.9L4.2 7.9L5.3 4.2L9.2 4.7L12 2ZM10.5 16.5L17.5 9.5L16.1 8.1L10.5 13.7L7.9 11.1L6.5 12.5L10.5 16.5Z" />
      </svg>
    ),
  },
];

export default function StatsSection() {
  return (
    <section className="w-full py-12 bg-amber-400 md:py-16  font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Grid setup: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          {statsData.map((stat) => (
            <div 
              key={stat.id}
              // Card Styling: Original image jaise rounded corners aur pastel background
              className={`flex items-center gap-6 p-8 rounded-2xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer ${stat.bgColor}`}
            >
              
              {/* Icon Container */}
              <div className={`shrink-0 ${stat.iconColor}`}>
                {stat.icon}
              </div>

              {/* Text Container */}
              <div className="flex flex-col">
                <h4 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight mb-1">
                  {stat.count}
                </h4>
                <p className="text-sm md:text-base font-medium text-slate-600">
                  {stat.label}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}