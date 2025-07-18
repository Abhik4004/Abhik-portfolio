import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-black tracking-tight">
              &lt;dev/&gt;
            </span>
          </div>
          <p className="text-gray-600 flex items-center justify-center">
            Made with
            <Heart size={16} className="mx-2 text-red-500" />
            by Abhik Ghosh
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} Abhik Ghosh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
