'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface BlogPost {
  id: number;
  title: string;
  category: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
}

const blogsData: BlogPost[] = [
  {
    id: 1,
    title: '10 Effective strategies to enhance your online learning and boost your career skills',
    category: 'Learning',
    image: '/images/blogs/blog_learning.png',
    author: 'Robert Fox',
    authorImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
    date: 'May 15, 2026',
  },
  {
    id: 2,
    title: 'Ultimate guide to building a personalized learning path for maximum growth',
    category: 'Online Course',
    image: '/images/blogs/blog_online_course.png',
    author: 'Natalie White',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    date: 'May 19, 2026',
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
      className="py-16 md:py-24 bg-white font-sans overflow-hidden border-t border-slate-100"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Heading */}
        <div className="blogs-header will-change-transform flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-100 bg-orange-50/50 shadow-sm text-xs font-semibold text-[#E67E22] mb-4">
              <span>🎓 Blog & News</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F2942] tracking-tight leading-tight">
              Stay updated with <br />
              learning <span className="italic text-[#E67E22] font-semibold font-serif">tips</span>
            </h2>
          </div>
          <div>
            <button className="group flex items-center justify-between pl-6 pr-2 py-2 border border-slate-200 rounded-xl bg-white hover:border-[#E67E22] hover:shadow-[0_8px_30px_rgba(230,126,34,0.12)] transition-all duration-300 cursor-pointer">
              <span className="font-bold text-slate-800 mr-5 text-sm group-hover:text-[#E67E22] transition-colors duration-300">
                View All News
              </span>
              <div className="w-9 h-9 rounded-lg bg-[#E67E22] flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-4.5 h-4.5" />
              </div>
            </button>
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="blogs-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogsData.map((blog) => (
            <div
              key={blog.id}
              className="blog-card will-change-transform group flex flex-col bg-white border border-[#F3EAD8]/40 rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_12px_40px_rgba(230,126,34,0.05)] hover:border-[#E67E22]/30 transition-all duration-500 ease-out"
            >
              {/* Blog Image */}
              <div className="relative w-full aspect-[1.6] overflow-hidden bg-gray-50">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  quality={85}
                />
                {/* Category Tag */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm">
                  {blog.category}
                </div>
              </div>

              {/* Blog Info & Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                {/* Metadata Row */}
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-4">
                  <div className="relative w-6 h-6 rounded-full overflow-hidden bg-gray-100 mr-1">
                    <Image
                      src={blog.authorImage}
                      alt={blog.author}
                      fill
                      sizes="24px"
                      className="object-cover"
                    />
                  </div>
                  <span className="text-slate-800 font-bold">{blog.author}</span>
                  <span className="text-slate-300">|</span>
                  <span>{blog.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-extrabold text-[#0F2942] leading-snug tracking-tight hover:text-[#E67E22] transition-colors duration-300 cursor-pointer">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
