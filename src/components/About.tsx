import React from 'react';
import { Code, Layers3, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Backend Engineering",
      description: "8+ years of experience with PHP, Symfony, Laravel, and scalable API development."
    },
    {
      icon: <Layers3 className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Hands-on experience with React, Vue.js, Node.js, and microservices architecture."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "System Optimization",
      description: "Skilled in performance tuning, Dockerization, and cloud deployments (AWS, CI/CD)."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Led remote teams in fast-paced environments and delivered production-ready solutions."
    }
  ];

  return (
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Senior Software Engineer with a Track Record of Excellence
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm Ahmed Alaa, a senior software engineer with over 8 years of experience building robust backend systems
                and modern web applications. I've contributed to major projects in telecom, finance, and SaaS, working with
                Symfony, Laravel, React, Node.js, and cloud-based architectures.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From designing scalable APIs to optimizing performance and leading distributed teams, my focus has always
                been on delivering efficient, maintainable, and impactful software. I thrive in collaborative environments
                and enjoy solving complex challenges with clean code and clear architecture.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not building software, I'm exploring emerging technologies, contributing to side projects, or
                mentoring junior developers.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Symfony & Laravel Expert
              </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                Cloud & DevOps Ready
              </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Remote Collaboration Pro
              </span>
              </div>
            </div>

            {/* Right Content - Highlights */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                  <div
                      key={index}
                      className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="text-blue-600 mb-4">
                      {highlight.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {highlight.description}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;
