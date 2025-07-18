import React from "react";
import { Github, ExternalLink, CheckCircle } from "lucide-react";

const Projects: React.FC = () => {
  const completedProjects = [
    {
      title: "Reddit-Persona",
      description:
        "An AI-powered full-stack application that generates a user's persona based on their Reddit profile link.",
      technologies: ["React", "Node.js", "Gemini", "Langchain"],
      githubUrl: "https://github.com/Abhik4004/Reddit-Persona.git",
      liveUrl: "",
    },
    {
      title: "Roadmap Generator",
      description:
        "A generative AI full-stack application that helps students create personalized learning roadmaps for any specified technology.",
      technologies: ["JavaScript", "API Integration", "Chart.js", "CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://gdg-roadmap-generator.vercel.app/",
    },
    {
      title: "Student Attention Modeling",
      description:
        "Uses EEG sensors to record participants' brainwaves in a controlled environment to analyze and model student attention patterns.",
      technologies: ["Brainwaves", "EEG", "Machine Learning", "Python"],
      githubUrl: "",
      liveUrl: "",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 tracking-tight">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        {/* Completed Projects */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <CheckCircle className="text-black mr-3" size={24} />
            <h3 className="text-2xl font-bold text-black">
              Completed Projects
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 hover:border-black transition-colors duration-200 group p-6"
              >
                <h4 className="text-xl font-semibold text-black mb-3 group-hover:text-gray-600 transition-colors duration-200">
                  {project.title}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white border border-gray-300 text-gray-700 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
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
