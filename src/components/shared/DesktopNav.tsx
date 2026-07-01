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
      // Container updated for light theme
      className="hidden lg:flex items-center justify-center gap-1 font-sans bg-slate-100/50 p-1.5 rounded-full border border-slate-200/60 relative backdrop-blur-sm"
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
              // Text colors updated for light theme visibility
              isActive ? "text-[#3B82F6]" : "text-slate-600 hover:text-slate-900"
            )}
          >
            {/* 1. Active Page Solid Pill Background (Light Theme) */}
            {isActive && (
              <motion.div
                layoutId="activeNavigationPill"
                className="absolute inset-0 bg-white rounded-full -z-20 shadow-sm border border-slate-100/50"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}

            {/* 2. Magnetic Sliding Hover Pill (Light Theme) */}
            {isHovered && !isActive && (
              <motion.div
                layoutId="hoverNavigationPill"
                className="absolute inset-0 bg-slate-200/50 rounded-full -z-10"
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