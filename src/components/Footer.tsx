
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Vibe', href: '/vibe' },
    { name: 'Achievements', href: '/achievements' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Sayed Zahur</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              AI Developer passionate about building intelligent systems that transform businesses. 
              Specializing in NLP, Machine Learning, and Generative AI solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/SayedZahur786" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/SayedZahur786" 
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:Mohd.24bcs10319@sst.scaler.com" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="font-medium">Email:</span><br />
                Mohd.24bcs10319@sst.scaler.com
              </p>
              <p className="text-gray-400">
                <span className="font-medium">Location:</span><br />
                Scaler School of Technology
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Sayed Zahur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
