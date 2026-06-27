'use client';

import React, { useEffect, useState, useRef } from 'react';

const CountUp = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // easeOut cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Statistics = () => {
  const stats = [
    {
      value: 10,
      suffix: '+',
      label: 'YEARS OF EXPERIENCE',
    },
    {
      value: 1000,
      suffix: '+',
      label: 'Students Guided',
    },
    {
      value: 100,
      suffix: '%',
      label: 'UGC Approved',
    },
    {
      value: 'A++',
      suffix: '',
      label: 'NAAC Accredited',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#173F62] via-[#0D2944] to-[#1E293B]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {typeof stat.value === 'number' ? (
                  <CountUp end={stat.value} suffix={stat.suffix} />
                ) : (
                  <span>{stat.value}</span>
                )}
              </h3>
              <p className="text-blue-200 text-xs md:text-sm font-semibold tracking-widest uppercase">
                {stat.label}
              </p>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Statistics;
