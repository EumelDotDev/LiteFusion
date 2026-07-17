import React from 'react';
import { MapPin, Navigation, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceAreas: React.FC = () => {
  const cities = [
    "Cityville", "Springfield", "Oak Creek", "Riverdale", 
    "Maplewood", "Sunset Valley", "Pine Ridge", "Willow Creek"
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-brand-dark text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Service Areas</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Mobile auto glass repair coming directly to your home, office, or anywhere you are.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Truck className="h-8 w-8 text-brand-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-6">We Come To You</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Don't waste time driving to a shop and sitting in a waiting room with a broken windshield. LiteFusion operates a fully equipped fleet of mobile repair units.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Whether you're parked at the office, sitting in your driveway, or stranded in a parking lot, our technicians arrive promptly with everything needed to complete a professional repair on the spot.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-brand-primary text-brand-dark font-bold px-6 py-3 rounded hover:bg-[#32CD32] transition-colors">
              <Navigation className="mr-2 h-5 w-5" />
              Request Dispatch
            </Link>
          </div>
          
          <div className="bg-gray-100 rounded-2xl h-[400px] border border-gray-200 relative overflow-hidden flex items-center justify-center">
            {/* Placeholder for an actual map integration or graphic */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
              backgroundImage: 'radial-gradient(circle at center, #4B0082 2px, transparent 2px)',
              backgroundSize: '20px 20px'
            }}></div>
            <div className="text-center z-10">
              <MapPin className="h-16 w-16 text-brand-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800">50-Mile Coverage Radius</h3>
              <p className="text-gray-500">From our central dispatch</p>
            </div>
          </div>
        </div>

        {/* Local SEO Cities Grid */}
        <div className="bg-brand-light p-12 rounded-2xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Cities We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cities.map((city, idx) => (
              <div key={idx} className="flex items-center bg-white p-4 rounded shadow-sm border border-gray-100">
                <MapPin className="h-4 w-4 text-brand-primary mr-2" />
                <span className="font-medium text-gray-700">{city}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm">
            Don't see your city? We may still cover your area. <Link to="/contact" className="text-brand-secondary hover:underline">Contact us to find out.</Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default ServiceAreas;
