import React from 'react';
import { ShieldCheck, CheckCircle2, Clock, Car } from 'lucide-react';
import { Link } from 'react-router-dom';

const DoorGlassReplacement: React.FC = () => {
  return (
    <div className="bg-brand-light min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=2000&auto=format&fit=crop" alt="Door Glass Replacement" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto z-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 bg-brand-primary/20 text-brand-primary font-bold px-4 py-2 rounded-full border border-brand-primary/30">
             <Car className="h-5 w-5" /> Expert Mobile Replacement
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Door Glass Replacement</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Shattered side window? We clean up the mess and install brand new, perfectly fitting door glass directly at your location.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-brand-primary hover:bg-[#32CD32] text-brand-dark font-bold py-4 px-8 rounded-md shadow-lg transition duration-300 text-lg">
              Book Replacement Now
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark">Restore Your Security & Comfort</h2>
              <p className="text-lg text-gray-600 mb-6">
                Unlike your front windshield, the side windows on your vehicle are typically made of tempered glass. This means when they break, they shatter into thousands of tiny pieces, leaving your vehicle completely exposed to weather and theft.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mobile technicians don't just replace the glass; we thoroughly vacuum the interior of your door panel and your seats to ensure no dangerous glass shards are left behind.
              </p>
              
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
                <h3 className="font-bold text-xl mb-4 text-brand-dark">The LiteFusion Advantage:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ShieldCheck className="h-6 w-6 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-800">Complete Cleanup</span>
                      <p className="text-gray-600 text-sm">We vacuum inside the door panel and vehicle cabin.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-800">Perfect Function</span>
                      <p className="text-gray-600 text-sm">We test the window regulator to ensure smooth rolling up and down.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-6 w-6 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-800">Same-Day Service</span>
                      <p className="text-gray-600 text-sm">Often available to secure your vehicle as quickly as possible.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl h-full min-h-[400px] relative overflow-hidden flex items-center justify-center border border-gray-200">
               <Car className="h-24 w-24 text-gray-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Banner */}
      <section className="bg-brand-primary/10 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Comprehensive Coverage?</h2>
          <p className="text-lg text-gray-600 mb-8">
            You only pay your deductible! We work directly with your insurance company to process the claim, taking the hassle entirely off your plate.
          </p>
          <Link to="/insurance" className="inline-block bg-brand-dark text-white font-bold py-3 px-8 rounded-md shadow hover:bg-gray-800 transition duration-300">
            Learn About Insurance Claims
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DoorGlassReplacement;
