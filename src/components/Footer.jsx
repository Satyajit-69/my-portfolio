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

      <footer className="bg-black py-6 overflow-hidden">
        {/* Container */}
        <div className="container mx-auto px-6">
          
        
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
                  {/* <div className="h-0.5 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full animate-shimmer mb-1.5" style={{backgroundSize: '200% 100%'}}></div> */}
                  
                  {/* Subtitle */}
                  <p className="text-cyan-200/60 text-xs italic mb-2">Full Stack Developer</p>
                  
                  {/* Copyright */}
                  <div className="pt-2 border-t border-cyan-500/20">
                    <p className="text-cyan-300/40 text-xs">© {new Date().getFullYear()} All rights reserved</p>
                  </div>
                </div>

              </div>
           
      </footer>
    </>
  );
};

export default Footer;