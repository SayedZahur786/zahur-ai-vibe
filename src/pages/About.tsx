
import React, { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'Generative AI', level: 95 },
    { name: 'Data Science', level: 80 },
    { name: 'Full Stack', level: 90 },
    { name: 'Machine Learning', level: 90 }
  ];

  return (
    <div className="min-h-screen pt-24 px-6 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-6xl md:text-8xl font-black text-black mb-6 tracking-tight">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            A passionate AI developer with a minimalistic approach and sarcastic humor, building intelligent solutions for the future.
          </p>
        </div>

        {/* Bio Section */}
        <div className={`mb-20 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <h2 className="text-4xl font-bold text-black mb-8">Who I Am</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg font-light">
              <p>
                I'm a Computer Science student passionate about building AI-driven solutions with real-world impact. 
                Currently pursuing an Integrated Program in CS at Scaler School of Technology and Bachelors from 
                Birla Institute of Technology, Pilani.
              </p>
              <p>
                My approach to both work and life is minimalist and edgy with a touch of class. I believe in removing 
                the unnecessary to focus on what truly matters. This philosophy extends to my code (clean, efficient, 
                well-documented) as well as my personal style (simple, modern, functional).
              </p>
              <p>
                As an AI Engineer, I specialize in B2B solutions and SaaS products, with expertise in NLP, Machine Learning, 
                Generative AI, and Data Science. I'm comfortable working in fast-paced, startup-style environments with 
                a focus on user-centric design.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className={`mb-20 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl font-bold text-black text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-xl">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-black">{skill.name}</h3>
                  <span className="text-gray-600 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-black h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Project Section */}
        <div className={`mb-20 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-8">Featured Work</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-100">VariaAI</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  An AI calling assistant platform for lead generation, customer care, and automated communication. 
                  Built with advanced NLP capabilities and multi-language support for enterprise clients.
                </p>
                <a 
                  href="https://varia-1.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  View Project
                </a>
              </div>
              <div className="bg-white/10 rounded-xl h-48 flex items-center justify-center">
                <span className="text-6xl font-bold text-white/50">AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className={`transform transition-all duration-1000 delay-900 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-black mb-8">My Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              "I'm driven by momentum, not milestones. It's the act of building, improving, and staying in motion 
              that fuels me more than the outcome itself. Every line of code is an opportunity to create something 
              meaningful and impactful."
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
