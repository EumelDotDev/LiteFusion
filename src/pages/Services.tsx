import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, ShieldCheck, Car, Crosshair, Cog, Layers } from 'lucide-react';

const Services: React.FC = () => {
  const servicesList = [
    {
      title: "Windshield Repair",
      desc: "Fast, mobile repair for chips and cracks. Prevent spreading and restore structural integrity.",
      path: "/services/windshield-repair",
      icon: <Wrench className="h-8 w-8 text-brand-secondary" />
    },
    {
      title: "Windshield Replacement",
      desc: "Full replacements using OEM-quality glass and premium adhesives for maximum safety.",
      path: "/services/windshield-replacement",
      icon: <ShieldCheck className="h-8 w-8 text-brand-secondary" />
    },
    {
      title: "Door Glass Replacement",
      desc: "Shattered side window? We'll clean up the glass and install a brand new door glass panel.",
      path: "/services/door-glass",
      icon: <Car className="h-8 w-8 text-brand-secondary" />
    },
    {
      title: "Backglass Replacement",
      desc: "Rear windshield replacements including precise connection of defrost grids.",
      path: "/services/backglass",
      icon: <Layers className="h-8 w-8 text-brand-secondary" />
    },
    {
      title: "Side View Mirrors",
      desc: "Replace broken side view mirror glass or the entire mirror housing bracket.",
      path: "/services/side-view-mirror",
      icon: <Crosshair className="h-8 w-8 text-brand-secondary" />
    },
    {
      title: "Regulator & Motor",
      desc: "Window stuck down? We replace failing door regulators and motors to restore function.",
      path: "/services/regulator-motor",
      icon: <Cog className="h-8 w-8 text-brand-secondary" />
    }
  ];

  return (
    <div className="bg-brand-light min-h-screen">
      {/* Header */}
      <section className="bg-brand-dark text-white py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1605651586567-9c98864700be?q=80&w=2000&auto=format&fit=crop" alt="Auto glass services" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive, mobile auto glass solutions. From simple chip repairs to full door glass replacements, we come to you.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="bg-brand-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-bold mb-4 text-brand-dark">{service.title}</h2>
                <p className="text-gray-600 flex-grow mb-8 text-lg">{service.desc}</p>
                <Link to={service.path} className="inline-flex items-center font-bold text-brand-primary hover:text-brand-secondary transition-colors text-lg mt-auto">
                  View Service Details <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-3xl font-bold mb-4 text-brand-dark">Not sure what you need?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Give us a call. Our experts will assess your damage over the phone and give you an honest recommendation and free quote.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+18049829828" className="bg-brand-dark text-white hover:bg-gray-800 text-lg font-bold py-4 px-8 rounded-md shadow transition duration-300">
                Call (804) 982-9828
              </a>
              <Link to="/contact" className="bg-brand-primary hover:bg-[#32CD32] text-brand-dark text-lg font-bold py-4 px-8 rounded-md shadow transition duration-300">
                Request Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
