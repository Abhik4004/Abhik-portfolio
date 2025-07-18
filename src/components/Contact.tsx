import React from "react";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations,
              or just having a conversation about technology and development.
              Feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-white p-3 border border-gray-300 mr-4">
                  <Mail size={20} className="text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Email</h4>
                  <a
                    href="mailto:ghoshabhik4002@gmail.com"
                    className="text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    ghoshabhik4002@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-white p-3 border border-gray-300 mr-4">
                  <MapPin size={20} className="text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">Location</h4>
                  <p className="text-gray-600">Kolkata, IN</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-white p-3 border border-gray-300 mr-4">
                  <Github size={20} className="text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">GitHub</h4>
                  <a
                    href="https://github.com/abhik4004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    github.com/abhik4004
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-white p-3 border border-gray-300 mr-4">
                  <Linkedin size={20} className="text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-black">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/abhik-ghosh-27b3632a0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    linkedin.com/in/abhik-ghosh-27b3632a0/
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 border border-gray-200">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 hover:bg-gray-800 transition-colors duration-200 font-medium tracking-wide"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
