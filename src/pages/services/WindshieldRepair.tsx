import React from 'react';
import { ShieldCheck, CheckCircle2, Clock, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const WindshieldRepair: React.FC = () => {
  return (
    <div className="bg-brand-light min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=2000&auto=format&fit=crop" alt="Windshield Repair" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto z-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 bg-brand-primary/20 text-brand-primary font-bold px-4 py-2 rounded-full border border-brand-primary/30">
             <Wrench className="h-5 w-5" /> Expert Mobile Repair
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Windshield Chip & Crack Repair</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Stop the damage before it spreads. Fast, professional, and often 100% covered by your insurance with zero out-of-pocket cost.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-brand-primary hover:bg-[#32CD32] text-brand-dark font-bold py-4 px-8 rounded-md shadow-lg transition duration-300 text-lg">
              Book Repair Now
            </Link>
            <a href="tel:+18049829828" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-4 px-8 rounded-md shadow transition duration-300 text-lg backdrop-blur-sm">
              Call (804) 982-9828
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark">Don't Wait Until It's Too Late</h2>
              <p className="text-lg text-gray-600 mb-6">
                A small rock chip or star break might seem harmless, but extreme temperatures and road vibrations will quickly cause it to spread into a massive crack. Once the damage exceeds a few inches, the entire windshield must be replaced.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our advanced polymer resin technology injects directly into the damage, curing under UV light to restore the glass's structural integrity and significantly improve visibility.
              </p>
              
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
                <h3 className="font-bold text-xl mb-4 text-brand-dark">The LiteFusion Advantage:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Clock className="h-6 w-6 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-800">Under 45 Minutes</span>
                      <p className="text-gray-600 text-sm">You won't be sitting in a waiting room all day.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ShieldCheck className="h-6 w-6 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-800">Retain Original Seal</span>
                      <p className="text-gray-600 text-sm">Keeping your factory windshield seal is the safest option.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-800">100% Satisfaction</span>
                      <p className="text-gray-600 text-sm">Guaranteed to pass state inspections and hold up against weather.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
               <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded shadow z-20">BEFORE</div>
               <div className="absolute top-4 right-4 bg-brand-primary text-brand-dark px-3 py-1 text-xs font-bold rounded shadow z-20">AFTER</div>
               
               <div className="flex h-[500px]">
                 <div className="w-1/2 relative overflow-hidden border-r-2 border-white">
                    <img src="/images/windshield-damage.png" alt="Damaged Windshield" className="absolute h-full max-w-none w-[200%] object-cover object-left" />
                 </div>
                 <div className="w-1/2 relative overflow-hidden">
                    <img src="/images/windshield-repaired.png" alt="Repaired Windshield" className="absolute h-full max-w-none w-[200%] object-cover object-right -left-full" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Banner */}
      <section className="bg-brand-primary/10 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Did You Know? Repairs Are Often FREE.</h2>
          <p className="text-lg text-gray-600 mb-8">
            Because a repair is much cheaper than a full replacement, most insurance companies will waive your comprehensive deductible. We handle the claims process for you!
          </p>
          <Link to="/insurance" className="inline-block bg-brand-dark text-white font-bold py-3 px-8 rounded-md shadow hover:bg-gray-800 transition duration-300">
            Learn About Insurance Claims
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WindshieldRepair;
