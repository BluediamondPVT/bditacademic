'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { GraduationCap, BookOpen, Award, CheckCircle } from 'lucide-react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

type ProgramCategory = {
  id: string;
  title: string;
  icon: React.ElementType;
  programs: string[];
  accentColor: string;
  bgColor: string;
};

const programData: ProgramCategory[] = [
  {
    id: 'postgraduate',
    title: 'Postgraduate Degrees',
    icon: GraduationCap,
    accentColor: 'text-blue-600',
    bgColor: 'bg-blue-50',
    programs: [
      'MBA (Master of Business Administration)',
      'MCA (Master of Computer Applications)',
      'MSc (Master of Science)',
      'MCom (Master of Commerce)',
      'MA (Master of Arts)',
    ],
  },
  {
    id: 'undergraduate',
    title: 'Undergraduate Degrees',
    icon: BookOpen,
    accentColor: 'text-violet-600',
    bgColor: 'bg-violet-50',
    programs: [
      'BBA (Bachelor of Business Administration)',
      'BCA (Bachelor of Computer Applications)',
      'BSc (Bachelor of Science)',
      'BCom (Bachelor of Commerce)',
      'BA (Bachelor of Arts)',
    ],
  },
  {
    id: 'diploma',
    title: 'Diploma Programs',
    icon: Award,
    accentColor: 'text-amber-600',
    bgColor: 'bg-amber-50',
    programs: [
      'Business Administration',
      'Computer Application (DCA)',
      'Commerce & Business Studies',
      'Arts & Humanities',
      'Journalism and Mass Communication',
      'Basic Science (PCB/PCM/ZBC)',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 10 
    } 
  }
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export default function AcademicPrograms() {
  return (
    <section className={`relative min-h-screen py-20 lg:py-28 overflow-hidden bg-slate-50 ${inter.className}`}>
      {/* Background Mesh Gradient & Glowing Orbs (Light Mode) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Base Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-slate-50"></div>
        
        {/* Floating Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-300/40 rounded-full blur-[100px] mix-blend-multiply opacity-60 animate-pulse"></div>
        <div className="absolute top-40 -right-20 w-120 h-120 bg-cyan-300/30 rounded-full blur-[120px] mix-blend-multiply opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-40 left-1/3 w-160 h-160 bg-blue-300/30 rounded-full blur-[130px] mix-blend-multiply opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Academic Programs Offered
          </h2>
          <p className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed font-light">
            Each program is designed to provide academic depth, flexibility, and career relevance, enabling learners to advance professionally without compromising quality or credibility.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {programData.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={category.id} 
                variants={itemVariants}
                className="group relative h-full rounded-3xl bg-white/70 backdrop-blur-xl border border-white hover:border-blue-100 p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.08)] transition-all duration-300 hover:-translate-y-2 flex flex-col"
              >
                {/* Subtle Inner Glow on Hover */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-b from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                {/* Card Header */}
                <div className="flex flex-col mb-8 relative z-10">
                  <div className={`p-4 rounded-2xl ${category.bgColor} border border-white shadow-sm group-hover:scale-105 transition-transform duration-300 w-fit mb-5 ${category.accentColor}`}>
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Programs List */}
                <motion.ul 
                  variants={listVariants}
                  className="space-y-3 grow relative z-10"
                >
                  {category.programs.map((program, idx) => (
                    <motion.li 
                      key={idx}
                      variants={listItemVariants}
                      className="flex items-start gap-3 md:py-2 rounded-xl hover:bg-white/80 transition-colors group/item"
                    >
                      <CheckCircle className={`w-5 h-5 mt-0.5 shrink-0 ${category.accentColor} opacity-70 group-hover/item:opacity-100 transition-opacity`} strokeWidth={2} />
                      <span className="text-slate-600  text-xs md:text-base leading-snug group-hover/item:text-slate-900 transition-colors font-medium">
                        {program}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
