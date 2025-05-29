
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

  const projects = [
    {
      name: 'VariaAI',
      description: 'Multilingual AI Voice Agent Platform for Enterprise Automation. Built an AI-powered voice automation platform enabling enterprises to automate outbound communication across Indian and global languages.',
      url: 'https://varia-1.vercel.app/',
      tech: 'AI Voice, NLP, RAG Pipelines'
    },
    {
      name: 'Care Canvas',
      description: 'Your Personalized Skincare Companion. CareCanvas is a smart skincare assistant that simplifies personalized skin care with AI-driven analysis and thoughtful tracking.',
      url: 'https://buildverse-build-ofqgnfbxjukvtcyd35ce2h.streamlit.app/',
      tech: 'Computer Vision, Deep Learning, NLP'
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-6xl md:text-8xl font-black text-black mb-6 tracking-tight">
            About Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            AI Engineer specializing in B2B solutions and SaaS products with a minimalistic approach and sarcastic humor.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          
          {/* Left Column - Background & Education */}
          <div className={`space-y-12 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-black mb-6">Background</h2>
              <p className="text-gray-700 leading-relaxed mb-6 font-light">
                Computer Science student passionate about building AI-driven solutions with real-world impact. Experienced in developing voice assistants, personality-evolving agents, and skincare diagnostic tools.
              </p>
              <p className="text-gray-700 leading-relaxed font-light">
                Skilled in NLP, machine learning, computer vision, and full-stack development. Comfortable working in fast-paced, startup-style environments with a focus on user-centric design.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-black mb-6">Education</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-black pl-6 py-3">
                  <h4 className="font-semibold text-black text-lg">Integrated Program in CS</h4>
                  <p className="text-gray-600 font-light">Scaler School of Technology (2024-28)</p>
                </div>
                <div className="border-l-4 border-gray-300 pl-6 py-3">
                  <h4 className="font-semibold text-black text-lg">Bachelors in Computer Science</h4>
                  <p className="text-gray-600 font-light">Birla Institute of Technology, Pilani (2024-27)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills & Tools */}
          <div className={`space-y-12 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-black mb-8">Technical Skills</h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-black text-lg">{skill.name}</span>
                      <span className="text-gray-600 font-light">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-black to-gray-700 h-3 rounded-full transition-all duration-1000 ease-out group-hover:from-gray-700 group-hover:to-black"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-black mb-6">Languages & Tools</h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Java, JavaScript, React, Vue, Python, PyTorch, TensorFlow, HTML, CSS, Git, GitHub, Postman, Dialog Flow, Microsoft Azure
              </p>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className={`mb-20 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl font-bold text-black text-center mb-16">Key Projects</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
              >
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">{project.name}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed font-light">{project.description}</p>
                <p className="text-gray-500 text-sm mb-6 font-medium">{project.tech}</p>
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
