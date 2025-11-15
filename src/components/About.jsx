import { useEffect, useRef, useState } from 'react';
import GradientText from './ui/GradientText';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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
        rootMargin: '0px 0px -250px 0px'
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
    link.href = './assets/My_Resume.pdf';
    link.download = 'Satyajit_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="about" 
      className="py-16 min-h-screen bg-white dark:bg-black transition-colors duration-300"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading with fade-in from top */}
        <div className="text-center mb-12">
          <h1 
            className={`text-4xl md:text-5xl font-bold inline-block transition-all duration-700 ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 from-yellow-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          {/* Underline */}
          <div className="h-1 w-32 mx-auto mt-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 rounded-full"></div>
        </div>

        {/* Row (12-column grid) */}
        <div className="grid grid-cols-12 gap-8 items-center">
          
          {/* Left Column (col-7) - Slide in from left */}
          <div 
            className={`col-span-12 lg:col-span-7 space-y-6 transition-all duration-700 delay-200 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="text-3xl md:text-4xl font-bold mb-6">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="inline-block"
              >
                Welcome
              </GradientText>
            </div>

            <div className="text-gray-300 dark:text-gray-300 text-gray-700 text-lg leading-relaxed space-y-4">
              <p>
                I'm a passionate <span className="font-semibold text-red-500 dark:text-white text-gray-900 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">Full Stack Developer</span> who enjoys building clean, modern, and scalable web applications.
              </p>
              
              <p>
                Problem-solving and continuous learning are what keep me motivated in this ever-evolving tech landscape.
              </p>

              <p>
                Outside of coding, I focus on <span className="text-yellow-500 dark:text-cyan-400 font-semibold">fitness</span> and <span className="text-orange-500 dark:text-blue-400 font-semibold">personal growth</span>.
              </p>

              <p>
                My short-term goal is to land a great <span className="text-red-500 dark:text-purple-400 font-semibold">internship before 2026</span> where I can contribute and grow as a developer.
              </p>
            </div>

            {/* Download CV Button */}
            <button
              onClick={handleDownloadCV}
              className="mt-8 px-8 py-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 dark:hover:from-cyan-600 dark:hover:via-blue-600 dark:hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/50 dark:hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3 group"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 group-hover:animate-bounce" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              Download CV
            </button>
          </div>

          {/* Right Column (col-5) - Slide in from right with scale */}
          <div 
            className={`col-span-12 lg:col-span-5 flex justify-center transition-all duration-700 delay-400 ${
              isVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-12 scale-90'
            }`}
          >
            <div className="relative">
              {/* Glow effect behind image - Yellow for light mode, Blue for dark mode */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 dark:from-cyan-500 dark:via-blue-500 dark:to-purple-500 rounded-full blur-3xl opacity-30 dark:opacity-20 animate-pulse"></div>
              
              <img
                src="/assets/header2.svg"
                alt="Developer Illustration"
                className="relative w-80 h-80 md:w-[500px] md:h-[500px] object-contain hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Fun Facts Section with Cards */}
        <div 
          className={`mt-20 transition-all duration-700 delay-600 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
            Quick Facts About Me
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                label: 'Projects Completed', 
                value: '15+', 
                icon: '🚀',
                color: 'from-yellow-500 to-orange-500 dark:from-cyan-500 dark:to-blue-500',
                desc: 'Full-stack applications built'
              },
              { 
                label: 'Technologies Mastered', 
                value: '20+', 
                icon: '💻',
                color: 'from-orange-500 to-red-500 dark:from-blue-500 dark:to-purple-500',
                desc: 'Languages & frameworks'
              },
              { 
                label: 'Coffee Consumed', 
                value: '∞', 
                icon: '☕',
                color: 'from-red-500 to-pink-500 dark:from-purple-500 dark:to-pink-500',
                desc: 'Fuel for late-night coding'
              },
              { 
                label: 'Lines of Code', 
                value: '10K+', 
                icon: '📝',
                color: 'from-pink-500 to-purple-500 dark:from-pink-500 dark:to-cyan-500',
                desc: 'Written and counting'
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group relative bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 rounded-2xl p-6 hover:border-transparent transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                {/* Animated gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
                <div className="absolute inset-[2px] bg-white dark:bg-slate-900 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative flex items-center gap-4">
                  <div className={`text-5xl w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-gray-800 dark:text-white mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {stat.desc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;