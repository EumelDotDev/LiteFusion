import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Insurance: React.FC = () => {
  return (
    <div className="bg-brand-light min-h-screen">
      {/* Header */}
      <section className="bg-brand-dark text-white py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop" alt="Insurance paperwork" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Insurance Assistance</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Zero out-of-pocket costs on most windshield repairs. We handle the paperwork so you don't have to.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-brand-primary/20 p-3 rounded-full">
              <ShieldCheck className="h-8 w-8 text-brand-primary" />
            </div>
            <h2 className="text-3xl font-bold text-brand-dark">How It Works</h2>
          </div>
          
          <div className="space-y-8 mb-12">
            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="h-6 w-6 text-brand-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800">1. We Contact Your Provider</h3>
                <p className="mt-2 text-gray-600">Give us a call with your insurance card handy. We'll verify your coverage instantly over the phone.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="h-6 w-6 text-brand-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800">2. Waived Deductibles</h3>
                <p className="mt-2 text-gray-600">Most major insurance networks waive the comprehensive deductible for rock chip repairs because it saves them from paying for a full replacement later.</p>
              </div>
            </div>
            <div className="flex">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="h-6 w-6 text-brand-primary" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-800">3. No Rate Increases</h3>
                <p className="mt-2 text-gray-600">Filing a simple glass repair claim typically does not penalize you or raise your monthly insurance premiums.</p>
              </div>
            </div>
          </div>

          <div className="bg-brand-primary/10 p-8 rounded-xl text-center border border-brand-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-brand-dark">Ready to verify your coverage?</h3>
            <p className="text-gray-600 mb-6">Call our friendly dispatch team right now and we'll handle the rest.</p>
            <a href="tel:+18049829828" className="inline-block bg-brand-dark text-white font-bold py-3 px-8 rounded-md shadow hover:bg-gray-800 transition duration-300">
              Call (804) 982-9828
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
