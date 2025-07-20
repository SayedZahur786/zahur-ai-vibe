
import React from 'react';
import { Award, Trophy, Users, BookOpen, Star, Shield } from 'lucide-react';

const Achievements = () => {
  const openSourceAchievements = [
    {
      title: 'Major League Hacking Open-Source Week',
      year: '2025',
      description: 'Active contributor to open-source projects during MLH Open-Source Week',
      icon: <Users className="w-8 h-8 text-black" />
    },
    {
      title: 'Hacktober Fest',
      year: '2024',
      description: 'Successfully completed Hacktoberfest with meaningful contributions',
      icon: <BookOpen className="w-8 h-8 text-black" />
    },
    {
      title: 'AI & ML Club Core Member',
      organization: 'Scaler School of Technology',
      description: 'Building and supporting a growing AI/ML community of 200+ members by organizing hackathons, workshops, and build days',
      icon: <Trophy className="w-8 h-8 text-black" />
    }
  ];

  const certifications = [
    {
      title: 'Tech Excellence Award',
      description: 'Received the prestigious Tech Excellence Award from Scaler for outstanding contributions in AI development.',
      icon: <Award className="w-8 h-8 text-black" />
    },
    {
      title: 'Certified AI Track Engineer',
      description: 'Completed comprehensive AI engineering certification from DataCamp, mastering advanced machine learning concepts.',
      icon: <Star className="w-8 h-8 text-black" />
    },
    {
      title: 'Github Foundations Expert',
      description: 'Recognized as a Github Foundations Expert for contributions and expertise in version control and collaboration.',
      icon: <Shield className="w-8 h-8 text-black" />
    }
  ];

  const simulations = [
    {
      company: 'Skyscanner',
      role: 'Front-end Software Engineering',
      period: 'Oct\'24 – Nov\'24',
      achievements: [
        'Built a web application using React as a front-end engineer',
        'Developed travel date picker using Skyscanner\'s Backpack React library',
        'Customized application and ran automated tests'
      ]
    },
    {
      company: 'JP Morgan',
      role: 'Investment Banking',
      period: 'Jun\'24 - Jul\'24',
      achievements: [
        'Identified ideal M&A target based on strategic and financial criteria',
        'Created comprehensive 2-pager with company profile and auction process summary'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6 bg-gradient-to-br from-white via-gray-50 to-white mb-16">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 font-display">
            Achievements
          </h1>
          <p className="text-xl text-gray-600">
            Notable milestones and contributions in my journey
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-12 text-center font-display">Open Source & Community</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {openSourceAchievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <div className="flex items-center justify-center mb-4">
                  {achievement.icon}
                </div>
                {achievement.year && (
                  <span className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full mb-3 mx-auto block w-fit">
                    {achievement.year}
                  </span>
                )}
                <h3 className="text-xl font-bold text-black mb-2 text-center">{achievement.title}</h3>
                {achievement.organization && (
                  <p className="text-gray-600 text-sm mb-3 font-medium text-center">{achievement.organization}</p>
                )}
                <p className="text-gray-700 text-sm leading-relaxed text-center">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-12 text-center font-display">Certifications & Excellence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg border-2 border-gray-100"
              >
                <div className="flex items-center justify-center mb-4">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-4 text-center">{cert.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed text-center">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black mb-12 text-center font-display">Virtual Job Simulations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {simulations.map((sim, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-xl transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-black">{sim.company}</h3>
                  <span className="text-gray-500 text-sm">{sim.period}</span>
                </div>
                <h4 className="text-gray-700 font-semibold mb-4">{sim.role}</h4>
                <ul className="space-y-2">
                  {sim.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-gray-600 text-sm flex items-start">
                      <span className="text-black mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-black to-gray-800 rounded-xl p-12 text-center shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-6 font-display">More to Come</h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            This section is modular and flexible, ready to showcase new achievements as my journey continues. 
            Every milestone is a step toward building more impactful AI solutions.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Achievements;
