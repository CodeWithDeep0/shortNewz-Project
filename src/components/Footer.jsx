import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <p className="text-center">Made by <span className="font-bold">CodeWithDeep💗</span></p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://github.com/CodeWithDeep0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sandeep-singh-74a5a8298/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
