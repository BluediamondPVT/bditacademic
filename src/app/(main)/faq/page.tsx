'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, GraduationCap, Mail, Phone, ArrowUpRight } from 'lucide-react';
import PageBanner from '@/components/shared/PageBanner';
import { cn } from '@/lib/utils';
import { Images } from '@/assets';

// FAQ Data with relevant student images mapping
const faqData = [
    {
        id: 1,
        question: 'How do I enroll in a course?',
        answer: 'To enroll in any of our UGC-recognized online programs, you can apply directly through our website. Select your desired program, fill out the application form, upload the required academic documents, and pay the enrollment fee. Our counselors will guide you through the process.',
        image: Images.HeroSection.NewStd,
    },
    {
        id: 2,
        question: 'Are the courses suitable for beginners?',
        answer: 'Yes, our undergraduate and postgraduate programs are structured to cater to both beginners and working professionals. We provide foundational courses, bridging classes, and detailed study materials to ensure a smooth transition into advanced learning.',
        image: Images.HeroSection.NewStd2,
    },
    {
        id: 3,
        question: 'Are the courses self-paced or live?',
        answer: 'We offer both self-paced courses and live sessions. You can choose based on your preference.',
        image: Images.HeroSection.NewStd3,
    },
    {
        id: 4,
        question: 'Can I learn at my own pace?',
        answer: 'Absolutely! Our online degrees offer flexible schedules, allowing you to access recorded lectures, study materials, and assessments at your own convenience. This enables you to balance your education with work and personal commitments.',
        image: Images.HeroSection.NewStd4,
    },
    {
        id: 5,
        question: 'Can I switch or upgrade my course later?',
        answer: 'Yes, academic mobility is supported under specific university guidelines. You can submit a request to our student support team during the initial weeks of the semester to switch or upgrade your enrolled program.',
        image: Images.HeroSection.NewStd,
    },
    {
        id: 6,
        question: 'Are there any hidden fees?',
        answer: 'No, we maintain complete transparency in our fee structure. All tuition, examination, and learning resource fees are clearly stated upfront. We also offer easy EMI options and merit-based scholarships.',
        image: Images.HeroSection.NewStd2,
    }
];

export default function FAQPage() {
    // Default open state is 3 (matches the image!)
    const [openId, setOpenId] = useState<number | null>(3);

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    // SEO Structured Data (FAQ Schema JSON-LD)
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <>
            <PageBanner
                title="Frequently Asked Questions"
                description="Find answers to common questions about our programs and admissions"
            />

            <main className="w-full min-h-screen relative font-sans flex flex-col pt-16 md:pt-24 overflow-hidden bg-[#F8FAFC]">

                {/* SEO JSON-LD Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />

                {/* Background Image with Rich Gradient Overlay */}
                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                    <Image
                        src={Images.BgFooter}
                        alt="FAQ Background"
                        fill
                        className="object-cover object-center opacity-35"
                        priority
                    />
                    {/* Soft multi-layer gradient to maintain glassmorphism contrast and maximum text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/95 via-[#F8FAFC]/95 to-[#EBF4FF]/95" />
                </div>

                <section className="flex-grow relative pb-24 overflow-hidden">
                    {/* Decorative Glowing Orbs */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-400/15 to-cyan-400/15 blur-[100px] rounded-full pointer-events-none -z-10" />
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-300/20 blur-[120px] rounded-full pointer-events-none -z-10" />

                    <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                        {/* Two-column layout matching the target UI design */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            
                            {/* Left Column: FAQ Accordion List (col-span-7) */}
                            <div className="lg:col-span-7 space-y-4 md:space-y-5 order-2 lg:order-1">
                                
                                {/* Mobile-only Header (rendered above the FAQ list on mobile) */}
                                <div className="lg:hidden mb-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FBE6D5] bg-[#FDF8F3] shadow-xs text-xs font-bold text-[#D66A23] mb-4 uppercase tracking-wider">
                                        <GraduationCap className="w-3.5 h-3.5" />
                                        <span>Faq&apos;s</span>
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B3B36] tracking-tight leading-tight">
                                        Find answers to common <span className="italic font-serif text-[#D66A23] font-normal">questions</span> about courses
                                    </h2>
                                </div>

                                {faqData.map((faq, index) => {
                                    const isOpen = openId === faq.id;

                                    return (
                                        <motion.div
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.05 }}
                                            key={faq.id}
                                            layout="position"
                                            className={cn(
                                                "w-full bg-white border rounded-2xl md:rounded-[1.75rem] transition-all duration-300 overflow-hidden",
                                                isOpen
                                                    ? "border-slate-200 shadow-[0_15px_30px_rgba(27,59,54,0.06)]"
                                                    : "border-[#E5E9F0] shadow-sm hover:shadow-md hover:border-slate-300"
                                            )}
                                        >
                                            <div
                                                onClick={() => toggleFAQ(faq.id)}
                                                className="w-full p-5 sm:p-7 cursor-pointer select-none text-left flex items-start gap-4 sm:gap-6"
                                            >
                                                {/* Left side Image - Animates and shows on open state */}
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.92 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.92 }}
                                                        transition={{ duration: 0.25 }}
                                                        className="relative w-20 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-slate-100 shadow-xs block"
                                                    >
                                                        <Image
                                                            src={faq.image}
                                                            alt={faq.question}
                                                            fill
                                                            sizes="(max-w-640px) 80px, 112px"
                                                            className="object-cover"
                                                            priority={index < 3}
                                                        />
                                                    </motion.div>
                                                )}

                                                <div className="flex-1 min-w-0">
                                                    <h3 className={cn(
                                                        "text-sm sm:text-base md:text-lg font-bold tracking-tight transition-colors duration-300",
                                                        isOpen ? "text-[#1B3B36]" : "text-slate-800"
                                                    )}>
                                                        {faq.question}
                                                    </h3>
                                                    
                                                    <AnimatePresence initial={false}>
                                                        {isOpen && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                                animate={{ height: 'auto', opacity: 1, marginTop: 8 }}
                                                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                                className="overflow-hidden"
                                                            >
                                                                <p className="text-xs sm:text-sm md:text-base text-slate-500 leading-relaxed font-medium">
                                                                    {faq.answer}
                                                                </p>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>

                                                {/* Plus/Minus Action Toggle Icon */}
                                                <div className="shrink-0 pt-0.5">
                                                    {isOpen ? (
                                                        <div className="w-8 h-8 rounded-full bg-[#123C35] text-white flex items-center justify-center shadow-xs transition-transform duration-300">
                                                            <Minus className="w-4 h-4" strokeWidth={3} />
                                                        </div>
                                                    ) : (
                                                        <div className="w-8 h-8 rounded-full bg-white border-2 border-[#123C35] text-[#123C35] flex items-center justify-center transition-all duration-300 hover:bg-slate-50">
                                                            <Plus className="w-4 h-4" strokeWidth={3} />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Right Column: Title and Contacts Card (col-span-5) */}
                            <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28 order-1 lg:order-2">
                                
                                {/* Desktop-only Header */}
                                <div className="hidden lg:block">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FBE6D5] bg-[#FDF8F3] shadow-xs text-xs font-bold text-[#D66A23] mb-4 uppercase tracking-wider">
                                        <GraduationCap className="w-4 h-4" />
                                        <span>Faq&apos;s</span>
                                    </div>
                                    <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1B3B36] tracking-tight leading-[1.15] mb-2">
                                        Find answers to common <span className="italic font-serif text-[#D66A23] font-normal">questions</span> about courses
                                    </h2>
                                </div>

                                {/* Premium Cream Contact Card */}
                                <div className="bg-[#F7F4EF] rounded-[2.25rem] p-3 sm:p-4 flex flex-col gap-6 border border-slate-100/50 shadow-xs mt-4 lg:mt-0">
                                    {/* Info Row Pill */}
                                    <div className="bg-white rounded-2xl border border-slate-100 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-slate-700 shadow-2xs">
                                        <div className="flex items-center gap-2.5">
                                            <Mail className="w-4 h-4 text-slate-400" />
                                            <a href="mailto:info@bditAcademic.com" className="hover:text-[#D66A23] transition-colors">
                                                info@bditAcademic.com
                                            </a>
                                        </div>
                                        
                                        <div className="hidden sm:block w-px h-5 bg-slate-200" />
                                        
                                        <div className="flex items-center gap-2.5">
                                            <Phone className="w-4 h-4 text-slate-400" />
                                            <a href="tel:+917045229016" className="hover:text-[#D66A23] transition-colors">
                                                +91 70452 29016
                                            </a>
                                        </div>
                                    </div>

                                    {/* Interactive Get in Touch Button */}
                                    <Link 
                                        href="/contact" 
                                        className="flex items-center justify-between bg-white border border-[#E0E0E0] rounded-2xl p-1.5 pl-6 pr-1.5 hover:shadow-md transition-all duration-300 group w-fit gap-6 min-w-[200px]"
                                    >
                                        <span className="text-slate-800 font-bold text-sm group-hover:text-[#D66A23] transition-colors">
                                            Get In Touch
                                        </span>
                                        <span className="bg-[#D66A23] text-white w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-sm shrink-0">
                                            <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                                        </span>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}