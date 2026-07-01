'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Images } from '@/assets';

// Import Lightbox and its CSS
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// Optional: Add zoom plugin if you want pinch-to-zoom
import Zoom from "yet-another-react-lightbox/plugins/zoom";

// Data Mapping
const galleryItems = [
    { id: 1, image: Images.GalleryImages.Gallery1, alt: 'Campus Building' },
    { id: 2, image: Images.GalleryImages.Gallery2, alt: 'Students Group Study' },
    { id: 3, image: Images.GalleryImages.Gallery3, alt: 'Annual Event' },
    { id: 4, image: Images.GalleryImages.Gallery4, alt: 'Library' },
    { id: 5, image: Images.GalleryImages.Gallery5, alt: 'Graduation Day' },
    { id: 6, image: Images.GalleryImages.Gallery6, alt: 'Sports Ground' },
];

export function GallerySection() {
    // Lightbox state
    const [index, setIndex] = useState(-1);

    // Convert static image objects to Lightbox slide format
    const slides = galleryItems.map((item) => ({
        src: item.image.src, // Access the actual URL from static import
        alt: item.alt,
        width: item.image.width,
        height: item.image.height
    }));

    return (
        <section className="py-20 bg-white font-sans">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Our <span className="text-[#3B82F6]">Gallery</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Explore our campus, events, and student activities.
                    </p>
                </div>

                {/* Improved Symmetrical Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {galleryItems.map((item, idx) => (
                        <div
                            key={item.id}
                            // Standardizing aspect ratio to keep grid clean, and adding cursor-pointer for Lightbox
                            className="relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                            onClick={() => setIndex(idx)} // Open lightbox on click
                        >
                            <Image
                                src={item.image}
                                alt={item.alt}
                                fill
                                className="object-cover object-top transform transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                            />

                            {/* Premium Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                <div className="p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full flex justify-between items-center">
                                    <p className="text-white font-semibold text-base drop-shadow-md">
                                        {item.alt}
                                    </p>
                                    {/* Subtle zoom icon hint */}
                                    <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Lightbox Component */}
            <Lightbox
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={slides}
                plugins={[Zoom]} // Added Zoom functionality
                carousel={{ finite: false }} // Loop through images
                animation={{ fade: 250 }}
            />
        </section>
    );
}