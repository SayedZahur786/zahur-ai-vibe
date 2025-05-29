
import React from 'react';

const About = () => {
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
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            AI Engineer specializing in B2B solutions and SaaS products with a minimalistic approach and sarcastic humor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Background</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Computer Science student passionate about building AI-driven solutions with real-world impact. Experienced in developing voice assistants, personality-evolving agents, and skincare diagnostic tools.
              </p>
              <p className="text-white/80 leading-relaxed">
                Skilled in NLP, machine learning, computer vision, and full-stack development. Comfortable working in fast-paced, startup-style environments with a focus on user-centric design.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <div className="space-y-3">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold text-white">Integrated Program in CS</h4>
                  <p className="text-white/70">Scaler School of Technology (2024-28)</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-semibold text-white">Bachelors in Computer Science</h4>
                  <p className="text-white/70">Birla Institute of Technology, Pilani (2024-27)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Technical Skills</h2>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-white/70">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-400 to-blue-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Languages & Tools</h3>
              <p className="text-white/80 leading-relaxed">
                Java, JavaScript, React, Vue, Python, PyTorch, TensorFlow, HTML, CSS, Git, GitHub, Postman, Dialog Flow, Microsoft Azure
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Key Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{project.name}</h3>
                <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>
                <p className="text-purple-300 text-sm mb-4">{project.tech}</p>
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
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
