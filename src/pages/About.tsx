
import React from 'react';
import { Code, Brain, Heart, BookOpen, Camera, Gamepad2, Music, Users } from 'lucide-react';

const About = () => {
  const interests = [
    { name: 'Coding', icon: <Code className="w-6 h-6" /> },
    { name: 'AI Research', icon: <Brain className="w-6 h-6" /> },
    { name: 'Teaching', icon: <Users className="w-6 h-6" /> },
    { name: 'Reading', icon: <BookOpen className="w-6 h-6" /> },
    { name: 'Photography', icon: <Camera className="w-6 h-6" /> },
    { name: 'Gaming', icon: <Gamepad2 className="w-6 h-6" /> },
    { name: 'Music', icon: <Music className="w-6 h-6" /> },
    { name: 'Community Building', icon: <Heart className="w-6 h-6" /> },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Constantly exploring new technologies and methodologies to stay at the forefront of AI development.'
    },
    {
      title: 'Collaboration',
      description: 'Building strong relationships and working effectively with diverse teams to achieve common goals.'
    },
    {
      title: 'Excellence',
      description: 'Striving for the highest quality in every project and continuously improving my skills and knowledge.'
    },
    {
      title: 'Impact',
      description: 'Focusing on creating solutions that make a meaningful difference in people\'s lives and businesses.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6 bg-gradient-to-br from-white via-gray-50 to-white mb-16">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 font-display">
            About Me
          </h1>
          <p className="text-xl text-gray-600">
            Get to know the person behind the code
          </p>
        </div>

        {/* Personal Story */}
        <div className="mb-20">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-black mb-6 font-display">My Journey</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              I'm Sayed Zahur, an AI Developer currently studying at Scaler School of Technology. 
              My passion for artificial intelligence began with a simple curiosity about how machines 
              can learn and make decisions. This curiosity has evolved into a deep commitment to 
              building intelligent systems that solve real-world problems.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Throughout my journey, I've had the privilege of working on diverse projects ranging 
              from voice assistants to computer vision applications. Each project has taught me 
              something new and reinforced my belief that AI has the power to transform how we 
              live and work.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Beyond technical skills, I'm passionate about sharing knowledge and building 
              communities. As a core member of our AI & ML Club, I help organize events and 
              workshops that bring together like-minded individuals to learn and grow together.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-12 text-center font-display">Core Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-black mb-4">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interests & Hobbies */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-12 text-center font-display">Interests & Hobbies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 shadow-md"
              >
                <div className="text-black mb-3 flex justify-center">
                  {interest.icon}
                </div>
                <span className="text-black font-medium">{interest.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-black to-gray-800 rounded-xl p-12 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-6 font-display">Let's Connect</h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            I'm always excited to connect with fellow developers, discuss new projects, 
            or explore opportunities to collaborate on innovative AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact"
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
            <a 
              href="https://linkedin.com/in/SayedZahur786"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
