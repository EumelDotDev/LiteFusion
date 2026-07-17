import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Service Areas', path: '/service-areas' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/images/polymer-logo.png" alt="LiteFusion Logo" className="h-10 w-10 object-contain" />
              <span className="font-bold text-2xl text-brand-dark tracking-tight">Lite<span className="text-brand-secondary">Fusion</span></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? 'text-brand-primary font-semibold border-b-2 border-brand-primary'
                    : 'text-brand-dark hover:text-brand-primary'
                } transition-colors duration-200 py-2 text-sm uppercase tracking-wider`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-primary hover:bg-[#32CD32] text-brand-dark font-bold py-2 px-6 rounded-md shadow transition duration-300 transform hover:-translate-y-0.5"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-brand-dark hover:text-brand-primary focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${
                  isActive(link.path)
                    ? 'text-brand-primary bg-brand-light font-semibold'
                    : 'text-brand-dark hover:bg-brand-light hover:text-brand-primary'
                } block px-3 py-3 rounded-md text-base uppercase tracking-wider transition-colors duration-200`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center mt-4 bg-brand-primary text-brand-dark font-bold px-3 py-4 rounded-md shadow-sm"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
