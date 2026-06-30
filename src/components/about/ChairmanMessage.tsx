import React from 'react';
import Image from 'next/image';
import { Images } from '@/assets';

const ChairmanMessage = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-100 flex justify-center">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#031B33]">
            Chairman&apos;s Message
          </h2>
          <p className="text-gray-800 font-medium text-sm mt-1">
            Leadership rooted in responsibility and vision
          </p>
        </div>

        <div className="bg-white p-3 md:p-12 rounded-3xl shadow-lg border border-gray-100">
          
          <div className="flex items-center gap-4 md:gap-6 mb-6">
            <div className="relative w-12 h-12 md:w-20 md:h-20 rounded-full overflow-hidden shrink-0 border-4 border-blue-50">
              {/* Dummy Image for Chairman */}
              <Image 
                src={Images.Owner} 
                alt="Chairman" 
                width={500}
                height={500}
                // className="h-w-full full object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg md:text-2xl font-semibold text-[#0373C3]">
                Chairman&apos;s / Director&apos;s Message
              </h3>
              <p className="text-gray-700 font-medium text-xs md:text-sm mt-1">
                Leadership rooted in responsibility and vision

              </p>
            </div>
          </div>
          
          <div className="space-y-4 text-gray-700 leading-relaxed text-sm border-l border-[#0373C3] pl-2">
            <p className='text-xs md:text-base'>
              At BDIT Academic, we view education as a strategic foundation for long-term personal and professional growth.
            </p>
            <p className='text-xs md:text-base'>
             Backed by the decade-long legacy of BDIT Edutech Pvt. Ltd., our institution was established to address the growing need for flexible yet credible academic pathways. Through partnerships with UGC-recognized, NAAC A+ accredited universities, we ensure learners receive authentic qualifications supported by ethical practices and strong academic governance.
            </p>
            <p className='text-xs md:text-base'>
            Our focus remains on affordability, transparency, and continuous student support—ensuring that every learner we serve is guided with integrity and purpose. As we expand our academic footprint nationally and internationally, our commitment to quality, trust, and learner success remains unwavering.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ChairmanMessage;
