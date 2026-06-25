// src/app/(legal)/privacy-policy/page.tsx
import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-32 md:py-40 max-w-4xl font-sans">
      <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
        Privacy <span className="text-[#3B82F6]">Policy</span>
      </h1>
      
      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">1. Introduction</h2>
          <p>
            Welcome to BDIT Academic. We value your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.
          </p>
        </section>
        
        {/* Aap apna actual privacy policy content yahan baad mein daal sakte hain */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">2. Data Collection</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you including Identity Data, Contact Data, and Usage Data.
          </p>
        </section>
      </div>
    </main>
  );
}