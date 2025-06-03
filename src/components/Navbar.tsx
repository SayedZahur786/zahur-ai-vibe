
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-black hover:text-gray-700 transition-colors duration-300">
            Sayed Zahur
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-black transition-all duration-300 relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-black transition-all duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/services" className="text-gray-800 hover:text-black transition-all duration-300 relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/projects" className="text-gray-800 hover:text-black transition-all duration-300 relative group">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/vibe" className="text-gray-800 hover:text-black transition-all duration-300 relative group">
              Vibe
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/achievements" className="text-gray-800 hover:text-black transition-all duration-300 relative group">
              Achievements
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-black transition-all duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
