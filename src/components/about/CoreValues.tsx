import React from 'react';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Award, 
  Banknote, 
  Handshake, 
  Briefcase, 
  LifeBuoy, 
  BadgeCheck,
  LucideIcon
} from 'lucide-react';
import coreValuesData from '@/data/coreValue.json';

// Map icon string names to actual Lucide components
const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  HeartHandshake,
  Award,
  Banknote,
  Handshake,
  Briefcase,
  LifeBuoy,
  BadgeCheck,
};

const CoreValues = () => {
  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="container mx-auto px-4 md:px-8 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-[#031B33] mb-3">
          Core Values
        </h2>
        <p className="text-gray-500 mb-12">
          The spirit driving BDIT Academic
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {coreValuesData.map((value, index) => {
            const IconComponent = iconMap[value.icon];
            return (
              <div key={index} className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center">
                {IconComponent && <IconComponent className="w-10 h-10 text-[#0373C3] mb-4" strokeWidth={1.5} />}
                <h3 className="text-xl font-bold text-[#031B33] mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;
