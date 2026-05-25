import React from "react";

function Footer() {
  return (
    <footer className="w-full py-6 border-t border-white/10 bg-black text-center text-gray-400">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <p className="mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Chirag Tank. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
