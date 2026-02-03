import { useState, useEffect } from "react";
import ScrambledText from "./ui/ScrambledText";
import TypewriterText from "./ui/TyperwriterText";

/* ================= HERO ================= */
const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="home"
      className="
        relative min-h-screen flex items-center overflow-hidden
        transition-colors duration-300
        bg-[url('/lightmode.png')]
        bg-cover bg-center bg-no-repeat
        dark:bg-[url('/bg.svg')]
      "
    >
      {/* DARK MODE OVERLAY (for readability) */}
      <div className="absolute inset-0 bg-black/70 hidden dark:block" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-6 lg:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* ================= LEFT ================= */}
            <div
              className="space-y-6"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s ease",
              }}
            >
             {/* Heading */}
<h1
  className="
    text-4xl sm:text-5xl lg:text-6xl
    font-extrabold leading-tight
    text-gray-900 dark:text-white
    max-w-3xl
    break-words
  "
>
  <span className="block min-h-[4.5rem] sm:min-h-[6rem] lg:min-h-[7.5rem]">
    <TypewriterText
      className="block"
      words={[
        "Building scalable full-stack applications",
        "Solving real-world problems",
        "Cloud-native & production-ready systems",
        "MERN stack, cloud, and AI integrations",
      ]}
      typeSpeed={45}
      deleteSpeed={60}
      pauseDuration={2200}
      cursorClassName="text-cyan-500 animate-pulse"
    />
  </span>
</h1>


              {/* Description */}

                <p
                  className="
                text-base lg:text-lg max-w-2xl leading-relaxed
                text-gray-700 dark:text-gray-300
              "
                >
                  {" "}
                  Full Stack Developer with hands-on experience in{" "}
                  <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                    MERN stack
                  </span>
                  , cloud deployment, real-time systems, and{" "}
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    AI-powered applications
                  </span>
                  . Focused on clean architecture and production-ready
                  solutions.
                </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#projects"
                  className="
                    inline-flex items-center gap-2
                    px-8 py-4 rounded-lg font-bold
                    bg-white text-black
                    hover:bg-blue-300
                    transition-all duration-300
                    shadow-lg shadow-cyan-500/30
                    hover:scale-105
                  "
                >
                  View Projects →
                </a>

                <a
                  href="#contact"
                  className="
                    inline-flex items-center gap-2
                    px-8 py-4 rounded-lg font-bold
                    bg-white text-black
                    hover:bg-blue-300
                    transition-all duration-300
                    shadow-lg shadow-cyan-500/30
                    hover:scale-105
                  "
                >
                  Get in Touch
                </a>
              </div>

              {/* Status */}
              <div
                className="
                inline-flex items-center gap-3
                px-4 py-2 rounded-lg
                bg-green-500/10 border border-green-500/20
                text-green-700 dark:text-green-400
                font-semibold text-sm
              "
              >
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                Available for Internship & Full-time Opportunities
              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div
              className="flex justify-center lg:justify-end items-center"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "all 1s ease",
              }}
            >
              <img
                src="/assets/header2.svg"
                alt="Satyajit"
                className="
      w-full
      max-w-xl
      lg:max-w-xl
      lg:h-[95vh]
      object-cover
      rounded-2xl
      shadow-2xl
    "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
