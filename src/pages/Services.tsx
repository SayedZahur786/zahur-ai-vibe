
import React, { useEffect, useState } from 'react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: 'AI Development',
      description: 'End-to-end development of AI systems tailored to your business needs, from concept to deployment.',
      icon: '🤖'
    },
    {
      title: 'AI Automation',
      description: 'Automating repetitive tasks and processes using AI to increase efficiency and reduce costs.',
      icon: '⚡'
    },
    {
      title: 'Full Stack Applications',
      description: 'Building comprehensive web applications with modern technologies and AI integration.',
      icon: '💻'
    },
    {
      title: 'Agentic Workflows',
      description: 'Creating intelligent agent-based systems that automate complex business processes.',
      icon: '🔄'
    },
    {
      title: 'AI Integration',
      description: 'Seamlessly integrating AI capabilities into your existing systems and workflows.',
      icon: '🔗'
    },
    {
      title: 'Data Pipeline Design',
      description: 'Building robust data pipelines to ensure your AI systems have the data they need.',
      icon: '📊'
    }
  ];

  const skillAreas = [
    { name: 'NLP', icon: '🗣️' },
    { name: 'ML', icon: '🧠' },
    { name: 'GenAI', icon: '✨' },
    { name: 'Data Science', icon: '📈' }
  ];

  return (
    <div className="min-h-screen pt-24 px-6 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-6xl md:text-8xl font-black text-black mb-6 tracking-tight">
            What I Do
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            I focus on building intelligent systems for businesses, combining cutting-edge AI with practical solutions.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed font-light">{service.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mb-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl font-bold text-black mb-16">Skill Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skillAreas.map((skill, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
              >
                <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                <h3 className="font-bold text-black text-lg group-hover:text-gray-700 transition-colors duration-300">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className={`bg-gradient-to-r from-black to-gray-800 rounded-2xl p-12 text-center shadow-2xl transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Let's discuss how AI can transform your business and create solutions that make a real impact.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Start a Project
          </a>
        </div>

      </div>
    </div>
  );
};

export default Services;
