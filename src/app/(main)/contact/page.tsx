'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    GraduationCap, 
    Mail, 
    Clock, 
    User, 
    Phone, 
    ChevronDown, 
    PenLine, 
    ArrowUpRight, 
    CheckCircle2,
    AlertCircle
} from 'lucide-react';
import PageBanner from '@/components/shared/PageBanner';
import { Images } from '@/assets';
import { cn } from '@/lib/utils';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: 'Leslie Alexander',
        lastName: 'Alexander',
        email: 'info@eduflow.com',
        phone: '+36 021 214 225',
        subject: 'Course Inquiry',
        message: ''
    });

    const [formErrors, setFormErrors] = useState<Record<string, string>>({});
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (formErrors[name]) {
            setFormErrors(prev => {
                const updated = { ...prev };
                delete updated[name];
                return updated;
            });
        }
    };

    const validateForm = () => {
        const errors: Record<string, string> = {};
        if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
        if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            errors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email address';
        }
        if (!formData.phone.trim()) errors.phone = 'Phone number is required';
        if (!formData.subject.trim()) errors.subject = 'Subject is required';
        if (!formData.message.trim()) errors.message = 'Message is required';
        return errors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setStatus('submitting');
        setTimeout(() => {
            setStatus('success');
        }, 1200);
    };

    const resetForm = () => {
        setFormData({
            fullName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: 'Course Inquiry',
            message: ''
        });
        setStatus('idle');
    };

    return (
        <>
            <PageBanner
                title="Contact Us"
                description="Get in touch with our team of experts to start your educational journey"
            />

            <main className="w-full min-h-screen relative font-sans flex flex-col pt-16 md:pt-24 overflow-hidden bg-[#F8FAFC]">
                
                {/* Background Image overlay with premium gradient mask */}
                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                    <Image
                        src={Images.BgFooter}
                        alt="Background Pattern"
                        fill
                        className="object-cover object-center opacity-35"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/95 via-[#F8FAFC]/95 to-[#EBF4FF]/95" />
                </div>

                <section className="flex-grow relative pb-24 overflow-hidden">
                    {/* Glowing Accent Orbs */}
                    <div className="absolute top-10 left-1/4 w-[600px] h-[400px] bg-gradient-to-r from-blue-400/15 to-orange-400/10 blur-[100px] rounded-full pointer-events-none -z-10" />
                    <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-blue-300/15 blur-[120px] rounded-full pointer-events-none -z-10" />

                    <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                            
                            {/* Left Column: Heading and Contact details */}
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="lg:col-span-5 space-y-10"
                            >
                                {/* Badge */}
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FBE6D5] bg-[#FDF8F3] shadow-xs text-xs font-bold text-[#D66A23] uppercase tracking-wider">
                                        <GraduationCap className="w-3.5 h-3.5" />
                                        <span>Get In Touch</span>
                                    </div>
                                </div>

                                {/* Main Title */}
                                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1B3B36] tracking-tight leading-[1.15] max-w-md">
                                    Have questions about courses, <span className="italic font-serif text-[#D66A23] font-normal">instructors</span>
                                </h2>

                                {/* Dynamic, Interactive Contact Info cards */}
                                <div className="space-y-8">
                                    {/* Email Row */}
                                    <motion.div 
                                        whileHover={{ x: 6 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                        className="flex items-center gap-5"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-[#D66A23] text-white flex items-center justify-center shrink-0 shadow-md">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-slate-500 text-xs sm:text-sm font-semibold mb-0.5">Email Address:</span>
                                            <a 
                                                href={`mailto:${formData.email || 'info@bditAcademic.com'}`} 
                                                className="text-[#1B3B36] font-bold text-base hover:text-[#D66A23] transition-colors"
                                            >
                                                {formData.email || 'info@bditAcademic.com'}
                                            </a>
                                        </div>
                                    </motion.div>

                                    {/* Monday - Friday Schedule (Green) */}
                                    <motion.div 
                                        whileHover={{ x: 6 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                        className="flex items-center gap-5"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-[#1B3B36] text-white flex items-center justify-center shrink-0 shadow-md">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[#1B3B36] font-bold text-base mb-0.5">Monday - Friday</span>
                                            <span className="text-slate-500 text-xs sm:text-sm font-medium">7:00 PM - 9:00 PM (Live Online Sessions)</span>
                                        </div>
                                    </motion.div>

                                    {/* Monday - Friday Schedule (Orange) */}
                                    <motion.div 
                                        whileHover={{ x: 6 }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                        className="flex items-center gap-5"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-[#D66A23] text-white flex items-center justify-center shrink-0 shadow-md">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[#1B3B36] font-bold text-base mb-0.5">Monday - Friday</span>
                                            <span className="text-slate-500 text-xs sm:text-sm font-medium">7:00 PM - 9:00 PM (Live Online Sessions)</span>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Right Column: Custom Contact Form Container */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="lg:col-span-7 bg-white border border-[#E5E9F0] rounded-[2rem] p-6 sm:p-10 shadow-[0_15px_30px_rgba(27,59,54,0.04)]"
                            >
                                <AnimatePresence mode="wait">
                                    {status === 'success' ? (
                                        <motion.div 
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="py-12 text-center flex flex-col items-center justify-center space-y-6"
                                        >
                                            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 shadow-xs border border-green-100">
                                                <CheckCircle2 className="w-10 h-10" strokeWidth={1.5} />
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-2xl font-extrabold text-[#1B3B36]">Message Sent Successfully!</h3>
                                                <p className="text-slate-500 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                                                    Thank you, <span className="font-semibold text-slate-700">{formData.fullName}</span>. We have received your inquiry regarding &quot;{formData.subject}&quot; and our counselors will contact you shortly.
                                                </p>
                                            </div>
                                            <button 
                                                onClick={resetForm}
                                                className="px-6 py-3 bg-[#1B3B36] hover:bg-[#123C35] text-white text-sm font-bold rounded-xl transition-all duration-300 shadow-sm"
                                            >
                                                Send Another Message
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            {/* Names Grid */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {/* Full Name */}
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-bold text-[#1B3B36] transition-colors">
                                                        Full Name <span className="text-[#D66A23] font-bold">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <input 
                                                            type="text" 
                                                            name="fullName"
                                                            value={formData.fullName}
                                                            onChange={handleChange}
                                                            className={cn(
                                                                "w-full bg-white border rounded-xl py-3.5 pl-4 pr-11 text-slate-800 text-sm font-medium focus:outline-hidden focus:ring-2 transition-all duration-300 placeholder:text-slate-400",
                                                                formErrors.fullName 
                                                                    ? "border-red-400 focus:ring-red-400/20 focus:border-red-400" 
                                                                    : "border-slate-200 focus:ring-[#D66A23]/20 focus:border-[#D66A23]"
                                                            )}
                                                            placeholder="Leslie Alexander"
                                                        />
                                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                                            <User className="w-4 h-4" />
                                                        </div>
                                                    </div>
                                                    {formErrors.fullName && (
                                                        <p className="text-xs font-semibold text-red-500 flex items-center gap-1.5">
                                                            <AlertCircle className="w-3.5 h-3.5" />
                                                            <span>{formErrors.fullName}</span>
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Last Name */}
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-bold text-[#1B3B36] transition-colors">
                                                        Last Name <span className="text-[#D66A23] font-bold">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <input 
                                                            type="text" 
                                                            name="lastName"
                                                            value={formData.lastName}
                                                            onChange={handleChange}
                                                            className={cn(
                                                                "w-full bg-white border rounded-xl py-3.5 pl-4 pr-11 text-slate-800 text-sm font-medium focus:outline-hidden focus:ring-2 transition-all duration-300 placeholder:text-slate-400",
                                                                formErrors.lastName 
                                                                    ? "border-red-400 focus:ring-red-400/20 focus:border-red-400" 
                                                                    : "border-slate-200 focus:ring-[#D66A23]/20 focus:border-[#D66A23]"
                                                            )}
                                                            placeholder="Alexander"
                                                        />
                                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                                            <User className="w-4 h-4" />
                                                        </div>
                                                    </div>
                                                    {formErrors.lastName && (
                                                        <p className="text-xs font-semibold text-red-500 flex items-center gap-1.5">
                                                            <AlertCircle className="w-3.5 h-3.5" />
                                                            <span>{formErrors.lastName}</span>
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Contact Grid */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {/* Email Address */}
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-bold text-[#1B3B36] transition-colors">
                                                        Email Address <span className="text-[#D66A23] font-bold">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <input 
                                                            type="email" 
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            className={cn(
                                                                "w-full bg-white border rounded-xl py-3.5 pl-4 pr-11 text-slate-800 text-sm font-medium focus:outline-hidden focus:ring-2 transition-all duration-300 placeholder:text-slate-400",
                                                                formErrors.email 
                                                                    ? "border-red-400 focus:ring-red-400/20 focus:border-red-400" 
                                                                    : "border-slate-200 focus:ring-[#D66A23]/20 focus:border-[#D66A23]"
                                                            )}
                                                            placeholder="info@eduflow.com"
                                                        />
                                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                                            <Mail className="w-4 h-4" />
                                                        </div>
                                                    </div>
                                                    {formErrors.email && (
                                                        <p className="text-xs font-semibold text-red-500 flex items-center gap-1.5">
                                                            <AlertCircle className="w-3.5 h-3.5" />
                                                            <span>{formErrors.email}</span>
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Phone */}
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-bold text-[#1B3B36] transition-colors">
                                                        Phone <span className="text-[#D66A23] font-bold">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <input 
                                                            type="text" 
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            className={cn(
                                                                "w-full bg-white border rounded-xl py-3.5 pl-4 pr-11 text-slate-800 text-sm font-medium focus:outline-hidden focus:ring-2 transition-all duration-300 placeholder:text-slate-400",
                                                                formErrors.phone 
                                                                    ? "border-red-400 focus:ring-red-400/20 focus:border-red-400" 
                                                                    : "border-slate-200 focus:ring-[#D66A23]/20 focus:border-[#D66A23]"
                                                            )}
                                                            placeholder="+36 021 214 225"
                                                        />
                                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                                            <Phone className="w-4 h-4" />
                                                        </div>
                                                    </div>
                                                    {formErrors.phone && (
                                                        <p className="text-xs font-semibold text-red-500 flex items-center gap-1.5">
                                                            <AlertCircle className="w-3.5 h-3.5" />
                                                            <span>{formErrors.phone}</span>
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Subject */}
                                            <div className="space-y-2">
                                                <label className="block text-sm font-bold text-[#1B3B36] transition-colors">
                                                    Subject <span className="text-[#D66A23] font-bold">*</span>
                                                </label>
                                                <div className="relative">
                                                    <select 
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                        className={cn(
                                                            "w-full bg-white border rounded-xl py-3.5 pl-4 pr-11 text-slate-800 text-sm font-medium focus:outline-hidden focus:ring-2 transition-all duration-300 appearance-none cursor-pointer",
                                                            formErrors.subject 
                                                                ? "border-red-400 focus:ring-red-400/20 focus:border-red-400" 
                                                                : "border-slate-200 focus:ring-[#D66A23]/20 focus:border-[#D66A23]"
                                                        )}
                                                    >
                                                        <option value="Course Inquiry">Course Inquiry</option>
                                                        <option value="Admissions Inquiry">Admissions Inquiry</option>
                                                        <option value="Technical Support">Technical Support</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                                                        <ChevronDown className="w-4 h-4" />
                                                    </div>
                                                </div>
                                                {formErrors.subject && (
                                                    <p className="text-xs font-semibold text-red-500 flex items-center gap-1.5">
                                                        <AlertCircle className="w-3.5 h-3.5" />
                                                        <span>{formErrors.subject}</span>
                                                    </p>
                                                )}
                                            </div>

                                            {/* Message */}
                                            <div className="space-y-2">
                                                <label className="block text-sm font-bold text-[#1B3B36] transition-colors">
                                                    Message <span className="text-[#D66A23] font-bold">*</span>
                                                </label>
                                                <div className="relative">
                                                    <textarea 
                                                        name="message"
                                                        rows={4}
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        className={cn(
                                                            "w-full bg-white border rounded-xl py-3.5 pl-4 pr-11 text-slate-800 text-sm font-medium focus:outline-hidden focus:ring-2 transition-all duration-300 placeholder:text-slate-400 resize-none",
                                                            formErrors.message 
                                                                ? "border-red-400 focus:ring-red-400/20 focus:border-red-400" 
                                                                : "border-slate-200 focus:ring-[#D66A23]/20 focus:border-[#D66A23]"
                                                        )}
                                                        placeholder="Write your message here.."
                                                    />
                                                    <div className="absolute right-4 top-5 text-slate-400 pointer-events-none">
                                                        <PenLine className="w-4 h-4" />
                                                    </div>
                                                </div>
                                                {formErrors.message && (
                                                    <p className="text-xs font-semibold text-red-500 flex items-center gap-1.5">
                                                        <AlertCircle className="w-3.5 h-3.5" />
                                                        <span>{formErrors.message}</span>
                                                    </p>
                                                )}
                                            </div>

                                            {/* Submit Button */}
                                            <button 
                                                type="submit" 
                                                disabled={status === 'submitting'}
                                                className="w-full flex items-center justify-between bg-[#D66A23] hover:bg-[#C85A17] disabled:bg-[#D66A23]/70 text-white font-bold py-2 pl-6 pr-2 rounded-2xl transition-all duration-300 shadow-md group cursor-pointer"
                                            >
                                                <span className="text-sm md:text-base">
                                                    {status === 'submitting' ? 'Sending Message...' : 'Send Message'}
                                                </span>
                                                <span className="bg-white text-[#D66A23] w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-sm border border-[#FBE6D5]">
                                                    <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                                                </span>
                                            </button>
                                        </form>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

