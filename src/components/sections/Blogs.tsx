'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import Clock from 'lucide-react/dist/esm/icons/clock';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
}

const blogsData: BlogPost[] = [
  {
    id: 1,
    title: '10 Essential Tips for Successful Online Learning',
    description: 'Discover proven strategies to maximize your online education experience, from time management to creating an effective study environment.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    date: 'Dec 20, 2025',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'How to Choose the Right Degree for Your Career Goals',
    description: 'Navigate your educational journey with confidence. Learn how to align your degree choice with your career aspirations and market demands.',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=600&fit=crop',
    date: 'Dec 18, 2025',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Balancing Work and Study: A Practical Guide for Busy Professionals',
    description: 'Master the art of managing your career and education simultaneously. Get actionable tips to maintain productivity and avoid burnout.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop',
    date: 'Dec 15, 2025',
    readTime: '6 min read',
  },
];

export function Blogs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ctx = gsap.context(() => {
              // Header Animation
              gsap.fromTo(
                '.blogs-header',
                { y: 30, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.6,
                  ease: 'power2.out',
                  scrollTrigger: {
                    trigger: '.blogs-header',
                    start: 'top 90%',
                    toggleActions: 'play none none none',
                  },
                }
              );

              // Cards Animation
              gsap.fromTo(
                '.blog-card',
                { y: 50, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.8,
                  stagger: 0.15,
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: '.blogs-grid',
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                  },
                }
              );
            }, containerRef);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-8 md:py-16 bg-gray-100 font-sans overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Heading */}
        <div className="blogs-header will-change-transform text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Latest Blogs & Articles
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed font-normal">
            Stay updated with insights, tips, and educational resources
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="blogs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog) => (
            <div
              key={blog.id}
              className="blog-card will-change-transform group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out"
            >
              {/* Blog Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  quality={75}
                />
              </div>

              {/* Blog Info & Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-snug tracking-tight hover:text-[#3B82F6] transition-colors duration-300 cursor-pointer line-clamp-2">
                  {blog.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {blog.description}
                </p>

                {/* Spacer to push metadata & button to the bottom */}
                <div className="mt-auto">
                  {/* Divider Line */}
                  <div className="border-t border-gray-100 w-full mb-4" />

                  {/* Metadata Row */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 mb-5">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button className="bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold py-2.5 px-6 rounded-lg text-sm transition-all duration-300 hover:shadow-[0_4px_12px_rgba(59,130,246,0.25)] select-none">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
