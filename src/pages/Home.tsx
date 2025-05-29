
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Code, Brain, Sparkles } from 'lucide-react';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const floatingIcons = [
    { Icon: Code, delay: '0s', x: '10%', y: '20%' },
    { Icon: Brain, delay: '1s', x: '85%', y: '30%' },
    { Icon: Sparkles, delay: '2s', x: '15%', y: '70%' },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Background Icons */}
      {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <div
          key={index}
          className="absolute text-gray-200 opacity-20 animate-pulse"
          style={{
            left: x,
            top: y,
            animationDelay: delay,
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <Icon size={60} />
        </div>
      ))}

      <div className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Profile Picture Placeholder */}
          <div className={`mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 mx-auto mb-8 flex items-center justify-center shadow-2xl border-4 border-white">
              <span className="text-6xl text-gray-700 font-bold">SZ</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black text-black mb-6 tracking-tight leading-none">
              SAYED
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-6xl font-light text-gray-600 mb-8 tracking-wide">
              AI Developer
            </h2>
          </div>

          {/* Description */}
          <div className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
              I'm a simple guy developing AI systems and exploring through datasets.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Link 
              to="/about"
              className="bg-black text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Learn More
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-black text-black px-10 py-4 rounded-full font-medium text-lg hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1100 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex flex-col items-center">
              <span className="text-gray-500 text-sm mb-2 font-light">Scroll to explore</span>
              <ArrowDown className="w-6 h-6 text-gray-400 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Scroll Section */}
      <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-5xl font-bold text-black mb-8">Building Tomorrow's AI</h3>
          <p className="text-xl text-gray-600 leading-relaxed font-light mb-12">
            Specializing in intelligent systems that transform businesses and create meaningful impact through data-driven solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Code className="w-12 h-12 text-black mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-black mb-2">Development</h4>
              <p className="text-gray-600 font-light">Building scalable AI solutions</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Brain className="w-12 h-12 text-black mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-black mb-2">Intelligence</h4>
              <p className="text-gray-600 font-light">Machine learning expertise</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Sparkles className="w-12 h-12 text-black mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-black mb-2">Innovation</h4>
              <p className="text-gray-600 font-light">Cutting-edge solutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
