import React from 'react';
import { MapPin, Navigation, Truck, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceAreas: React.FC = () => {
  const cities = [
    "Richmond", "Midlothian", "Chesterfield", "Henrico", 
    "Mechanicsville", "Short Pump", "Glen Allen", "Petersburg",
    "Chester", "Hopewell", "Colonial Heights", "Ashland"
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-brand-dark text-white py-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1598284534720-305f886f4551?q=80&w=2000&auto=format&fit=crop" alt="Richmond VA Skyline" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">Service Areas</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Providing mobile auto glass repair and replacement directly to your home or office in Richmond, VA and surrounding areas.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <div className="bg-brand-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Truck className="h-8 w-8 text-brand-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Mobile Service in Greater Richmond</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Don't waste time driving to a shop and sitting in a waiting room with a broken windshield. LiteFusion operates a fully equipped fleet of mobile repair units throughout the Richmond area.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Whether you're parked at the office in Short Pump, sitting in your driveway in Midlothian, or stranded in a parking lot downtown, our technicians arrive promptly with everything needed to complete a professional repair on the spot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center bg-brand-primary text-brand-dark font-bold px-8 py-4 rounded hover:bg-[#32CD32] transition-colors shadow-sm">
                <Navigation className="mr-2 h-5 w-5" />
                Request Dispatch
              </Link>
              <a href="tel:+18049829828" className="inline-flex items-center justify-center bg-gray-100 text-gray-800 font-bold px-8 py-4 rounded hover:bg-gray-200 transition-colors">
                <Phone className="mr-2 h-5 w-5" />
                (804) 982-9828
              </a>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-2xl h-[400px] border border-gray-200 relative overflow-hidden flex items-center justify-center">
            {/* Visual representation of service area */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
              backgroundImage: 'radial-gradient(circle at center, #4B0082 2px, transparent 2px)',
              backgroundSize: '20px 20px'
            }}></div>
            <div className="text-center z-10 bg-white/90 p-8 rounded-xl shadow-lg backdrop-blur-sm border border-gray-100">
              <MapPin className="h-16 w-16 text-brand-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brand-dark">Richmond, VA</h3>
              <p className="text-gray-600 mt-2 font-medium">30-Mile Coverage Radius</p>
              <p className="text-gray-500 text-sm mt-1">We come directly to your location</p>
            </div>
          </div>
        </div>

        {/* Local SEO Cities Grid */}
        <div className="bg-brand-light p-10 md:p-16 rounded-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark">Cities We Serve</h2>
            <p className="text-gray-600">Our mobile technicians travel throughout the Greater Richmond region.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city, idx) => (
              <div key={idx} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-brand-primary transition-colors cursor-default">
                <MapPin className="h-5 w-5 text-brand-primary mr-3" />
                <span className="font-semibold text-gray-700">{city}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-10 text-lg">
            Don't see your city listed? We likely still cover your area. <br className="hidden md:block" />
            <Link to="/contact" className="text-brand-secondary font-bold hover:underline">Contact us</Link> to confirm mobile service availability.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ServiceAreas;
