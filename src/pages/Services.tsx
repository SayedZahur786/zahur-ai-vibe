
import React from 'react';

const Services = () => {
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
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            What I Do
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            I focus on building intelligent systems for businesses, combining cutting-edge AI with practical solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-white/80 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-12">Skill Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skillAreas.map((skill, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="font-bold text-white">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can transform your business and create solutions that make a real impact.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-purple-900 px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105"
          >
            Start a Project
          </a>
        </div>

      </div>
    </div>
  );
};

export default Services;
