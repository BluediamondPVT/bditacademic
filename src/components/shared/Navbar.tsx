'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Images } from '@/assets';
import { usePathname } from 'next/navigation';
import { ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Partnership', href: '/partnership' },
  { name: 'Degree', href: '/degree' },
  { name: 'Universities', href: '/universities' },
  { name: 'Media', href: '/media' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  
  // Track hovered item for sticky sliding animation
  const [hoveredPath, setHoveredPath] = React.useState<string | null>(null);
  
  const pathname = usePathname();
  const menuContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        gsap.fromTo(".menu-item-anim", 
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" }
        );
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
        isScrolled
          ? 'bg-[#031B33]/80 backdrop-blur-md shadow-lg border-white/5 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 relative z-50">
          <Image 
            src={Images.Logo}
            alt="BDIT Academic Logo" 
            width={260} 
            height={80} 
            className="object-contain h-12 md:h-16 w-auto" 
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div 
          className="hidden lg:flex items-center justify-center gap-1 font-sans bg-white/5 p-1.5 rounded-full border border-white/5 relative"
          onMouseLeave={() => setHoveredPath(null)} // Mouse hatne par hover effect reset
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === '/' && pathname === '');
            const isHovered = hoveredPath === link.name;
            
            return (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredPath(link.name)} // Hover track karne ke liye
                className={cn(
                  "font-semibold text-[14px] px-5 py-2.5 rounded-full transition-colors duration-300 relative tracking-wide outline-none z-10",
                  isActive ? "text-[#031B33]" : "text-white/70 hover:text-white"
                )}
              >
                {/* 1. Active Page Solid Pill Background */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavigationPill"
                    className="absolute inset-0 bg-white rounded-full -z-20 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* 2. Magnetic Sliding Hover Pill (Yehi hai wo "sticky" effect) */}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="hoverNavigationPill"
                    className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                <span className="relative z-10">{link.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Trigger & Fullscreen Drawer */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button 
                className="flex flex-col justify-center items-center w-11 h-11 gap-1.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all relative z-50 focus:outline-none shadow-inner cursor-pointer"
                aria-label="Open Menu"
              >
                <span className={cn("block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ease-out", isOpen && "transform rotate-45 translate-y-[7px]")} />
                <span className={cn("block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ease-out", isOpen && "opacity-0 -translate-x-4")} />
                <span className={cn("block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ease-out", isOpen && "transform -rotate-45 translate-y-[-7px]")} />
              </button>
            </SheetTrigger>
            
            <SheetContent 
              side="right" 
              className="w-full sm:w-full bg-[#031B33]/98 backdrop-blur-2xl border-l-0 text-white p-6 flex flex-col justify-between [&>button]:hidden"
            >
              <SheetTitle className="hidden">Navigation Menu</SheetTitle>
              
              <div ref={menuContainerRef} className="mt-6 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
                    <div className="flex items-center">
                      <Image alt="BDIT Academic Logo" className="object-contain h-10 w-auto" height={60} priority src={Images.Logo} width={180}/>
                    </div>
                    <SheetClose asChild>
                      <button 
                        className="flex items-center justify-center w-11 h-11 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all text-white focus:outline-none shadow-md cursor-pointer"
                        aria-label="Close Menu"
                      >
                        <X className="w-5 h-5 transition-transform hover:rotate-90 duration-300" />
                      </button>
                    </SheetClose>
                  </div>
                  
                  <nav className="flex flex-col font-sans">
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href || (link.href === '/' && pathname === '');
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "menu-item-anim opacity-0 text-[16px] font-medium tracking-tight transition-all duration-300 flex items-center justify-between group py-3 px-2 rounded-xl hover:bg-white/5",
                            isActive ? "text-cyan-400 bg-white/5" : "text-white/80 hover:text-white"
                          )}
                        >
                          <span>{link.name}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-cyan-400" />
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}