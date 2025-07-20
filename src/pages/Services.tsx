
import React from 'react';
import { Bot, Brain, Code, Database, Zap, Target, Users, Rocket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Bot className="w-12 h-12 text-black" />,
      title: "AI Solution Development",
      description: "Custom AI applications tailored to your business needs, from concept to deployment.",
      features: ["Machine Learning Models", "Neural Networks", "Predictive Analytics", "AI Integration"]
    },
    {
      icon: <Brain className="w-12 h-12 text-black" />,
      title: "Voice Assistant Engineering",
      description: "Intelligent conversational interfaces that understand and respond naturally.",
      features: ["Speech Recognition", "Natural Language Processing", "Voice UI Design", "Multi-platform Integration"]
    },
    {
      icon: <Database className="w-12 h-12 text-black" />,
      title: "Computer Vision Systems",
      description: "Advanced image and video analysis solutions for various industries.",
      features: ["Object Detection", "Image Classification", "Real-time Processing", "Custom Vision Models"]
    },
    {
      icon: <Code className="w-12 h-12 text-black" />,
      title: "AI-Powered SaaS",
      description: "Scalable software-as-a-service platforms with integrated AI capabilities.",
      features: ["Cloud Architecture", "API Development", "Scalable Infrastructure", "User Analytics"]
    },
    {
      icon: <Zap className="w-12 h-12 text-black" />,
      title: "Data Engineering",
      description: "Robust data pipelines and infrastructure for AI-driven insights.",
      features: ["Data Pipeline Design", "ETL Processes", "Data Warehousing", "Real-time Analytics"]
    },
    {
      icon: <Target className="w-12 h-12 text-black" />,
      title: "AI Consulting",
      description: "Strategic guidance on AI implementation and digital transformation.",
      features: ["Technology Assessment", "Implementation Strategy", "Team Training", "ROI Analysis"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Understanding your challenges and identifying AI opportunities"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Developing a comprehensive roadmap for AI implementation"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building and rigorously testing AI solutions"
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Launching solutions and providing ongoing maintenance"
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Expert Team",
      description: "Experienced AI professionals dedicated to your success"
    },
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "Rapid Delivery",
      description: "Efficient development cycles for faster time-to-market"
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Proven Results",
      description: "Track record of successful AI implementations"
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6 mb-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 font-display">
            Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive AI solutions designed to transform your business and drive innovation
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-12 text-center font-display">What I Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-700 text-sm flex items-center">
                      <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-12 text-center font-display">My Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div 
                key={index}
                className="text-center"
              >
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-black mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-12 text-center font-display">Why Choose Me</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-6">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-4xl font-bold text-black mb-6 font-display">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can transform your business and create new opportunities for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-black text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              Start Your Project
            </a>
            <a 
              href="/contact" 
              className="border-2 border-black text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-black hover:text-white transition-all duration-300 hover:scale-105"
            >
              Fill Enquiry Form
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
