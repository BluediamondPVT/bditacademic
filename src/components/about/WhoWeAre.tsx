import React from 'react';
import { Trophy } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <section className="py-10 md:py-24 px-2 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
           
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#031B33] mb-6">
              Who We Are
            </h2>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
            BDIT Academic is the academic education vertical and subsidiary of BDIT Edutech Pvt. Ltd., established to deliver authentic, outcome-oriented higher education through structured online degree programs. We are committed to expanding access to recognized academic qualifications that align with evolving industry and global education standards.
            </p>
            <p className="text-gray-600 leading-relaxed">
            We specialize in offering UGC-approved online undergraduate and postgraduate degree programs in collaboration with top NAAC A+ accredited universities in India, ensuring regulatory compliance, academic rigor, and international acceptance.
            </p>
          </div>

          {/* Right Column (Blue Card) */}
          <div className="flex items-center justify-center">
            <div className="bg-[#0d1f2c] text-white p-8 md:p-12 rounded-xl shadow-xl w-full max-w-4xl relative overflow-hidden">
              {/* Decorative circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <Trophy className="w-10 h-10 text-cyan-300" />
                <h3 className="text-2xl font-semibold">Our Commitment</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed relative z-10">
                We are committed to delivering academic excellence, fostering innovation, and building strong industry connections. We aim to empower students with practical knowledge, critical thinking abilities, and the confidence to achieve their professional goals in a competitive world.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
