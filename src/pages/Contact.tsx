import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  // Load Calendly script on mount
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head?.appendChild(script);

    return () => {
      head?.removeChild(script);
    };
  }, []);

  return (
    <div className="py-20 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Contact & Book Appointment</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule your mobile windshield repair instantly below, or reach out to us with any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-brand-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <span className="block font-semibold text-brand-dark">Phone</span>
                    <a href="tel:555-123-4567" className="text-gray-600 hover:text-brand-primary transition-colors">(555) 123-4567</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <span className="block font-semibold text-brand-dark">Email</span>
                    <a href="mailto:service@litefusion.com" className="text-gray-600 hover:text-brand-primary transition-colors">service@litefusion.com</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <span className="block font-semibold text-brand-dark">Service Area</span>
                    <span className="text-gray-600">Mobile service covering Cityville & surrounding areas (50-mile radius)</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-brand-primary/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-brand-primary" />
                  </div>
                  <div>
                    <span className="block font-semibold text-brand-dark">Hours</span>
                    <span className="text-gray-600 block">Mon - Fri: 8:00 AM - 6:00 PM</span>
                    <span className="text-gray-600 block">Sat: 9:00 AM - 4:00 PM</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-brand-dark text-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-3">Insurance Claims?</h3>
              <p className="text-gray-300 mb-6">We work directly with most major insurance providers. Often, repair costs are completely covered.</p>
              <button className="w-full bg-white text-brand-dark font-bold py-3 px-4 rounded hover:bg-gray-100 transition-colors">
                Learn About Insurance
              </button>
            </div>
          </div>

          {/* Calendly Embed */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* The inline style height is required by Calendly */}
            <div 
              className="calendly-inline-widget w-full h-[700px]" 
              data-url="https://calendly.com/litefusion-demo/windshield-repair"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
