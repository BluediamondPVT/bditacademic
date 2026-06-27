import React from 'react';

const AboutBanner = () => {
  return (
    <section 
      className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] bg-cover bg-center flex items-center pt-20" 
      style={{ backgroundImage: "url('/images/banner-img.jpg')" }}
    >
      {/* Dark Gradient Overlay */} 
      <div className="absolute inset-0 bg-linear-to-r from-[#031B33]/95 via-[#0A3D66]/80 to-transparent"></div>
      
      {/* Content - Updated to text-white for visibility over the dark gradient */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-sans">
          About BDIT Academic
        </h1>
        <p className="max-w-2xl text-sm md:text-base font-medium ">
          Empowering learners through credible, flexible, and globally recognized higher education.
        </p>
      </div>
    </section>
  );
};

export default AboutBanner;