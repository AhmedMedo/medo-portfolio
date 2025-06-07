import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-110"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Ahmed Alaa
            </h3>
            <p className="text-gray-400">
              Full Stack Developer & Software Engineer
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-6">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by Ahmed Alaa
            <span className="mx-2">•</span>
            <span>{new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;