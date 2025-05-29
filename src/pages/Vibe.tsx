
import React from 'react';

const Vibe = () => {
  const hobbies = [
    {
      name: 'Cricket',
      description: 'Playing cricket under open skies',
      icon: '🏏'
    },
    {
      name: 'Cooking',
      description: 'Trying out new recipes and creating good meals',
      icon: '👨‍🍳'
    },
    {
      name: 'Event Planning',
      description: 'Orchestrating events where people come together effortlessly',
      icon: '🎪'
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            My Vibe
          </h1>
          <p className="text-xl text-white/70">
            A glimpse into my personal aesthetic and interests outside of work
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-12 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Philosophy</h2>
          
          <div className="space-y-6 text-white/80 leading-relaxed">
            <p>
              My approach to both work and life is minimalist and edgy with a touch of class.
            </p>
            
            <p>
              I believe in removing the unnecessary to focus on what truly matters. This philosophy extends to my code (clean, efficient, well-documented) as well as my personal style (simple, modern, functional).
            </p>
            
            <p>
              There's a quiet sincerity in the way I approach things—I like giving my full energy to whatever I commit to, whether it's writing code, cooking a good meal, or setting up a well-run event. I'm driven by momentum, not milestones. It's the act of building, improving, and staying in motion that fuels me more than the outcome itself.
            </p>
            
            <p>
              Outside of tech, I find joy in the little rituals—trying out new recipes, playing cricket under open skies, or orchestrating events where people come together effortlessly. I love creating experiences, whether through AI or atmosphere, and I believe organization is an underrated form of art.
            </p>
            
            <p>
              If you ask my close friends, they'll say I'm the person who makes space for people to just be. No social filters, no fear of judgment—just real connection. That same mindset guides how I work: honest effort, genuine curiosity, and an energy that doesn't try to rush the process but enjoys it fully.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">What I Love</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {hobbies.map((hobby, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{hobby.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{hobby.name}</h3>
                <p className="text-white/80">{hobby.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-xl p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">The Core</h3>
          <p className="text-white/80 text-lg leading-relaxed">
            Minimalist by design, maximalist in passion. I create space for authentic connections and meaningful work.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Vibe;
