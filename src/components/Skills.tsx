import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "Vue.js", level: 90 },
        { name: "React", level: 60 },
        { name: "TypeScript", level: 60 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "SCSS", level: 85 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Laravel", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 },
        { name: "Python", level: 80 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 95 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Terraform", level: 50 },
        { name: "Jest", level: 80 },
        { name: "GraphQL", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "JavaScript", "HTML5", "CSS3", "Redux", "REST APIs", "GraphQL", 
              "Firebase", "Vercel", "Netlify", "Webpack", "Vite", "ESLint",
              "Prettier", "Storybook", "Cypress", "React Native"
            ].map((tech, index) => (
              <span 
                key={index}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;