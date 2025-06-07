import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Scrumptious Recipe Planner",
      description: "A smart food planning web app that helps users organize meals and discover recipes. Built with a clean UI using Filament and RESTful Laravel backend.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "Filament", "REST"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Shareex – Shopify Integration",
      description: "A backend system that connects Shopify stores to Shareex.co, enabling automatic order transmission. Integrates ChatGPT logic for smart operations.",
      image: "https://images.pexels.com/photos/11035371/pexels-photo-11035371.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "PHP", "ChatGPT"],
      github: "#",
      live: "https://shareex.technicdev-eg.com/",
      featured: true
    },
    {
      title: "TAS Accounting & ERP System",
      description: "Multi-tenant accounting system with E-invoice integration and scalable financial modules tailored for growing businesses.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "Node.js", "MySQL", "AWS EC2", "Vue.js"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Giftit Gifting Platform",
      description: "A full-featured digital gifting platform designed to manage customizable gift flows and real-time order processing.",
      image: "https://images.pexels.com/photos/207216/pexels-photo-207216.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "Node.js", "Vue.js", "AWS EC2", "MySQL"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Ewysh E-commerce Platform",
      description: "Custom-built shopping platform with advanced UX and scalable backend architecture designed for the Wit Zone1 side project.",
      image: "https://images.pexels.com/photos/5632404/pexels-photo-5632404.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "React", "TypeScript", "AWS EC2", "Node.js"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Zone1 E-Card System",
      description: "Multi-tenant e-card platform for high-volume email campaigns, enabling customized bulk sending of over 10K cards.",
      image: "https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "MySQL", "JavaScript", "AWS RDS", "AWS EC2"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Sabq CMS Migration",
      description: "Migrated and transformed data from MongoDB to structured JSON format to support integration with a new publishing CMS.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "Symfony", "MongoDB"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Trustsec WordPress Shop",
      description: "Security-focused WordPress e-commerce site designed for selling tech and hardware products.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["PHP", "WordPress"],
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.github}
                    className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <Github size={20} className="text-gray-700" />
                  </a>
                  <a 
                    href={project.live}
                    className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <ExternalLink size={20} className="text-gray-700" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Eye size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Other Notable Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.github}
                      className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <Github size={16} className="text-gray-700" />
                    </a>
                    <a 
                      href={project.live}
                      className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <ExternalLink size={16} className="text-gray-700" />
                    </a>
                  </div>
                </div>
                
                <div className="p-5">
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;