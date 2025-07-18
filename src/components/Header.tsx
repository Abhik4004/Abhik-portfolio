import React from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-black tracking-tight">
              &lt;dev/&gt;
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-black transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/abhik4004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/abhik-ghosh-27b3632a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-700 hover:text-black transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-black transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-gray-700 hover:text-black transition-colors duration-200 font-medium py-2"
            >
              Contact
            </button>
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
              <a
                href="https://github.com/abhik4004"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/abhik-ghosh-27b3632a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ghoshabhik4002@gmail.com"
                className="text-gray-700 hover:text-black transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
