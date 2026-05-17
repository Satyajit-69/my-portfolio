import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-10 border-t border-neutral-900"

      style={{ fontFamily: '"Raleway", sans-serif' }}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold tracking-tight text-white mb-1">
              Satyajit
            </h2>
            <p className="text-neutral-400 text-sm font-medium">
              Full Stack Developer
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a href="https://github.com/Satyajit-69" className="text-neutral-400 hover:text-white transition-colors duration-200" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/satyajit-sahoo-b16795315/" className="text-neutral-400 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/Satyajit_69_" className="text-neutral-400 hover:text-white transition-colors duration-200" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="mailto:contact@example.com" className="text-neutral-400 hover:text-white transition-colors duration-200" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-xs text-center md:text-left">
            © {currentYear} Satyajit. All rights reserved.
          </p>
          <p className="text-neutral-500 text-xs text-center md:text-right">
            Built with ♥ by Satyajit
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;