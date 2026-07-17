import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/images/polymer-logo.png" alt="LiteFusion Logo" className="h-8 w-8 object-contain brightness-0 invert" />
              <span className="font-bold text-2xl tracking-tight">Lite<span className="text-brand-primary">Fusion</span></span>
            </div>
            <p className="text-gray-300 mb-6">
              Fusion is the Solution! Professional, fast, and mobile windshield repair that keeps you safely on the road.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors font-semibold">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors font-semibold">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-primary transition-colors font-semibold">
                Twitter
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-brand-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-brand-primary transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link to="/service-areas" className="text-gray-300 hover:text-brand-primary transition-colors">Service Areas</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-brand-primary transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-brand-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-brand-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">service@litefusion.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Auto Glass Way<br />Cityville, ST 12345</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white border-b border-gray-700 pb-2 inline-block">Business Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between text-gray-300">
                <span>Mon - Fri:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Saturday:</span>
                <span>9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
            <div className="mt-6 flex items-start text-brand-primary bg-gray-800 p-3 rounded">
              <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="text-sm font-medium">Mobile Service Available During Operating Hours</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} LiteFusion Windshield Repair. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
