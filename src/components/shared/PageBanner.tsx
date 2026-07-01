import React from 'react';

interface PageBannerProps {
  title: string;
  description?: string;
  backgroundImage?: string;
}

const PageBanner = ({ 
  title, 
  description, 
  backgroundImage = '/images/banner-img.jpg' 
}: PageBannerProps) => {
  return (
    <section 
      className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] bg-cover bg-center flex items-center pt-20" 
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Dark Gradient Overlay */} 
      <div className="absolute inset-0 bg-linear-to-r from-[#031B33]/95 via-[#0A3D66]/80 to-transparent"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-white">
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-4 font-sans">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-xs md:text-base font-medium">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageBanner;
