import React from 'react';
import { Target, Users, Shield, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-brand-dark text-white py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/images/polymer-logo.png" alt="Background pattern" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About LiteFusion</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Driven by innovation. Grounded in safety. Focused on you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-brand-dark">Our Story</h2>
            <p className="text-gray-600 mb-4 text-lg">
              LiteFusion was founded with a simple realization: auto glass repair was unnecessarily complicated for drivers. When a rock hits your windshield, you shouldn't have to rearrange your entire day to sit in a repair shop waiting room.
            </p>
            <p className="text-gray-600 text-lg">
              We built LiteFusion around mobile convenience and advanced polymer repair technology. Our proprietary resin mimics the molecular structure of glass, ensuring a repair that isn't just a cosmetic fix, but a structural restoration. "Fusion is the Solution" isn't just our slogan; it's the science behind our work.
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center p-8 border border-gray-200">
            <img src="/images/polymer-logo.png" alt="LiteFusion Technology" className="h-full object-contain opacity-50" />
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-dark">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-brand-light p-8 rounded-xl text-center">
              <Shield className="h-10 w-10 text-brand-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Safety First</h3>
              <p className="text-gray-600">Your windshield is a critical safety component. We restore it to factory-level structural integrity.</p>
            </div>
            <div className="bg-brand-light p-8 rounded-xl text-center">
              <Clock className="h-10 w-10 text-brand-secondary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Convenience</h3>
              <p className="text-gray-600">We respect your time by coming to you, wherever you are, when it fits your schedule.</p>
            </div>
            <div className="bg-brand-light p-8 rounded-xl text-center">
              <Target className="h-10 w-10 text-brand-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Quality</h3>
              <p className="text-gray-600">We use only the highest-grade resins and equipment for a repair that lasts a lifetime.</p>
            </div>
            <div className="bg-brand-light p-8 rounded-xl text-center">
              <Users className="h-10 w-10 text-brand-secondary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Integrity</h3>
              <p className="text-gray-600">Honest assessments. If we can't safely repair it, we'll tell you upfront.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
