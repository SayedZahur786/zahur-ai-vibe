
import React, { useState } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Submitting form with data:', formData);
      
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      console.log('Function response:', { data, error });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-24 px-6 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
            Contact
          </h1>
          <p className="text-xl text-gray-600">
            Let's connect and build something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Get In Touch</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Whether you have a project in mind, want to discuss AI solutions, or just want to chat about technology, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold text-black mb-2">Email</h3>
                <a 
                  href="mailto:Mohd.24bcs10319@sst.scaler.com"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Mohd.24bcs10319@sst.scaler.com
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold text-black mb-4">Social</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/SayedZahur786"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href="https://www.github.com/SayedZahur786"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold text-black mb-2">Response Time</h3>
                <p className="text-gray-700">
                  I typically respond within 24 hours. For urgent inquiries, feel free to reach out on LinkedIn.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-black mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-black font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-black font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-black font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent disabled:opacity-50"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-black font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none disabled:opacity-50"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
