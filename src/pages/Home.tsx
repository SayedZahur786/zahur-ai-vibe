
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl text-white">SZ</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight">
          SAYED
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-light text-white/80 mb-8">
          AI Developer
        </h2>

        <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          I'm a simple guy developing AI systems and exploring through datasets.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link 
            to="/about"
            className="bg-white text-purple-900 px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105"
          >
            Learn More
          </Link>
          <Link 
            to="/contact"
            className="border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ArrowDown className="w-6 h-6 text-white/50 animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Home;
