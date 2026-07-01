import React from 'react';
import PageBanner from '@/components/shared/PageBanner';
import AcademicPrograms from '@/components/degree/AcademicPrograms';

const DegreesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PageBanner 
        title="Choose Your Online Degree Program" 
        description="Explore UGC-recognised, NAAC-accredited online degree programs designed for academic excellence and career advancement."
      />
      
      <AcademicPrograms />
    </div>
  );
};

export default DegreesPage;
