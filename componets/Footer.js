'use client';
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left: Brand or Message */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Manish Portfolio</h2>
          <p className="text-sm text-gray-400">A Frontend Devloper</p>
        </div>

        {/* Middle: Contact Info */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">📞 Contact Me</h3>
          <p>Email: <a href="mailto:youremail@example.com" className="text-yellow-400 hover:underline">km9474789@gmail.com</a></p>
          <p>Location: Delhi</p>
        </div>

        {/* Right: Social Links */}
        <div className="flex space-x-4 text-2xl">
          <a href="https://github.com/manisshkm" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/manish-kumar-2784a9207/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
            <FaLinkedin />
          </a>
         
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Manish. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
