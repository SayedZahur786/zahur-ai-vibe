
import React, { useEffect, useState } from 'react';
import { Code, Brain, Database, Bot, ChevronRight } from 'lucide-react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const expertise = [
    {
      icon: <Brain className="w-8 h-8 text-black" />,
      title: "Machine Learning",
      description: "Developing predictive models and intelligent algorithms for complex problem-solving"
    },
    {
      icon: <Code className="w-8 h-8 text-black" />,
      title: "AI Development",
      description: "Building scalable AI applications with modern frameworks and best practices"
    },
    {
      icon: <Database className="w-8 h-8 text-black" />,
      title: "Data Engineering",
      description: "Designing robust data pipelines and infrastructure for AI-driven solutions"
    },
    {
      icon: <Bot className="w-8 h-8 text-black" />,
      title: "Voice Assistants",
      description: "Creating intelligent conversational interfaces and voice-powered applications"
    }
  ];

  const journey = [
    {
      period: "2024 - Present",
      title: "AI Developer & Community Leader",
      organization: "Scaler School of Technology",
      description: "Leading AI/ML initiatives while developing cutting-edge solutions and building community of 200+ members."
    },
    {
      period: "2023 - 2024",
      title: "Open Source Contributor",
      organization: "Global Community",
      description: "Active contributor to major open-source initiatives including MLH and Hacktoberfest."
    },
    {
      period: "2022 - 2023",
      title: "Foundation Building",
      organization: "Self-directed Learning",
      description: "Mastered core AI/ML concepts and built foundational projects in various domains."
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6 mb-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 font-display">
            About Me
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A passionate AI developer dedicated to transforming complex problems into intelligent, 
            scalable solutions that make a real-world impact.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <h2 className="text-4xl font-bold text-black mb-8 font-display">My Story</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  My journey into AI began with a simple fascination: how can we make machines understand 
                  and interact with the world the way humans do? This curiosity led me to dive deep into 
                  the realms of machine learning, natural language processing, and computer vision.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Today, I specialize in building AI systems that don't just work in theory, but deliver 
                  real value in production environments. From voice assistants to computer vision platforms, 
                  I focus on the technical execution that transforms innovative ideas into robust, deployable solutions.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  When I'm not coding, you'll find me leading the AI/ML community at Scaler, sharing knowledge, 
                  and helping fellow developers navigate the exciting world of artificial intelligence.
                </p>
              </div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl flex items-center justify-center">
                  <span className="text-6xl text-gray-600 font-bold">AI</span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black rounded-full flex items-center justify-center">
                  <Brain className="text-white" size={40} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-12 text-center font-display">Core Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-black mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-12 text-center font-display">My Journey</h2>
          <div className="space-y-8">
            {journey.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                    {item.period}
                  </span>
                  <ChevronRight className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-gray-600 font-medium mb-3">{item.organization}</p>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-8 font-display">What Drives Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Innovation</h3>
              <p className="text-gray-300">Pushing the boundaries of what's possible with AI technology</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Impact</h3>
              <p className="text-gray-300">Building solutions that create meaningful, real-world value</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Community</h3>
              <p className="text-gray-300">Sharing knowledge and growing together as a community</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
