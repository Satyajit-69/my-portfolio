import { useEffect, useRef, useState } from 'react';

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
    link.href = '/cv.pdf';
    link.download = 'Satyajit_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="about" 
      className="py-16 min-h-screen"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Heading with fade-in from top */}
        <h1 
          className={`text-2xl font-bold p-2 border-b-2 border-black dark:border-white inline-block transition-all duration-700 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4'
          }`}
        >
          About
        </h1>

        {/* Row (12-column grid) */}
        <div className="mt-5 grid grid-cols-12 gap-8 items-center">
          
          {/* Left Column (col-7) - Slide in from left */}
          <div 
            className={`col-span-12 md:col-span-7 text-left space-y-4 transition-all duration-700 delay-200 ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-12'
            } p-3`}
          >
            <h2 className="text-3xl font-semibold">
              Hi, I'm <span className="text-blue-500">Satyajit</span>
            </h2>
            <p className="text-lg leading-relaxed">
              I'm a passionate <span className="font-semibold">Full Stack Developer </span> 
              who enjoys building clean, modern, and scalable web applications.  
              Problem-solving and continuous learning are what keep me motivated 🚀.
            </p>
            <p className="text-lg leading-relaxed">
              Outside of coding, I focus on fitness and personal growth.  
              My short-term goal is to land a great internship before 2026.
            </p>

            {/* Download CV Button */}
            <button
              onClick={handleDownloadCV}
              className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
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
            className={`col-span-12 md:col-span-5 flex justify-center transition-all duration-700 delay-400 ${
              isVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-12 scale-90'
            }`}
          >
            <img
              src="/hello.svg"
              alt="Profile"
              className="w-80 h-80 md:w-[500px] md:h-[500px] object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;