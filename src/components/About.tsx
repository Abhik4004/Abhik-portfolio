import React from "react";
import {
  Code,
  Palette,
  Zap,
  Database,
  Server,
  BrainCircuit,
} from "lucide-react";

const About: React.FC = () => {
  const skills = [
    {
      name: "Frontend",
      icon: <Code size={24} />,
      description: "HTML, React, JavaScript, TypeScript, Tailwind CSS, CSS",
    },
    {
      name: "Design",
      icon: <Palette size={24} />,
      description: "UI/UX, Figma, Photoshop, Illustrator",
    },
    {
      name: "Backend",
      icon: <Zap size={24} />,
      description: "Node.js, FastAPI",
    },
    {
      name: "Databases",
      icon: <Database size={24} />,
      description: "MongoDB, PostgreSQL, MySQL",
    },
    {
      name: "DevOps",
      icon: <Server size={24} />,
      description: "Docker, Kubernetes, CI/CD, Nginx",
    },
    {
      name: "Gen AI",
      icon: <BrainCircuit size={24} />,
      description: "Python, Gemini, LangChain, RAG",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">
              Information Technology Student &<br />
              Aspiring Developer
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate IT student with a love for creating digital
              solutions that make a difference. Currently in my fourth year, I'm
              constantly learning and building projects that challenge me to
              grow as a developer.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My journey started with curiosity about how websites work, and has
              evolved into a deep appreciation for clean code, user experience,
              and the endless possibilities of technology.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                "JavaScript",
                "React",
                "TypeScript",
                "Python",
                "Node.js",
                "SQL",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white border border-gray-300 text-gray-700 text-sm font-medium hover:border-black transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-black mb-6">
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg hover:scale-105 transform group cursor-pointer"
                >
                  <div className="flex items-center mb-3">
                    <div className="text-black transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-black ml-3">
                      {skill.name}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
