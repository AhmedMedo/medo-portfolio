import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Intergotelecom",
      location: "Remote – Cyprus",
      period: "Nov 2023 – Present",
      description: [
        "Enhanced a CPaaS platform with new features and improved reliability for SMS/voice services",
        "Developed a Shopify SMS plugin from scratch and onboarded merchants",
        "Built a Python-based proxy service for Portaone telecom integration"
      ],
      technologies: ["Laravel", "Node.js", "Vue.js", "Python", "Django", "REST APIs"]
    },
    {
      title: "Senior Software Engineer",
      company: "XM",
      location: "Remote – Cyprus",
      period: "Oct 2022 – Oct 2023",
      description: [
        "Led Symfony 5.4 to 6 upgrade for a large-scale promotions engine",
        "Built and maintained a React-based campaign dashboard",
        "Collaborated with DevOps using Terraform and New Relic"
      ],
      technologies: ["Symfony 6", "React", "Node.js", "TypeScript", "Terraform", "New Relic"]
    },
    {
      title: "Senior Software Engineer",
      company: "Telgani",
      location: "Remote – Saudi Arabia",
      period: "Dec 2021 – Oct 2022",
      description: [
        "Built scalable APIs for a car rental platform using Laravel and Docker",
        "Improved SQL performance by 60%",
        "Created a Node.js service for real-time location data"
      ],
      technologies: ["Laravel", "Node.js", "React", "AWS", "Docker", "TypeScript"]
    },
    {
      title: "Senior Software Engineer",
      company: "Brimore",
      location: "Egypt",
      period: "Mar 2021 – Oct 2021",
      description: [
        "Developed a Laravel-based go-to-market platform with automated COD calculations",
        "Contributed to inventory management using GoLang and PostgreSQL",
        "Improved operational efficiency by resolving system bugs"
      ],
      technologies: ["Laravel", "GoLang", "PostgreSQL", "React", "Redux"]
    },
    {
      title: "Senior Software Engineer",
      company: "Sulfah",
      location: "Saudi Arabia",
      period: "Dec 2019 – Mar 2021",
      description: [
        "Built loan management portal with Vue.js and Laravel",
        "Developed OAuth2-based role access control system",
        "Redesigned authentication flow for better security"
      ],
      technologies: ["Laravel", "Vue.js", "OAuth2", "Node.js"]
    },
    {
      title: "Senior Software Engineer",
      company: "Pentavalue",
      location: "Egypt",
      period: "Jan 2018 – Dec 2019",
      description: [
        "Developed backend APIs and push notifications for a pharmacy app (MEDawi)",
        "Built a service booking system with payment integration (ServU)"
      ],
      technologies: ["Phalcon", "Firebase", "React Native", "Symfony"]
    }
  ];

  return (
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              My professional journey across backend, full stack, and systems engineering roles.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-4 text-gray-600 mb-2">
                          <div className="flex items-center gap-1">
                            <ExternalLink size={16} />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-blue-600">
                          <Calendar size={16} />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                        <ul className="space-y-2">
                          {exp.description.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-600">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{item}</span>
                              </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                              <span
                                  key={idx}
                                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                              >
                          {tech}
                        </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Experience;
