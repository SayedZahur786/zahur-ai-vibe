
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-white">
            zahur
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white/80 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/services" className="text-white/80 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/vibe" className="text-white/80 hover:text-white transition-colors">
              Vibe
            </Link>
            <Link to="/achievements" className="text-white/80 hover:text-white transition-colors">
              Achievements
            </Link>
            <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <a 
            href="/resume.pdf" 
            download
            className="bg-white text-purple-900 px-6 py-2 rounded-full font-medium hover:bg-white/90 transition-colors"
          >
            Get Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
