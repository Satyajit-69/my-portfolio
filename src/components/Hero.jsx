import { useState, useEffect } from "react";
import TypewriterText from "./ui/TyperwriterText";

/* ================= HERO ================= */
const Hero = () => {
  const [mounted, setMounted] = useState(false);

   const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    setIsDark(document.documentElement.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-left">
            {/* Greeting with animation */}
            <div className="flex items-center gap-3 mb-6 animate-fade-in-down">
              {/* <div className="h-[2px] w-12 bg-gradient-to-r from-blue-500 to-purple-500" /> */}
                <p
    className="text-5xl md:text-6xl font-extrabold leading-none"
    style={{
      fontFamily: "'Railway', cursive",
      WebkitTextStroke: isDark ? "1px black" : "1px white",
      color: isDark ? "white" : "black",
    }}
  >
    Hello, I'm
  </p>
            </div>

            {/* Name with Background Icons */}
            <div className="relative mb-8 min-h-[100px] flex items-center">
              {/* Background Tech Icons - Black & White */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <i className="fab fa-react absolute text-[8rem] md:text-[10rem] text-black/5 dark:text-white/5 animate-spin-slow -left-1 top-0" />
                {/* <i className="fab fa-node-js absolute text-[6rem] md:text-[8rem] text-black/5 dark:text-white/5 animate-float animation-delay-1000 right-10 top-4" />
                <i className="fab fa-python absolute text-[5rem] md:text-[7rem] text-black/5 dark:text-white/5 animate-float animation-delay-2000 left-20 bottom-0" /> */}
                <i className="fab fa-docker absolute text-[5rem] md:text-[7rem] text-black/5 dark:text-white/5 animate-float animation-delay-1500 right-16 bottom-2" />
              </div>

              {/* Name - Big and Bold with Animation */}
              <h1 className="relative text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none animate-text-reveal">
                <span className="text-black dark:text-white animate-gradient">
                  Satyajit
                </span>
              </h1>
            </div>

            {/* Role - Typewriter with transparent bg and border */}
            <div className="mb-10 animate-fade-in">
              <div className="inline-block px-6 py-3 bg-transparent border-2 border-black dark:border-white rounded-2xl">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                  {mounted && (
                    <TypewriterText text="Full Stack Developer" />
                  )}
                </h2>
              </div>
            </div>

            {/* Buttons - Black & White */}
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up animation-delay-600">
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold text-base rounded-2xl transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg"
              >
                View Projects
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-black dark:border-white bg-transparent text-black dark:text-white font-semibold text-base rounded-2xl transition-all duration-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer"
              >
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative hidden lg:flex items-center justify-center animate-fade-in animation-delay-1000">
            <div className="relative w-full max-w-lg">
              {/* Decorative elements behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-600/20 dark:to-purple-600/20 rounded-full blur-3xl animate-pulse" />
              
              {/* Floating tech icons around image */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm border-2 border-blue-200 dark:border-blue-800 animate-float">
                <i className="fab fa-react text-3xl text-blue-600 dark:text-blue-400"></i>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm border-2 border-green-200 dark:border-green-800 animate-float animation-delay-1000">
                <i className="fab fa-node-js text-3xl text-green-600 dark:text-green-400"></i>
              </div>
              <div className="absolute -bottom-8 -left-4 w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm border-2 border-yellow-200 dark:border-yellow-800 animate-float animation-delay-2000">
                <i className="fab fa-js text-3xl text-yellow-600 dark:text-yellow-400"></i>
              </div>
              <div className="absolute -bottom-4 -right-8 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm border-2 border-blue-200 dark:border-blue-800 animate-float animation-delay-1500">
                <i className="fab fa-docker text-3xl text-blue-600 dark:text-blue-400"></i>
              </div>

              {/* Main Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                <img
                  src={isDark ? "/assets/header2.svg" : "/assets/header3.svg"}
                  alt="Satyajit - Full Stack Developer"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes text-reveal {
          0% {
            opacity: 0;
            transform: scale(0.8) rotateX(-10deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotateX(0deg);
          }
        }

        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
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
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-text-reveal {
          animation: text-reveal 1s ease-out;
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Hero;