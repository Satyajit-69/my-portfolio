import { useState, useEffect } from "react";
import RotatingText from "./ui/RotatingText";
import TrueFocus from "./ui/TrueFocus";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-32 pb-48 overflow-hidden 
      bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50
      dark:from-gray-950 dark:via-purple-950/20 dark:to-blue-950/20
      transition-colors duration-300"
    >
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-20 dark:opacity-10 
          blur-3xl animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
            left: `${mousePosition.x * 0.05}%`,
            top: `${mousePosition.y * 0.05}%`,
            transform: "translate(-50%, -50%)",
            transition: "all 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 dark:opacity-10 
          blur-3xl animate-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
            right: `${mousePosition.x * 0.03}%`,
            bottom: `${mousePosition.y * 0.03}%`,
            transform: "translate(50%, 50%)",
            transition: "all 0.5s ease-out",
            animationDelay: "1s",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 dark:bg-purple-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${
                5 + Math.random() * 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <div
            className="w-full text-center py-10 max-w-4xl mx-auto"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0px)" : "translateY(20px)",
              transition: "all 0.8s ease-in-out",
            }}
          >
            <TrueFocus
              sentence="Hi I am Satyajit"
              animationDuration={1}
              pauseBetweenAnimations={1}
              lightBorderColor="#00ff00"
              darkBorderColor="#ffd700"
              lightGlowColor="rgba(0,255,0,0.6)"
              darkGlowColor="rgba(255,215,0,0.7)"
            />
            {/* subheading */}

            {/* SUBTITLE / ROTATING TEXT */}
<div className="flex items-center justify-center gap-4 mt-8 h-16 md:h-20 overflow-hidden select-none mb-4">

  <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100">
    I am a 
  </span>

  <RotatingText
    texts={["FullStack Developer",  "UI Designer", "Creator"]}
    mainClassName="
      px-4 md:px-6 py-2 md:py-3 
      bg-gradient-to-r from-cyan-300 to-blue-400 
      text-black rounded-xl 
      font-extrabold text-3xl md:text-4xl 
      shadow-lg
    "
    staggerFrom="last"
    initial={{ y: "120%", opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: "-120%", opacity: 0 }}
    staggerDuration={0.04}
    splitLevelClassName="overflow-hidden"
    transition={{ type: "spring", damping: 28, stiffness: 350 }}
    rotationInterval={3000}
  />

</div>


            {/* PARAGRAPH */}
            <p
              className="
                text-lg md:text-xl text-gray-600 dark:text-gray-300 
                max-w-2xl mx-auto mb-12 leading-relaxed
              "
            >
              I build fast, visually striking, and user-focused web
              applications, blending modern technologies with clean design and
              smooth animations.
            </p>

            {/* BUTTONS */}
            <div
              className="flex flex-wrap justify-center gap-6"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0px)" : "translateY(20px)",
                transition: "all 1s ease-in-out",
                transitionDelay: "0.3s",
              }}
            >
              {/* HIRE ME BUTTON */}
              <a
                href="#contact"
                className="group relative px-8 py-4 text-lg font-semibold rounded-2xl overflow-hidden
                bg-gradient-to-r from-purple-600 to-blue-600 text-white
                shadow-2xl shadow-purple-500/50 dark:shadow-purple-500/30
                transition-all duration-300 hover:scale-105 hover:shadow-purple-500/60"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Hire Me
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              {/* EXPLORE BUTTON */}
              <a
                href="#about"
                className="group relative px-8 py-4 text-lg font-semibold rounded-2xl
                border-2 border-purple-600 dark:border-purple-400 
                text-purple-700 dark:text-purple-300
                bg-white/50 dark:bg-black/50 backdrop-blur-sm
                shadow-lg hover:shadow-xl
                transition-all duration-300 hover:scale-105
                hover:bg-purple-50 dark:hover:bg-purple-950/30"
              >
                <span className="flex items-center gap-2">Explore</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CSS ANIMATIONS */}
      <style>{`
        @keyframes gradientText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientText {
          background-size: 200% 200%;
          animation: gradientText 4s ease infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.6; filter: blur(20px); }
          50% { opacity: 0.8; filter: blur(25px); }
        }

        .glow-stroke {
          text-shadow:
            0 0 10px rgba(168, 85, 247, 0.7),
            0 0 20px rgba(59, 130, 246, 0.5),
            0 0 30px rgba(236, 72, 153, 0.4);
        }
      `}</style>
    </section>
  );
};

export default Hero;
