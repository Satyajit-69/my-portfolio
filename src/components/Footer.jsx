import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .slide-in-1 { animation: slideIn 0.6s ease-out forwards; }
        .slide-in-2 { animation: slideIn 0.6s ease-out 0.2s forwards; }
        .slide-in-3 { animation: slideIn 0.6s ease-out 0.4s forwards; }
      `}</style>

      <footer className="bg-gray-800 py-6 overflow-hidden">
        {/* Container */}
        <div className="container mx-auto px-6">
          
          {/* Row */}
          <div className="flex flex-col md:flex-row gap-6">
            
            {/* Column 1 - Left Side (8 cols) */}
            <div className="flex-1 md:w-2/3 ">
              <h3 className="text-lg font-bold text-white mb-2 flex slide-in-1 items-center gap-2">
                <span className="w-1 h-5 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></span>
                Useful Links
              </h3>
              
              {/* Row for 3 columns */}
              <div className="flex flex-col sm:flex-row gap-6">
                
                {/* Col 1 - Navigation */}
                <div className="flex-1 opacity-0 slide-in-1">
                  <h4 className="text-white/60 font-semibold text-xs uppercase mb-2">Navigation</h4>
                  <a href="#home" className="block text-white/80 hover:text-blue-300 text-xs mb-1.5 transition-colors">Home</a>
                  <a href="#about" className="block text-white/80 hover:text-blue-300 text-xs mb-1.5 transition-colors">About</a>
                  <a href="#projects" className="block text-white/80 hover:text-blue-300 text-xs mb-1.5 transition-colors">Projects</a>
                  <a href="#contact" className="block text-white/80 hover:text-blue-300 text-xs transition-colors">Contact</a>
                </div>

                {/* Col 2 - Connect */}
                <div className="flex-1 opacity-0 slide-in-2">
                  <h4 className="text-white/60 font-semibold text-xs uppercase mb-2">Connect</h4>
                  <a href="https://github.com/Satyajit-69" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-blue-300 text-xs mb-1.5 transition-colors">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/satyajit-sahoo-b16795315/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-blue-300 text-xs mb-1.5 transition-colors">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a href="https://x.com/Satyajit_69_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/80 hover:text-blue-300 text-xs mb-1.5 transition-colors">
                    <Twitter className="w-4 h-4" />
                    Twitter/X
                  </a>
                  <a href="mailto:satyajitsahoo28252@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-blue-300 text-xs transition-colors">
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </div>

                {/* Col 3 - Resources */}
                <div className="flex-1 opacity-0 slide-in-3">
                  <h4 className="text-white/60 font-semibold text-xs uppercase mb-2">Resources</h4>
                  <a href="#blog" className="block text-white/80 hover:text-blue-300 text-xs mb-1.5 transition-colors">Blog</a>
                  <a href="#docs" className="block text-white/80 hover:text-blue-300 text-xs mb-1.5 transition-colors">Documentation</a>
                  <a href="#support" className="block text-white/80 hover:text-blue-300 text-xs transition-colors">Support</a>
                </div>

              </div>
            </div>

            {/* Column 2 - Right Side (4 cols) */}
            <div className="flex-1 md:w-1/3 flex items-center justify-center md:justify-end">
              <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-cyan-500/20 rounded-xl p-4 shadow-xl">
                
                <div className="text-center">
                  {/* Made By */}
                  <p className="text-cyan-300/70 text-xs font-medium uppercase mb-1.5">
                    Crafted with <span className="text-rose-400 animate-pulse">❤️</span> by
                  </p>
                  
                  {/* Name */}
                  <h2 className="text-2xl md:text-3xl font-black mb-1">
                    <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient" style={{backgroundSize: '200% auto'}}>
                      SATYAJIT
                    </span>
                  </h2>
                  
                  {/* Underline */}
                  <div className="h-0.5 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full animate-shimmer mb-1.5" style={{backgroundSize: '200% 100%'}}></div>
                  
                  {/* Subtitle */}
                  <p className="text-cyan-200/60 text-xs italic mb-2">Full Stack Developer</p>
                  
                  {/* Copyright */}
                  <div className="pt-2 border-t border-cyan-500/20">
                    <p className="text-cyan-300/40 text-xs">© {new Date().getFullYear()} All rights reserved</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;