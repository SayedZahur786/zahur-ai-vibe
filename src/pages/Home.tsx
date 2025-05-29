
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Code, Brain, Sparkles, Github, Linkedin, Mail } from 'lucide-react';

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

      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-black text-black mb-4 tracking-tight leading-none font-display">
                SAYED<br />ZAHUR
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-gray-600 mb-6 tracking-wide">
                AI Developer
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8 leading-relaxed font-light">
                I'm a simple guy developing AI systems and exploring through datasets.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <Link 
                to="/about"
                className="bg-black text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Learn More
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-black text-black px-8 py-3 rounded-full font-medium text-lg hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://github.com/SayedZahur786" className="text-gray-600 hover:text-black transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/SayedZahur786" className="text-gray-600 hover:text-black transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:Mohd.24bcs10319@sst.scaler.com" className="text-gray-600 hover:text-black transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Picture */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 mx-auto flex items-center justify-center shadow-2xl border-8 border-white">
                <span className="text-8xl text-gray-700 font-bold">SZ</span>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-black rounded-full flex items-center justify-center">
                <Code className="text-white" size={32} />
              </div>
            </div>
          </div>
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

      {/* About Preview Section */}
      <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-5xl font-bold text-black mb-8">Building Tomorrow's AI</h3>
          <p className="text-xl text-gray-600 leading-relaxed font-light mb-12 max-w-4xl mx-auto">
            Specializing in intelligent systems that transform businesses and create meaningful impact through data-driven solutions. From voice assistants to computer vision, I build AI that works.
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

      {/* Stats Section */}
      <div className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">2+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-400">Technologies</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
