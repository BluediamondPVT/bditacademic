import React from 'react';
import { Eye, Target } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Vision Card */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-blue-50 text-[#031B33] rounded-xl">
                <Eye className="w-7 h-7" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#031B33]">Vision</h3>
            </div>
            
            <p className="text-[#0373C3] font-medium text-sm md:text-base mb-4">
              A clear direction for long-term academic impact.
            </p>
            
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Our Vision is to become a trusted global education partner by enabling access to recognized, technology-driven higher education that supports academic excellence, professional advancement, and lifelong learning. We aim to create an ecosystem where learners from diverse backgrounds can pursue credible qualifications without barriers of geography, affordability, or time.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-blue-50 text-[#031B33] rounded-xl">
                <Target className="w-7 h-7" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#031B33]">Mission</h3>
            </div>
            
            <p className="text-[#0373C3] font-medium text-sm md:text-base mb-4">
              Purpose-driven actions that deliver measurable outcomes.
            </p>
            
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Our Mission is to deliver UGC-approved, NAAC-accredited online degree programs through strong academic partnerships, while making higher education accessible, affordable, and flexible. We are committed to providing structured academic counseling, continuous learner support, and ethical practices that bridge the gap between formal education and industry relevance.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default MissionVision;