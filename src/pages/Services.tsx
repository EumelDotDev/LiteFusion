import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Zap, CheckCircle2, FileText, Wrench } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-brand-light min-h-screen">
      {/* Header */}
      <section className="bg-brand-dark text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Services</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Comprehensive, mobile auto glass repair solutions designed to keep you safe and save you money.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* Service 1: Chip Repair */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-primary/20 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-brand-secondary" />
              </div>
              <h2 className="text-3xl font-bold">Windshield Chip Repair</h2>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              A rock chip doesn't have to ruin your day. Our advanced polymer resin technology restores the structural integrity of your windshield in under 30 minutes, preventing the damage from spreading.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <CheckCircle2 className="h-5 w-5 text-brand-primary mr-3" /> Fixes bulls-eyes, stars, and half-moon chips
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle2 className="h-5 w-5 text-brand-primary mr-3" /> Prevents expensive full replacements
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle2 className="h-5 w-5 text-brand-primary mr-3" /> Often 100% covered by insurance
              </li>
            </ul>
            <Link to="/contact" className="inline-block bg-brand-primary text-brand-dark font-bold px-6 py-3 rounded hover:bg-[#32CD32] transition-colors">
              Book Chip Repair
            </Link>
          </div>
          <div className="order-1 lg:order-2">
             <img src="/images/windshield-damage.png" alt="Chip Repair" className="rounded-xl shadow-lg border border-gray-100" />
          </div>
        </div>

        {/* Service 2: Crack Repair */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gray-200 w-full h-80 rounded-xl flex items-center justify-center text-gray-400">
               <ShieldAlert className="h-20 w-20 opacity-20" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-brand-secondary/20 p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-brand-secondary" />
              </div>
              <h2 className="text-3xl font-bold">Windshield Crack Repair</h2>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              Long cracks compromise the safety of your vehicle. Depending on the size and location, many cracks up to 6 inches long can be safely repaired without replacing the entire windshield.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <CheckCircle2 className="h-5 w-5 text-brand-primary mr-3" /> Restores visibility and structural strength
              </li>
              <li className="flex items-center text-gray-700">
                <CheckCircle2 className="h-5 w-5 text-brand-primary mr-3" /> Eco-friendly alternative to throwing away glass
              </li>
            </ul>
            <Link to="/contact" className="inline-block bg-brand-dark text-white font-bold px-6 py-3 rounded hover:bg-gray-800 transition-colors">
              Get Crack Assessment
            </Link>
          </div>
        </div>

        {/* Service 3: Insurance Assistance */}
        <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100">
          <div className="text-center mb-12">
             <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
               <FileText className="h-8 w-8 text-blue-600" />
             </div>
             <h2 className="text-3xl font-bold mb-4">Insurance Claim Assistance</h2>
             <p className="text-gray-600 max-w-2xl mx-auto text-lg">
               Dealing with insurance can be a headache. We make it completely frictionless.
             </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">1. We Contact Your Provider</h3>
              <p className="text-gray-600">We work directly with all major insurance networks.</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">2. Waived Deductibles</h3>
              <p className="text-gray-600">Most providers waive the deductible for repairs, meaning it's free for you.</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl mb-2">3. No Rate Increases</h3>
              <p className="text-gray-600">Filing a glass repair claim typically does not raise your insurance rates.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
