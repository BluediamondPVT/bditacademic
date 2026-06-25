'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Images } from "@/assets";
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';
import MapPin from 'lucide-react/dist/esm/icons/map-pin';
import Phone from 'lucide-react/dist/esm/icons/phone';
import Mail from 'lucide-react/dist/esm/icons/mail';
import PhoneCall from 'lucide-react/dist/esm/icons/phone-call';

const programs = [
  { name: 'Bachelor of Computer Applications', href: '#' },
  { name: 'Bachelor of Business Administration', href: '#' },
  { name: 'Bachelor of Science', href: '#' },
  { name: 'Bachelor of Commerce', href: '#' },
  { name: 'Bachelor of Arts', href: '#' },
  { name: 'Master of Business Administration', href: '#' },
  { name: 'Master of Science', href: '#' },
  { name: 'Master of Commerce', href: '#' },
  { name: 'Master of Arts', href: '#' },
];

const quickLinks = [
  { name: 'About Us', href: '#' },
  { name: 'Admissions', href: '#' },
  { name: 'Placements', href: '#' },
  { name: 'Campus Life', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Career', href: '#' },
];

export function Footer() {
  return (
    <>
      {/* Main Footer Section */}
      <footer className="bg-[#222222] text-gray-300 font-sans border-t-[4px] border-[#3B82F6] relative z-10 pt-16 pb-6">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          
          {/* Top 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
            
            {/* Column 1: About & Logo */}
            <div className="flex flex-col">
              <Link href="/" className="mb-6 inline-block">
                {/* Dummy Logo Path */}
                <Image 
                  src={Images.Logo} 
                  alt="BDIT Academic Logo" 
                  width={200} 
                  height={100} 
                  className="object-contain "
                />
              </Link>
              <p className="text-sm leading-relaxed mb-6 text-gray-300 pe-4">
                Empowering students with world-class education from top-ranked universities. Your journey to success starts here.
              </p>
              {/* Native SVG Social Icons (Fix for Lucide-React removed brand icons) */}
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all duration-300 text-white" aria-label="Facebook">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all duration-300 text-white" aria-label="Twitter">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all duration-300 text-white" aria-label="Instagram">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all duration-300 text-white" aria-label="LinkedIn">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Programs */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Programs</h3>
              <ul className="space-y-3">
                {programs.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} className="group flex items-start gap-2 text-sm text-gray-300 hover:text-[#60A5FA] transition-colors">
                      <ChevronRight className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5 transition-transform group-hover:translate-x-1" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((item, idx) => (
                  <li key={idx}>
                    <Link href={item.href} className="group flex items-center gap-2 text-sm text-gray-300 hover:text-[#60A5FA] transition-colors">
                      <ChevronRight className="w-4 h-4 text-[#60A5FA] shrink-0 transition-transform group-hover:translate-x-1" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div>
              <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 text-sm text-gray-300">
                  <MapPin className="w-5 h-5 text-[#60A5FA] shrink-0 mt-1" />
                  <p className="leading-relaxed">
                    106/C, 1st floor, Building #6, Sector 3, Millennium Business Park, Mahape, Navi Mumbai 400710
                  </p>
                </li>
                <li className="flex items-center gap-4 text-sm text-gray-300">
                  <Phone className="w-5 h-5 text-[#60A5FA] shrink-0" />
                  <p>+91 70452 29016</p>
                </li>
                <li className="flex items-center gap-4 text-sm text-gray-300">
                  <PhoneCall className="w-5 h-5 text-[#60A5FA] shrink-0" />
                  <p>+91 22 4667 6425</p>
                </li>
                <li className="flex items-center gap-4 text-sm text-gray-300">
                  <Mail className="w-5 h-5 text-[#60A5FA] shrink-0" />
                  <a href="mailto:info@bditAcademic.com" className="hover:text-[#60A5FA] transition-colors">
                    info@bditAcademic.com
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-white/10 bg-[#1A1A1A] py-6">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-[#3B82F6] font-semibold">BDIT Academic</span>. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      {/* <a 
        href="https://wa.me/917045229016" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-0 left-0 bg-[#25D366] hover:bg-[#1DA851] text-white px-5 py-3 rounded-tr-xl font-bold flex items-center gap-2 z-50 shadow-[4px_-4px_15px_rgba(37,211,102,0.3)] transition-all duration-300 hover:pr-6"
      >
        <MessageCircle className="w-5 h-5" />
        <span>WhatsApp Chat</span>
      </a> */}
    </>
  );
}