import React from 'react';
import Image from 'next/image';
import { Images } from '@/assets';

const OurLegacy = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column (Image) */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl w-full h-[300px] md:h-[400px]">
            {/* Using a dummy image or the local LegacyBg if available */}
            <Image 
              src={Images.LagecyBg || 'https://placehold.co/800x500'} 
              alt="Our Legacy" 
              fill
              className="object-cover"
            />
          </div>
          
          {/* Right Column (Text) */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#031B33] mb-6">
              Our Legacy & Experience
            </h2>
            
            <p className="text-blue-800 font-medium mb-4">
              Built on experience, strengthened by outcomes
            </p>
            
            <p className="text-gray-800 mb-4 text-xs   md:text-base leading-relaxed">
             With over a decade of experience in education, skill development, and student mentoring, BDIT Edutech Pvt. Ltd. has played a significant role in shaping career pathways for thousands of learners. Our background includes delivering skill-based programs and supporting large-scale student job placement initiatives across multiple sectors.
            </p>
            <p className="text-gray-800 text-xs  md:text-base leading-relaxed">
             This strong foundation enables BDIT Academic to combine academic education with practical career guidance, ensuring students are not only qualified but also industry-aware and future-ready.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurLegacy;
