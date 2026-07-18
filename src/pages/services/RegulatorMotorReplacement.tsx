import React from 'react';
import { ShieldCheck, CheckCircle2, Clock, Cog } from 'lucide-react';
import { Link } from 'react-router-dom';

const RegulatorMotorReplacement: React.FC = () => {
  return (
    <div className="bg-brand-light min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=2000&auto=format&fit=crop" alt="Regulator and Motor Replacement" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto z-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 bg-brand-primary/20 text-brand-primary font-bold px-4 py-2 rounded-full border border-brand-primary/30">
             <Cog className="h-5 w-5" /> Expert Mobile Replacement
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Door Regulator & Motor</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Window stuck down? Hearing grinding noises? We replace failing door regulators and motors to restore your window's function.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark">Fix the Problem Inside the Door</h2>
              <p className="text-lg text-gray-600 mb-6">
                When you press your window switch and nothing happens, or you hear a grinding noise and the glass falls down into the door, your window regulator or motor has failed.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mobile technicians will safely remove your interior door panel, extract the broken assembly, and install a brand new high-quality regulator and motor, securing your vehicle from weather and theft.
              </p>
              
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm mb-8">
                <h3 className="font-bold text-xl mb-4 text-brand-dark">The LiteFusion Advantage:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ShieldCheck className="h-6 w-6 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-800">Quality Parts</span>
                      <p className="text-gray-600 text-sm">We use reliable, long-lasting regulators and motors.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-800">Expert Disassembly</span>
                      <p className="text-gray-600 text-sm">We carefully remove door panels without damaging clips or interior trim.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="h-6 w-6 text-brand-primary mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-800">We Come To You</span>
                      <p className="text-gray-600 text-sm">Don't drive with a window stuck down. We come to your location.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl h-full min-h-[400px] relative overflow-hidden flex items-center justify-center border border-gray-200">
               <Cog className="h-24 w-24 text-gray-300" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegulatorMotorReplacement;
