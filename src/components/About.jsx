import { useEffect, useRef, useState } from 'react';
import GradientText from './ui/GradientText';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = './assets/satyajit_sahoo_resume.pdf';
    link.download = 'Satyajit_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="about" 
      className="py-12 sm:py-16 min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-slate-950 dark:to-black transition-colors duration-300 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-300/10 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-300/10 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Heading with enhanced animation */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold inline-block transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 -translate-y-8 scale-95'
            }`}
          >
            <span className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              About Me
            </span>
          </h1>
          {/* Enhanced underline with animation */}
          <div className={`h-1.5 w-24 sm:w-32 mx-auto mt-3 sm:mt-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 rounded-full transition-all duration-1000 delay-200 ${
            isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
          }`}></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* Right Column - Image with enhanced effects */}
          <div 
            className={`lg:col-span-5 lg:order-2 flex justify-center transition-all duration-1000 delay-300 ${
              isVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-12 scale-90'
            }`}
          >
            <div className="relative group">
              {/* Multiple glow layers for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 rounded-full blur-3xl opacity-40 dark:opacity-30 animate-pulse group-hover:opacity-60 dark:group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-red-400 via-pink-400 to-purple-400 dark:from-purple-500 dark:via-blue-500 dark:to-cyan-500 rounded-full blur-2xl opacity-20 dark:opacity-15 animate-pulse delay-500 group-hover:opacity-40 dark:group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Floating ring animation */}
              <div className="absolute inset-0 rounded-full border-4 border-yellow-500/20 dark:border-cyan-500/20 animate-spin-slow group-hover:border-yellow-500/40 dark:group-hover:border-cyan-500/40 transition-colors duration-500"></div>
              
              <img
                src="/assets/header2.svg"
                alt="Developer Illustration"
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] object-contain group-hover:scale-110 transition-all duration-700 drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Left Column - Enhanced text content */}
          <div 
            className={`lg:col-span-7 lg:order-1 space-y-4 sm:space-y-6 transition-all duration-1000 delay-500 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-12'
            }`}
          >
           

            <div className="text-gray-700 dark:text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed space-y-3 sm:space-y-4">
              <p className="transform hover:translate-x-2 transition-transform duration-300">
                I'm a passionate <span className="font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent hover:scale-110 inline-block transition-transform">Full Stack Developer</span> who enjoys building clean, modern, and scalable web applications.
              </p>
              
              <p className="transform hover:translate-x-2 transition-transform duration-300 delay-75">
                Problem-solving and continuous learning are what keep me motivated in this ever-evolving tech landscape.
              </p>

              <p className="transform hover:translate-x-2 transition-transform duration-300 delay-150">
                Outside of coding, I focus on <span className="text-yellow-600 dark:text-cyan-400 font-bold hover:scale-110 inline-block transition-transform">fitness</span> and <span className="text-orange-600 dark:text-blue-400 font-bold hover:scale-110 inline-block transition-transform">personal growth</span>.
              </p>

              <p className="transform hover:translate-x-2 transition-transform duration-300 delay-200">
                My short-term goal is to land a great <span className="text-red-600 dark:text-purple-400 font-bold hover:scale-110 inline-block transition-transform">internship before 2026</span> where I can contribute and grow as a developer.
              </p>
            </div>

            {/* Enhanced Download CV Button with icon animation */}
            <button
              onClick={handleDownloadCV}
              className="mt-6 sm:mt-8 w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-5 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 dark:hover:from-cyan-600 dark:hover:via-blue-600 dark:hover:to-purple-600 text-white text-base sm:text-lg font-bold rounded-2xl shadow-xl hover:shadow-3xl hover:shadow-orange-500/60 dark:hover:shadow-blue-500/60 transition-all duration-500 hover:scale-110 flex items-center justify-center gap-3 group relative overflow-hidden"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 sm:h-6 sm:w-6 group-hover:animate-bounce relative z-10" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              <span className="relative z-10">Download CV</span>
            </button>
          </div>
        </div>

        {/* Enhanced Fun Facts Section */}
        <div 
          className={`mt-12 sm:mt-16 lg:mt-20 transition-all duration-1000 delay-700 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent px-4">
            Quick Facts About Me
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {[
              { 
                label: 'Projects Completed', 
                value: '15+', 
                icon: '🚀',
                color: 'from-yellow-500 to-orange-500 dark:from-cyan-500 dark:to-blue-500',
                desc: 'Full-stack applications built',
                bg: 'bg-yellow-50 dark:bg-cyan-950/20'
              },
              { 
                label: 'Technologies Mastered', 
                value: '20+', 
                icon: '💻',
                color: 'from-orange-500 to-red-500 dark:from-blue-500 dark:to-purple-500',
                desc: 'Languages & frameworks',
                bg: 'bg-orange-50 dark:bg-blue-950/20'
              },
              { 
                label: 'Coffee Consumed', 
                value: '∞', 
                icon: '☕',
                color: 'from-red-500 to-pink-500 dark:from-purple-500 dark:to-pink-500',
                desc: 'Fuel for late-night coding',
                bg: 'bg-red-50 dark:bg-purple-950/20'
              },
              { 
                label: 'Lines of Code', 
                value: '10K+', 
                icon: '📝',
                color: 'from-pink-500 to-purple-500 dark:from-pink-500 dark:to-cyan-500',
                desc: 'Written and counting',
                bg: 'bg-pink-50 dark:bg-pink-950/20'
              }
            ].map((stat, index) => (
              <div 
                key={index}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                className={`group relative ${stat.bg} border-2 border-gray-200 dark:border-slate-700 rounded-2xl p-4 sm:p-6 lg:p-8 hover:border-transparent transition-all duration-500 hover:scale-105 hover:-rotate-1 overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl ${
                  hoveredStat === index ? 'z-10' : ''
                }`}
              >
                {/* Animated gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl`}></div>
                <div className="absolute inset-[2px] bg-white dark:bg-slate-900 rounded-2xl transition-all duration-500 group-hover:inset-[3px]"></div>
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-to-br ${stat.color} rounded-full animate-ping`}></div>
                  <div className={`absolute bottom-1/3 right-1/4 w-2 h-2 bg-gradient-to-br ${stat.color} rounded-full animate-ping delay-200`}></div>
                </div>
                
                {/* Content */}
                <div className="relative flex items-center gap-3 sm:gap-4 lg:gap-6">
                  <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} bg-opacity-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 flex-shrink-0 shadow-lg`}>
                    <span className="group-hover:animate-bounce">{stat.icon}</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-500 origin-left`}>
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:translate-x-1 transition-transform duration-300">
                      {stat.label}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {stat.desc}
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-bl-full`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default About;