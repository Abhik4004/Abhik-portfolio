import React from "react";
import { ArrowDown } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-white">
      {/* Retro Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-black"></div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 tracking-tight">
            <span className="block">Hello, I'm</span>
            <span className="block text-gray-800">Abhik Ghosh</span>
          </h1>
          <div className="relative inline-block">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Student Developer & Problem Solver
            </p>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToAbout}
            className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-200 font-medium tracking-wide"
          >
            View My Work
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-black text-black px-8 py-3 hover:bg-black hover:text-white transition-colors duration-200 font-medium tracking-wide"
          >
            Download Resume
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-400 hover:text-black transition-colors duration-200"
        >
          <ArrowDown size={24} />
        </button>
      </div>

      <div className="absolute bottom-10 left-10 opacity-20">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-black rounded-full"></div>
          ))}
        </div>
      </div>
      <div className="absolute top-20 right-10 opacity-20">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-black rounded-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
