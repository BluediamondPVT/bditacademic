'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LinkItem {
  name: string;
  href: string;
}

interface DesktopNavProps {
  pathname: string;
  navLinks: LinkItem[];
}

export function DesktopNav({ pathname, navLinks }: DesktopNavProps) {
  const [hoveredPath, setHoveredPath] = React.useState<string | null>(null);

  return (
    <div 
      className="hidden lg:flex items-center justify-center gap-1 font-sans bg-white/5 p-1.5 rounded-full border border-white/5 relative"
      onMouseLeave={() => setHoveredPath(null)}
    >
      {navLinks.map((link) => {
        const isActive = pathname === link.href || (link.href === '/' && pathname === '');
        const isHovered = hoveredPath === link.name;
        
        return (
          <Link
            key={link.name}
            href={link.href}
            onMouseEnter={() => setHoveredPath(link.name)}
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

            {/* 2. Magnetic Sliding Hover Pill */}
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
  );
}
