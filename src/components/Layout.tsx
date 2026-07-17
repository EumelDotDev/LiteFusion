import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-brand-dark bg-white">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
