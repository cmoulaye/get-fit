import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 border-t border-emerald-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-amber-500 transition-colors duration-300"><FaFacebook size={24} /></a>
          <a href="#" className="hover:text-amber-500 transition-colors duration-300"><FaInstagram size={24} /></a>
          <a href="#" className="hover:text-amber-500 transition-colors duration-300"><FaTwitter size={24} /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Get Fit Casablanca. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;