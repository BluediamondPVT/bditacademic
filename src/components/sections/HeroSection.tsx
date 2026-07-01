'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, CheckCircle, Mail, Check } from 'lucide-react';
import { Images } from '@/assets';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-16 bg-white font-sans">

      {/* Background Left Dots SVG (Hidden on smaller screens to avoid clutter) */}
      <figure className="absolute top-1/2 left-0 -translate-y-1/2 -ml-14 hidden 2xl:block z-0">
        <svg className="rotate-[74deg] fill-red-500 opacity-10" width="200" height="200" viewBox="0 0 200 200">
          <circle cx="180.4" cy="15.5" r="7.7"></circle>
          <path d="m159.9 22.4c-3.8 0-6.9-3.1-6.9-6.9s3.1-6.9 6.9-6.9 6.9 3.1 6.9 6.9-3.1 6.9-6.9 6.9z"></path>
          <ellipse transform="matrix(.3862 -.9224 .9224 .3862 71.25 138.08)" cx="139.4" cy="15.5" rx="6.1" ry="6.1"></ellipse>
          <circle cx="118.9" cy="15.5" r="5.4"></circle>
          <path d="m98.4 20.1c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2.1 4.6-4.6 4.6z"></path>
          {/* Trimmed paths for brevity, keep your original paths here */}
        </svg>
      </figure>

      {/* Right Background Circular Lines */}
      <span className="absolute top-1/2 right-0 -translate-y-1/2 mt-12 -mr-12 hidden 2xl:flex z-0">
        <svg className="fill-yellow-400 opacity-80 rotate-[186deg]" width="200" height="200" viewBox="0 0 200 200">
          <path d="m35.4 54.2c0 0.6 0 1.1-0.1 1.7-0.9 9.3-9.2 16.1-18.5 15.1-4.5-0.4-8.5-2.6-11.4-6.1-2.8-3.5-4.2-7.9-3.7-12.4 0.9-9.3 9.2-16.1 18.5-15.1 4.5 0.4 8.5 2.6 11.4 6.1 2.4 3 3.8 6.8 3.8 10.7zm-33.4 0c0 3.8 1.3 7.5 3.8 10.4 2.8 3.4 6.8 5.5 11.2 6 9.1 0.9 17.2-5.8 18.1-14.8 0.4-4.4-0.9-8.7-3.7-12.1s-6.8-5.5-11.2-6c-9.2-0.8-17.3 5.8-18.2 14.9v1.6z"></path>
          {/* Trimmed paths for brevity, keep your original paths here */}
        </svg>
      </span>

      {/* Top Left Orange Circle */}
      <figure className="absolute top-0 left-0 ml-4 sm:ml-12 mt-4 z-0">
        <svg className="fill-orange-200 opacity-80 w-6 h-6 sm:w-[29px] sm:h-[29px]" viewBox="0 0 29 29">
          <path d="M29.004,14.502 C29.004,22.512 22.511,29.004 14.502,29.004 C6.492,29.004 -0.001,22.512 -0.001,14.502 C-0.001,6.492 6.492,-0.001 14.502,-0.001 C22.511,-0.001 29.004,6.492 29.004,14.502 Z"></path>
        </svg>
      </figure>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Changed gap for mobile vs desktop */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left Column - Content */}
          <div className="w-full lg:w-5/12 xl:w-1/2 text-center lg:text-left relative z-10 pt-4 lg:pt-0">

            {/* Small Yellow Star */}
            <figure className="fill-yellow-400 absolute bottom-0 right-0 mr-12 hidden xl:block">
              <svg width="42px" height="42px">
                <path d="M21.000,-0.001 L28.424,13.575 L41.999,20.999 L28.424,28.424 L21.000,41.998 L13.575,28.424 L-0.000,20.999 L13.575,13.575 L21.000,-0.001 Z"></path>
              </svg>
            </figure>

            {/* Small Green Sparkle */}
            <figure className="fill-emerald-400 absolute top-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 -mt-8 lg:-mt-12 ml-0 lg:ml-12">
              <svg width="22px" height="21px">
                <path d="M10.717,4.757 L14.440,-0.001 L14.215,6.023 L20.142,4.757 L16.076,9.228 L21.435,12.046 L15.430,12.873 L17.713,18.457 L12.579,15.252 L10.717,20.988 L8.856,15.252 L3.722,18.457 L6.005,12.873 L-0.000,12.046 L5.359,9.228 L1.292,4.757 L7.220,6.023 L6.995,-0.001 L10.717,4.757 Z"></path>
              </svg>
            </figure>

            {/* Main Headline - Responsive Text Sizes */}
            <h1 className="text-xl sm:text-xl lg:text-6xl font-extrabold text-slate-900 leading-tight md:leading-tight lg:leading-tight mb-0">
              Limitless learning at your{' '}
              <span className="relative inline-block mt-2 lg:mt-0">
                fingertips
                {/* Yellow Brush SVG - Responsive width */}
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-0 lg:ml-3 -z-10 w-[180px] sm:w-[250px] md:w-[300px]">
                  <svg width="100%" height="100%" viewBox="0 0 366 62.1" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-yellow-400" d="m322.5 25.3c0 1.4 2.9 0.8 3.1 1.6 0.8 1.1-1.1 1.3-0.6 2.4 13.3 0.9 26.9 1.7 40.2 4-2.5 0.7-4.9 1.6-7.3 1.1-4-0.9-8.2-1-12.2-1.2-8.5-0.5-16.9-1.9-25.5-1.7h-3.1c2.6 0.6 4.8 0.4 5.7 2.2-7.3 0.4-14.1-0.8-21.2-1.1-0.2 0.6-0.5 1.2-0.8 1.8 21.3 0.7 42.5 1.6 64.3 4.6-4.2 1.6-7.7 1-10.8 0.8-6.8-0.5-13.5-1.3-20.3-1.9-0.9-0.1-2.3-0.1-2.9 0.2-2.2 1.6-4.3 0.6-7 0.4 1.4-1 2.5 0.5 3.9-0.8-5.6-1-10.7 0.6-15.9 0s-10.5-0.6-16.6-0.8c2 1.6 4.6 1.3 6.2 1.4 4.9 0 9.9 0.8 14.8 0.7 5.3-0.1 10.4 0.5 15.5 0.9 3.2 0.3 6.7-0.1 9.9-0.4 1.1-0.1 0.5 0.3 0.6 0.6 0.5 0.9 2.2 0.8 3.6 0.8 5.1-0.1 10.1 0.6 14.8 1.5 0.8 0.1 1.5 0 1.7 0.7 0 0.7-0.8 0.6-1.5 0.8-3.9 1.2-7.4-0.2-11.1-0.2-2 0-4.3-1.5-6 0.5-0.3 0.4-1.4 0.1-2.2-0.1-4.5-0.8-9.1-0.5-13.8-1.5-2.3-0.5-5.6 0.1-8.4 0.5-4 0.5-8-0.7-12.1-0.9-3.4-0.2-7.1-0.5-10.5-0.7-7.1-0.3-14.2-1.2-22.3-0.4 4.9 1.1 9.4 1.2 13.8 1.2 9.7 0 19.2 2.3 28.9 1.6 7.3 3.2 15.9 1.5 23.8 2.9 4.9 0.8 10.1 0.8 15.2 1.2 0.5 0 0.8 0.3 1.1 0.9-20-2.1-40.2-1.4-60.8-3 4.9 2.1 10.8-0.3 15.3 2.7-8 1.9-15.8-0.9-23.5-0.1 2.8 1.4 7.1 1.1 9.3 3.3 0.5 0.5 0.2 1.1-1.2 1.3 2.3 1 3.4-2.1 5.7-0.4 0.2-0.6 0.2-1 0.3-1.5 0.8-0.3 2 0.8 1.5 1.5-0.2 0.1 0 0.3 0 0.5 18.7 0.4 37.3 1.7 56.2 3.6-1.7 1.1-2.8 1.2-4.2 1.1-7.1-0.5-14.1-0.9-21.2-1.4-3.1-0.2-6.3-0.4-9.4-0.4-7.6-0.2-15-0.7-22.4-1-9-0.4-17.9-0.1-26.9-0.1-1.2 0-2.9-0.4-3.9 1 14.8 0.3 29.7 0.6 44.4 1.1 14.8 0.6 29.9 1.3 44.2 4.2-4.3 1-8.8 0.9-13 0.5-5.3-0.5-10.5-1.1-15.8-1.2-11.4-0.3-22.9-0.9-34.3-1.2-17.6-0.4-35.4-0.3-53.1-0.4-10.8-0.1-21.7-0.2-32.5 0-17.8 0.4-35.7 0.2-53.5 0.5-13.1 0.3-26.3 0.1-39.4 0.5-11.1 0.3-22.4 0.6-33.6 1-13.1 0.6-26.1 0.2-39.3 0.4-3.9 0.1-7.6 0.2-11.8-0.2 0.9-1.2 2.3-1.3 3.9-1.3 8.4 0.2 16.6-0.4 24.9-0.9 3.9-0.2 7.9-0.4 11.9 0.2 2.5 0.4 5.3-0.3 8-0.4 7.3-0.4 14.7-0.7 22-0.9 11.9-0.5 23.7-1.2 35.6-0.8 7.7 0.2 15.3-0.6 22.9-0.1 2.3 0.2 4.3-0.5 6.5-1h-17.6c-9.6 0-19-0.1-28.6 0-8 0.1-16.1 0.3-24 0.8-2.6 0.2-5.4 0.1-8.2 0.1-10.1 0.3-20.1 0.6-30.2 0.5-5.4 0-10.7-0.1-15.9 0.6-2.3 0.3-4-1.3-6.5-0.6 0.2 0.4 0.5 0.9 0.6 1.5-1.9 0-4 0.4-4.9-0.1-4.2-2.2-9.4-1.5-14.1-2.3-1.7-0.3-3.7-0.1-4.3-1.5-0.5-1.3 1.9-1.5 2.6-2.6-4.2-1.4-4.6-5-8.5-7.2-1.5 0.2-0.9 2.8-4.2 1.3 0.3 2.4 4.5 3.9 2.8 6.4-2.3 0.3-3.2-0.8-4.2-1.7-2.5-4-5.1-8.4-5.1-12.7 0.2-6.8 0.2-13.8 3.6-20.4 0.3-0.5 0.3-1 0.8-1.4 0.9-0.9 1.2-2.4 3.6-2.1 2.2 0.2 2.5 1.5 2.6 2.6 0.2 1.4 1.5 1.8 3.2 2.5 0.9-1.4 0.5-2.9 2.6-3.7 0.2-0.1 0.3-0.4 0.3-0.4-3.1-2.2 1.2-2.2 2.3-3.3-3.1-1.8-4-4.3-3.7-7-1.5-0.3-3.1-0.4-4.5 0-1.7 0.6-2.2-0.5-2.9-1 0.6-0.5 0.8-1.1 2.2-1.3 7.6-0.9 15.2-1.7 22.9-2 20-0.7 39.9-0.9 59.9-1 11.9-0.1 23.8 0.4 35.6 1.1 3.6 0.2 7.1-0.9 10.7-0.5 7.9 0.9 15.8 0.3 23.8 0.5 7.3 0.1 14.4-0.6 21.7-0.1 12.2 0.9 24.4 0.3 36.7 0.6 9.4 0.3 18.9 0.4 28.2 1 11.9 0.7 23.8 1.3 35.6 2 11.1 0.6 22.4 0.5 33.3 2 7.1 1 14.4 1.1 21.3 2.4 4 0.7 8.2 1.6 12.4 1.9 2.2 0.2 0.9 1 1.5 1.5-4-0.8-8-0.8-12.1-1.4-4.3-0.7-8.5-1-12.8 0.4-2.9 1-6.3 0.2-9.3-0.1-10.2-1.1-20.6-1.6-30.8-2.4-12.1-0.9-24.3-1.4-36.4-2.1-9.9-0.6-20-0.5-29.9-1-11.4-0.6-22.7 0-34.2-0.5-6.3-0.3-12.3-0.3-18.5-0.4-4.2-0.1-8.4 1.3-12.8 0.3 0.6 0.2 1.2 0.7 1.9 0.7 10.5 0 20.9 1.9 31.6 1.7 6.5-0.1 13.1 0.2 19.8 0.8 3.2 0.3 6.3-0.4 9.7-0.1 7.6 0.7 15.5 0.5 23 0.8 12.4 0.5 24.7 0.4 37.1 1.1 13.3 0.7 26.8 2.1 39.9 4.1 6.2 0.9 12.7 1.5 19.2 1.7 0.6 0 1.1 0.1 1.5 0.5-4.6 0.1-9.3 0-13.9-0.5-0.6 1.1 1.4 0.9 1.5 1.9-9.7 1.6-19.6-1.4-29.4-0.1 2.2 1.4 5.1 1 7.4 1 7.3 0.1 14.1 1.3 21.2 1.9 2.8 0.3 5.9 0 8.5 0.8 1.5 0.5 4.6-1.1 4.9 1.3 4-0.7 7.3 1.5 11.1 1.2 4-0.3 7.7 0.6 11.6 1.1 0.8 0.1 2.2 0.3 2.3 1.1 0.2 1-1.1 1.2-2 1.5-3.4 1-6.7-0.4-10.1-0.4-0.9 0-2-0.2-2.9-0.2-9.4 0.1-18.8-1.3-28.3-1.8-6-0.4-12.1-0.9-18.1-1.3 0 0.2 0 0.4-0.2 0.6 6.1 0.5 12.1 1.4 18.3 0.7z"></path>
                  </svg>
                </span>
              </span>
            </h1>

            <p className="my-4 md:my-6 text-sm sm:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 px-4 lg:px-0">
              Online learning and teaching marketplace with 5K+ courses &amp; 10M students. Taught by experts to help you acquire new skills.
            </p> 

            {/* Features List - Responsive gap and text size */}
            <ul className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8 text-slate-700 font-medium text-sm sm:text-base px-4 lg:px-0">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800" /> Learn with experts
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800" /> Get certificate
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800" /> Get membership
              </li>
            </ul>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 px-4 lg:px-0">
              <Link href="#" className="bg-red-50 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3.5 rounded-md font-bold transition-all duration-300 w-full sm:w-auto text-center shadow-sm">
                Get Started
              </Link>

              <Link href="#" className="flex items-center gap-3 group w-full sm:w-auto justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 shadow-sm">
                  <Play className="w-4 h-4 text-blue-600 group-hover:text-white fill-current transition-colors" />
                </div>
                <span className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">Watch video</span>
              </Link>
            </div>
          </div>

          {/* Right Column - Images & Floating Elements */}
          <div className="w-full lg:w-7/12 xl:w-1/2 relative mt-16 lg:mt-0 text-center flex justify-center">

            {/* Dark Blue Blob Background - Fixed responsive classes */}
            <figure className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-0 w-full max-w-[550px]">
              <svg className="w-full h-auto" viewBox="0 0 554 544">
                <path className="fill-[#1d3b53]" d="M423.3,77.2c49.5,32.5,100.4,67.2,118.4,114.5s3.5,107.1-15.4,165.7c-18.7,58.6-41.8,116.1-84,148.6 c-42.5,32.8-104.2,40.2-163.8,37.3c-59.5-3.2-116.8-17.1-164.7-47.9c-48.3-30.6-87.2-78.2-102-131.6C-3,310.5,6.6,251,25.3,194.7 C43.6,138,70.7,84.3,114.1,49.5C157.2,14.8,216.7-1,270.8,6.4C324.8,14.2,373.4,44.7,423.3,77.2z"></path>
              </svg>
            </figure>

            {/* White Swirl Background Over Blob - Fixed responsive classes */}
            <figure className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-12 z-0 hidden sm:block w-full max-w-[686px]">
              <svg className="w-full h-auto" viewBox="0 0 686 298">
                <path className="fill-white" d="M60.9,0L0.1,0C0,0,0,0,0,0.1c1.5,5,0,249.5,11.5,297.9c0,0,649.1,16.1,669-4.6c0,0,0,0,0,0c0.2-0.4,1.2-177.2,4.2-293.3 c0,0,0-0.1-0.1-0.1l-72.9,0c0,0-0.1,0-0.1,0c-0.8,3-43.3,162.3-105.9,209.1c0,0-111.4,87.2-309.9-6C195.9,203.1,66.1,143.2,60.9,0 C61,0,60.9,0,60.9,0z"></path>
              </svg>
            </figure>

            {/* Main Student Image - Responsive sizing */}
            <div className="relative z-10 w-[90%] sm:w-[75%] md:w-[60%] lg:w-[80%] max-w-[500px]">
              <Image
                src={Images.HeroSection.BGHero}
                alt="Student holding books"
                width={600}
                height={700}
                className="w-full h-auto object-contain drop-shadow-xl"
                priority
              />
            </div>

            {/* Floating Elements with Framer Motion for Premium Feel */}

            {/* Floating React Icon (Left) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="p-2 sm:p-3 bg-white shadow-xl rounded-xl absolute top-[25%] sm:top-1/3 -left-4 sm:-left-8 lg:-left-12 -translate-y-1/2 z-20"
            >
              <Image src={Images.HeroSection.ReactIcon} alt="React" width={40} height={40} className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain" />
            </motion.div>

            {/* Floating Angular Icon (Top Right) */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
              className="p-2 sm:p-3 bg-white shadow-xl rounded-xl absolute top-5 sm:top-0 right-0 sm:mr-8 lg:mr-12 z-20"
            >
              <Image src={Images.HeroSection.NewStd} alt="Angular" width={35} height={35} className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 object-contain" />
            </motion.div>

            {/* Floating Figma Icon (Bottom Right) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="p-2 sm:p-3 bg-white shadow-xl rounded-xl absolute top-2/3 right-0 -translate-y-1/2 mt-8 sm:mt-16 lg:mt-24 mr-2 sm:mr-8 z-20 hidden sm:block"
            >
              <Image src={Images.HeroSection.FigmaIcon} alt="Figma" width={24} height={34} className="w-4 h-6 sm:w-5 sm:h-7 object-contain" />
            </motion.div>

            {/* Floating 'Our daily new students' Badge (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-2.5 sm:p-4 bg-emerald-500 rounded-xl sm:rounded-2xl shadow-2xl absolute top-1/4 sm:top-1/3 right-0 -translate-y-1/2 translate-x-4 sm:-mr-4 lg:-mr-8 z-20 hidden md:block"
            >
              <p className="text-white text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Our daily new students</p>
              <div className="flex -space-x-2 sm:-space-x-3">
                <Image src={Images.HeroSection.NewStd} alt="Avatar" width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover" />
                <Image src={Images.HeroSection.NewStd2} alt="Avatar" width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover" />
                <Image src={Images.HeroSection.NewStd3} alt="Avatar" width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover" />
                <Image src={Images.HeroSection.NewStd4} alt="Avatar" width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover" />
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-white text-[8px] sm:text-[10px] font-bold z-10">
                  1K+
                </div>
              </div>
            </motion.div>

            {/* Floating 'Congratulations' Badge (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="p-3 sm:p-4 bg-white/30 backdrop-blur-md border border-white/40 shadow-2xl rounded-xl sm:rounded-2xl absolute bottom-0 left-0 mb-4 sm:mb-8 lg:mb-12 ml-2 sm:ml-4 lg:ml-8 z-30 flex items-center max-w-[220px] sm:max-w-[280px]"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="text-left ml-3 sm:ml-4">
                <h6 className="mb-0 text-white font-bold flex items-center gap-1 sm:gap-2 text-xs sm:text-base">
                  Congratulations <Check className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 bg-white rounded-full p-0.5" />
                </h6>
                <p className="mb-0 text-[10px] sm:text-sm text-white/90 leading-tight">Your admission completed</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}