
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Code, Brain, Sparkles, Github, Linkedin, Mail, Star } from 'lucide-react';

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

  const skillAreas = [
    'Machine Learning',
    'Full Stack Development', 
    'Python Development',
    'Deep Learning',
    'Data Science',
    'Computer Vision'
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
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight leading-tight font-display">
                Sayed Zahur
              </h1>
              <h2 className="text-lg md:text-xl font-medium text-gray-600 mb-6 tracking-wide">
                AI Developer
              </h2>
              <p className="text-base md:text-lg text-gray-700 max-w-2xl mb-8 leading-relaxed">
                I'm a simple guy developing AI systems and exploring through datasets.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <Link 
                to="/about"
                className="bg-black text-white px-6 py-3 rounded-full font-medium text-base hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Learn More
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-black text-black px-6 py-3 rounded-full font-medium text-base hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
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
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1100 z-10 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-gray-600 text-sm mb-1 font-medium">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 text-gray-500 animate-bounce" />
          </div>
        </div>
      </div>

      {/* About Preview Section */}
      <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-black mb-8 font-display">Building Tomorrow's AI</h3>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto">
            I specialize in architecting and developing data-driven intelligent systems that deliver meaningful impact. 
            My hands-on expertise spans from voice assistant engineering and computer vision development to building 
            scalable AI-powered platforms. I focus on the technical execution required to transform complex AI concepts 
            into robust, deployable solutions, including those delivered as software-as-a-service (SaaS).
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Code className="w-12 h-12 text-black mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-black mb-2">Development</h4>
              <p className="text-gray-600">Building scalable AI solutions</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Brain className="w-12 h-12 text-black mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-black mb-2">Intelligence</h4>
              <p className="text-gray-600">Machine learning expertise</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Sparkles className="w-12 h-12 text-black mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-black mb-2">Innovation</h4>
              <p className="text-gray-600">Cutting-edge solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-black mb-6 font-display">Technical Expertise</h3>
            <p className="text-xl text-gray-600">My core competencies in AI and development</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {skillAreas.map((skill, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center">
                <h4 className="text-lg font-semibold text-black">{skill}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
