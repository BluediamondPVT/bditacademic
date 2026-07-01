'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, GraduationCap, Calendar, CreditCard, BookOpen, Search, Laptop, Briefcase } from 'lucide-react';
import PageBanner from '@/components/shared/PageBanner';
import { cn } from '@/lib/utils';
import { Images } from '@/assets';

// FAQ Data with relevant icons
const faqData = [
    {
        id: 1,
        question: 'What programs and courses do you offer?',
        answer: 'We offer a wide range of undergraduate, postgraduate, and diploma programs across various disciplines including Engineering, Management, Medical Sciences, Arts, and Commerce. Our courses are designed in collaboration with top-ranked universities to ensure industry-relevant education.',
        icon: BookOpen,
    },
    {
        id: 2,
        question: 'What are the admission requirements?',
        answer: 'Admission requirements vary by program. Generally, you\'ll need to have completed your previous education with minimum qualifying marks, valid entrance exam scores (if applicable), and necessary documents. Our admission team will guide you through the specific requirements for your chosen program.',
        icon: GraduationCap,
    },
    {
        id: 3,
        question: 'When does the admission process start?',
        answer: 'Admissions are typically open twice a year (January and July sessions) for most of our online degree programs. We recommend checking our website regularly or contacting our admission counselors for exact deadline dates.',
        icon: Calendar,
    },
    {
        id: 4,
        question: 'Do you offer scholarships or financial aid?',
        answer: 'Yes, we believe education should be accessible to everyone. We offer various merit-based scholarships, early-bird discounts, and easy EMI options. Please speak with our academic counselors to evaluate your eligibility for financial aid.',
        icon: CreditCard,
    },
    {
        id: 5,
        question: 'Are online learning options available?',
        answer: 'Yes, we offer flexible online learning options across various disciplines. Our interactive digital platform features live classes, recorded lectures, comprehensive study materials, and virtual mentorship, enabling students to pursue UGC-recognized degrees from anywhere without disrupting their personal or professional commitments.',
        icon: Laptop,
    },
    {
        id: 6,
        question: 'What career support services do you provide?',
        answer: 'Our dedicated placement cell offers comprehensive career support including resume building, interview preparation, skill development workshops, industry networking events, and campus recruitment drives. We have tie-ups with leading companies across various sectors to facilitate job placements.',
        icon: Briefcase,
    }
];

export default function FAQPage() {
    const [openId, setOpenId] = useState<number | null>(1);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    const filteredFaqs = faqData.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

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

            <main className="w-full min-h-screen relative font-sans flex flex-col pt-32 overflow-hidden bg-[#F8FAFC]">

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
                    <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/95 via-[#F8FAFC]/85 to-[#EBF4FF]/95" />
                </div>



                <section className="flex-grow relative pb-24 overflow-hidden">
                    {/* Decorative Glowing Orbs */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-400/25 to-cyan-400/25 blur-[100px] rounded-full pointer-events-none -z-10" />
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-300/30 blur-[120px] rounded-full pointer-events-none -z-10" />

                    <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">

                        {/* FAQ Accordion List */}
                        <div className="space-y-4 md:space-y-6">
                            {filteredFaqs.length > 0 ? (
                                filteredFaqs.map((faq, index) => {
                                    const isOpen = openId === faq.id;
                                    const Icon = faq.icon;

                                    return (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.08 }}
                                            key={faq.id}
                                            className={cn(
                                                "group rounded-2xl md:rounded-[2rem] border transition-all duration-300 overflow-hidden",
                                                isOpen
                                                    ? "bg-white/90 backdrop-blur-xl border-blue-200/80 shadow-[0_20px_40px_rgba(59,130,246,0.1)]"
                                                    : "bg-white/60 backdrop-blur-md border-white/80 shadow-sm hover:shadow-md hover:bg-white/80"
                                            )}
                                        >
                                            <button
                                                onClick={() => toggleFAQ(faq.id)}
                                                className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-inset rounded-2xl md:rounded-[2rem]"
                                                aria-expanded={isOpen}
                                            >
                                                <div className="flex items-center gap-4 md:gap-6 pr-4">
                                                    {/* Interactive Icon Box */}
                                                    <div className={cn(
                                                        "w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300",
                                                        isOpen ? "bg-blue-50 text-[#3B82F6]" : "bg-slate-100 text-slate-500 group-hover:bg-blue-50/60 group-hover:text-[#3B82F6]"
                                                    )}>
                                                        <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
                                                    </div>
                                                    <h3 className={cn(
                                                        "text-base md:text-xl font-bold tracking-tight transition-colors duration-300",
                                                        isOpen ? "text-[#031B33]" : "text-slate-700 group-hover:text-slate-900"
                                                    )}>
                                                        {faq.question}
                                                    </h3>
                                                </div>

                                                {/* Plus/Minus Toggle Icon */}
                                                <div className={cn(
                                                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500",
                                                    isOpen ? "bg-[#3B82F6] text-white rotate-180" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                                                )}>
                                                    {isOpen ? <Minus className="w-4 h-4" strokeWidth={2.5} /> : <Plus className="w-4 h-4" strokeWidth={2.5} />}
                                                </div>
                                            </button>

                                            {/* Framer Motion Smooth Height Reveal */}
                                            <AnimatePresence initial={false}>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{
                                                            height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                                                            opacity: { duration: 0.25, delay: 0.1 }
                                                        }}
                                                    >
                                                        <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 ml-14 md:ml-18">
                                                            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                                                                {faq.answer}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    );
                                })
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center py-12 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 p-8 shadow-sm"
                                >
                                    <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                                    <h4 className="text-lg font-bold text-slate-700 mb-1">No matching questions found</h4>
                                    <p className="text-sm text-slate-500">We couldn&apos;t find any FAQ matching &quot;{searchTerm}&quot;. Try searching for something else or contact our support.</p>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}