'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Images } from '@/assets';
import { usePathname } from 'next/navigation';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import X from 'lucide-react/dist/esm/icons/x';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import dynamic from 'next/dynamic';

const DesktopNav = dynamic(() => import('./DesktopNav').then((mod) => mod.DesktopNav), {
  ssr: false,
  loading: () => <div className="hidden lg:block w-[400px] h-10 bg-slate-100 animate-pulse rounded-full" />,
});

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
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        isScrolled
          // Light theme scroll background
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-slate-200/50 py-3'
          // Transparent but prepared for light background
          : 'bg-transparent border-transparent py-5'
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
            sizes="(max-width: 768px) 350px, 640px"
            className="object-contain h-12 md:h-16 w-auto" 
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav pathname={pathname} navLinks={navLinks} />

        {/* Mobile Menu Trigger & Fullscreen Drawer */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              {/* Light theme Hamburger Button */}
              <button 
                className="flex flex-col justify-center items-center w-11 h-11 gap-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all relative z-50 focus:outline-none shadow-sm cursor-pointer"
                aria-label="Open Menu"
              >
                <span className={cn("block w-5 h-0.5 bg-slate-800 rounded-full transition-all duration-300 ease-out", isOpen && "transform rotate-45 translate-y-[7px]")} />
                <span className={cn("block w-5 h-0.5 bg-slate-800 rounded-full transition-all duration-300 ease-out", isOpen && "opacity-0 -translate-x-4")} />
                <span className={cn("block w-5 h-0.5 bg-slate-800 rounded-full transition-all duration-300 ease-out", isOpen && "transform -rotate-45 translate-y-[-7px]")} />
              </button>
            </SheetTrigger>
            
            {/* Light Theme Fullscreen Mobile Menu */}
            <SheetContent 
              side="right" 
              className="w-full sm:w-full bg-white/98 backdrop-blur-2xl border-l-0 text-slate-900 p-6 flex flex-col justify-between [&>button]:hidden"
            >
              <SheetTitle className="hidden">Navigation Menu</SheetTitle>
              
              <div ref={menuContainerRef} className="mt-6 flex flex-col h-full justify-between">
                <div>
                  {/* Menu Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-8">
                    <div className="flex items-center">
                      <Image alt="BDIT Academic Logo" className="object-contain h-10 w-auto" height={60} sizes="(max-width: 768px) 350px, 640px" priority src={Images.Logo} width={180}/>
                    </div>
                    <SheetClose asChild>
                      <button 
                        className="flex items-center justify-center w-11 h-11 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all text-slate-600 hover:text-slate-900 focus:outline-none shadow-sm cursor-pointer"
                        aria-label="Close Menu"
                      >
                        <X className="w-5 h-5 transition-transform hover:rotate-90 duration-300" />
                      </button>
                    </SheetClose>
                  </div>
                  
                  {/* Light Theme Mobile Navigation Links */}
                  <nav className="flex flex-col font-sans">
                    {navLinks.map((link) => {
                      const isActive = pathname === link.href || (link.href === '/' && pathname === '');
                      return (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "menu-item-anim will-change-transform opacity-0 text-[16px] font-semibold tracking-tight transition-all duration-300 flex items-center justify-between group py-3.5 px-3 rounded-xl hover:bg-slate-50",
                            isActive ? "text-[#3B82F6] bg-blue-50/50" : "text-slate-600 hover:text-slate-900"
                          )}
                        >
                          <span>{link.name}</span>
                          <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[#3B82F6]" />
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