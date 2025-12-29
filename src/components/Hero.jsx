import { useState, useEffect } from "react";

/* ================= TYPEWRITER (LOOP) ================= */
const TypewriterText = ({ text, speed = 45, pause = 1500 }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (index < text.length) {
          setDisplayText((prev) => prev + text[index]);
          setIndex(index + 1);
        } else {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText((prev) => prev.slice(0, -1));
        } else {
          setDeleting(false);
          setIndex(0);
        }
      }
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [index, deleting, text, speed, pause, displayText]);

  return (
    <span>
      {displayText}
      <span className="text-cyan-500 animate-pulse">|</span>
    </span>
  );
};

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
              {/* Tag */}
              <span className="
                inline-flex items-center gap-2
                px-4 py-2 rounded-full
                bg-cyan-500/10 text-cyan-700
                dark:text-cyan-400 dark:bg-cyan-500/10
                font-semibold text-sm
              ">
                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                No Noise. Real Impact.
              </span>

              {/* Heading */}
              <h1 className="
                text-4xl sm:text-5xl lg:text-6xl
                font-extrabold leading-tight
                text-gray-900 dark:text-white
                min-h-[3.5em]
              ">
                <TypewriterText text="Building scalable full-stack & cloud-ready applications" />
              </h1>

              {/* Description */}
              <p className="
                text-base lg:text-lg max-w-2xl leading-relaxed
                text-gray-700 dark:text-gray-300
              ">
                Full Stack Developer with hands-on experience in{" "}
                <span className="font-semibold text-cyan-600 dark:text-cyan-400">
                  MERN stack
                </span>, cloud deployment, real-time systems, and{" "}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  AI-powered applications
                </span>.
                Focused on clean architecture and production-ready solutions.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#projects"
                  className="
                    inline-flex items-center gap-2
                    px-8 py-4 rounded-lg font-bold
                    bg-cyan-500 text-black
                    hover:bg-cyan-400
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
                    border-2 border-cyan-500
                    text-cyan-700 dark:text-cyan-400
                    hover:bg-cyan-500/10
                    transition-all duration-300
                  "
                >
                  Get in Touch
                </a>
              </div>

              {/* Status */}
              <div className="
                inline-flex items-center gap-3
                px-4 py-2 rounded-lg
                bg-green-500/10 border border-green-500/20
                text-green-700 dark:text-green-400
                font-semibold text-sm
              ">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                Available for Internship Opportunities
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
    src="/profilepic.png"
    alt="Satyajit"
    className="
      w-full
      max-w-xl
      lg:max-w-2xl
      lg:h-[85vh]
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
