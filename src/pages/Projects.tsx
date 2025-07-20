
import React, { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: 'VariaAI',
      description: 'Multilingual AI Voice Agent Platform for Enterprise Automation. Built an AI-powered voice automation platform enabling enterprises to automate outbound communication across Indian and global languages.',
      image: '/placeholder.svg',
      tech: ['Python', 'LLM', 'Voice AI', 'RAG', 'Microservices'],
      liveUrl: 'https://varia-1.vercel.app/',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'CareCanvas',
      description: 'Your Personalized Skincare Companion. AI-driven skincare assistant that analyzes facial images to detect skin concerns and provides customized daily routines.',
      image: '/placeholder.svg',
      tech: ['Python', 'Computer Vision', 'TensorFlow', 'Streamlit', 'Deep Learning'],
      liveUrl: 'https://buildverse-build-ofqgnfbxjukvtcyd35ce2h.streamlit.app/',
      githubUrl: '#',
      featured: true
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-6xl md:text-8xl font-black text-black mb-6 tracking-tight">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            A showcase of AI-powered solutions I've built to solve real-world problems and transform businesses.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`transform transition-all duration-1000 delay-${(index + 1) * 200} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}>
                
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <span className="text-6xl font-bold text-gray-400">{project.title[0]}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  {project.featured && (
                    <span className="inline-block bg-black text-white text-sm px-4 py-2 rounded-full mb-4">
                      Featured Project
                    </span>
                  )}
                  
                  <h3 className="text-4xl font-bold text-black mb-4">{project.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center space-x-2 border-2 border-black text-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-20 mb-20 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">Want to Work Together?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
              I'm always interested in new challenges and innovative projects. Let's build something amazing together.
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
    </div>
  );
};

export default Projects;
