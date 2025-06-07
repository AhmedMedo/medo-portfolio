import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Profile Image */}
          <div className="relative mx-auto w-32 h-32 mb-8">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-600">
                AA
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 animate-ping"></div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Ahmed <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Alaa</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Full Stack Developer & Software Engineer
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Passionate about creating innovative solutions and building exceptional digital experiences
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-800 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transform hover:scale-110 transition-all duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;