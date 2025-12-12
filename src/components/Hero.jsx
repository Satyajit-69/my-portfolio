import { useState, useEffect } from "react";
import RotatingText from "./ui/RotatingText";
import TrueFocus from "./ui/TrueFocus";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative pt-32 pb-0 overflow-hidden 
      bg-[#0A0014] dark:bg-black transition-colors duration-300"
    >
      {/* ==== GRID BACKGROUND ==== */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: "55px 55px",
        }}
      />

      {/* ============ MAIN CONTENT ============ */}
      <div className="relative z-10 container mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* ========== LEFT TEXT AREA ========== */}
          <div
            className="max-w-2xl text-center lg:text-left flex-shrink-0"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0px)" : "translateY(20px)",
              transition: "all 0.8s ease-in-out",
            }}
          >
            <TrueFocus
              sentence="Hi I am Satyajit"
              animationDuration={1.2}
              pauseBetweenAnimations={0.8}
              lightBorderColor="#00ffff"
              darkBorderColor="#ff8800"
              lightGlowColor="rgba(0,255,255,0.5)"
              darkGlowColor="rgba(255,136,0,0.6)"
            />

            {/* Heading + Rotating Text */}
            <div className="flex flex-wrap items-center lg:justify-start justify-center gap-4 mt-8 min-h-[80px]">
              <span className="text-4xl md:text-5xl font-bold text-white whitespace-nowrap">
                I am a
              </span>

              <RotatingText
                texts={["FullStack Developer", "UI Designer", "Creator"]}
                mainClassName="
                  px-6 py-3 
                  bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500
                  text-black rounded-xl 
                  font-extrabold text-3xl md:text-4xl 
                  shadow-2xl shadow-cyan-500/50
                  border border-cyan-300/30
                "
                rotationInterval={2500}
              />
            </div>

            <p className="text-lg md:text-xl text-gray-300 max-w-xl mt-6 leading-relaxed mx-auto lg:mx-0">
              I build fast, visually striking, and user-focused web applications,
              blending modern technologies with clean design and smooth animations.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10">
              <a
                href="#contact"
                className="px-8 py-4 text-lg font-semibold rounded-xl
                bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 
                text-white shadow-2xl shadow-purple-600/50
                hover:scale-105 hover:shadow-purple-500/70
                transition-all duration-500 ease-out
                border border-purple-400/30"
              >
                Hire Me
              </a>

              <a
                href="#about"
                className="px-8 py-4 text-lg font-semibold rounded-xl border-2
                border-purple-500 text-purple-300
                hover:bg-purple-600/20 hover:border-purple-400
                transition-all duration-300 hover:scale-105
                hover:shadow-lg hover:shadow-purple-500/30"
              >
                Explore
              </a>
            </div>
          </div>

          {/* ========== RIGHT SIDE - TUF STYLE IMAGE ========== */}
          <div className="relative w-full lg:w-auto h-[500px] lg:h-[580px] flex justify-center items-end overflow-hidden">

            {/* Subtle Purple/Brown Glow - Background Layer */}
            <div
              className="
                absolute bottom-0
                w-[550px] h-[300px] lg:w-[650px] lg:h-[350px]
                bg-gradient-to-br from-orange-600/25 via-purple-900/15 to-transparent
                rounded-full blur-3xl
                animate-pulse
              "
              style={{ 
                animationDuration: '4s',
                transform: 'translateY(30%)',
                opacity: loaded ? 1 : 0,
                transition: 'opacity 0.6s ease-out',
              }}
            />

            {/* ORANGE SEMI-CIRCLE - Perfect Half Circle */}
            <div
              className="
                absolute bottom-0
                w-[500px] h-[250px] lg:w-[600px] lg:h-[300px]
                bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300
                rounded-t-full
              "
              style={{
                boxShadow: '0px -20px 80px rgba(255, 122, 0, 0.5), inset 0px -10px 40px rgba(255, 122, 0, 0.3)',
                opacity: loaded ? 1 : 0,
                transform: loaded ? 'scale(1)' : 'scale(0.8)',
                transition: 'all 0.8s ease-out',
              }}
            />

            {/* Decorative Ring Animation */}
            <div
              className="
                absolute bottom-0
                w-[520px] h-[260px] lg:w-[620px] lg:h-[310px]
                border-2 border-orange-400/20
                rounded-t-full
                animate-ping
              "
              style={{ 
                animationDuration: '1s',
                opacity: loaded ? 0.3 : 0,
                transition: 'opacity 1s ease-out 0.4s',
              }}
            />

            {/* PROFILE IMAGE - Large & Prominent */}
            <img
              src="/profilepic.png"
              alt="Satyajit"
              className="
                relative
                w-[360px] md:w-[440px] lg:w-[500px]
                object-contain
                transition-transform duration-300
                hover:scale-105
              "
              style={{
                transform: loaded ? 'translateY(10%)' : 'translateY(100%)',
                filter: "drop-shadow(0px 20px 60px rgba(0,0,0,0.7))",
                imageRendering: "high-quality",
                zIndex: 9999,
                opacity: loaded ? 1 : 0,
                transition: 'all 0s ease-out 0.1s',
              }}
            />

            {/* DARK BOTTOM FADE - Blends into background */}
            <div
              className="
                absolute bottom-0 left-0 right-0
                h-[100px]
                bg-gradient-to-t from-[#0A0014] via-[#0A0014]/95 to-transparent
                pointer-events-none
                z-20
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;