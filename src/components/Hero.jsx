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
      className="relative min-h-screen flex items-center overflow-hidden transition-colors duration-300"
    >
      {/* ==== ENHANCED GRID BACKGROUND ==== */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/10 via-transparent to-transparent opacity-50" />

      {/* ============ MAIN CONTENT ============ */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 max-w-7xl mx-auto">

          {/* ========== LEFT TEXT AREA ========== */}
          <div
            className="w-full lg:w-[48%] text-center lg:text-left"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateX(0px)" : "translateX(-50px)",
              transition: "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* TrueFocus with staggered animation */}
            <div 
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s"
              }}
            >
              <TrueFocus
                sentence="Hi I am Satyajit"
                animationDuration={1.5}
                pauseBetweenAnimations={0.6}
                lightBorderColor="#00ffff"
                darkBorderColor="#ff8800"
                lightGlowColor="rgba(0,255,255,0.6)"
                darkGlowColor="rgba(255,136,0,0.7)"
              />
            </div>

            {/* Heading + Rotating Text - Enhanced Animation */}
            <div 
              className="flex flex-wrap items-center lg:justify-start justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 min-h-[60px] sm:min-h-[80px]"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s"
              }}
            >
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black whitespace-nowrap dark:text-white">
                I am a
              </span>

              <RotatingText
                texts={["FullStack Developer", "UI Designer", "Creator"]}
                mainClassName="
                  px-4 sm:px-6 py-2 sm:py-3 
                  bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500
                  text-black rounded-xl 
                  font-extrabold text-2xl sm:text-3xl lg:text-4xl 
                  shadow-2xl shadow-cyan-500/60
                  border-2 border-cyan-300/40
                  transform-gpu
                "
                rotationInterval={2800}
              />
            </div>

            {/* Description with fade-in */}
            <p 
              className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl mt-5 sm:mt-6 leading-relaxed mx-auto lg:mx-0"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s"
              }}
            >
              I build fast, visually striking, and user-focused web applications,
              blending modern technologies with clean design and smooth animations.
            </p>

            {/* Buttons with staggered entrance */}
            <div 
              className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mt-8 sm:mt-10"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s"
              }}
            >
              <a
                href="#contact"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl
                bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 
                text-white shadow-2xl shadow-purple-600/50
                hover:shadow-purple-500/70
                transition-all duration-500 ease-out
                border-2 border-purple-400/40
                backdrop-blur-sm
                overflow-hidden"
              >
                <span className="relative z-10">Hire Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>

              <a
                href="#about"
                className="group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl border-2
                border-purple-500 text-purple-300
                hover:bg-purple-600/20 hover:border-purple-400
                transition-all duration-300
                hover:shadow-xl hover:shadow-purple-500/40
                backdrop-blur-sm
                relative overflow-hidden"
              >
                <span className="relative z-10">Explore</span>
                <div className="absolute inset-0 bg-purple-600/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </a>
            </div>
          </div>

          {/* ========== RIGHT SIDE - PROFILE WITH ROUND CONTAINER ========== */}
          <div 
            className="relative w-full lg:w-[48%] h-[450px] sm:h-[550px] lg:h-[600px] flex justify-center items-end overflow-visible"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateX(0px)" : "translateX(100px)",
              transition: "opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
            }}
          >
            {/* Round Container for Image */}
            <div 
              className="
                relative
                w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[470px] md:h-[470px] lg:w-[540px] lg:h-[540px]
                rounded-full
                overflow-hidden
                transition-all duration-700 ease-out
                hover:scale-[1.05]
                group
              "
              style={{
                transform: loaded ? 'translateY(0%)' : 'translateY(100%)',
                opacity: loaded ? 1 : 0,
                transition: 'transform 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s, opacity 1.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
                boxShadow: `
                  0px 40px 100px rgba(0,0,0,0.6),
                  0px 20px 50px rgba(255,122,0,0.3)
                `,
                zIndex: 100,
              }}
            >
              {/* Background Layer - Orange Gradient */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600
                  transition-all duration-700
                  group-hover:scale-110
                "
                style={{
                  filter: 'blur(8px)',
                  opacity: 0.9,
                }}
              />

              {/* PROFILE IMAGE */}
              <img
                src="/profilepic.png"
                alt="Satyajit"
                className="
                  relative
                  h-full min-w-full
                  object-contain scale-125
                  transition-all duration-700 ease-out
                  group-hover:scale-110
                  z-10
                "
                style={{
                  filter: `
                    contrast(1.1)
                    brightness(1.05)
                    saturate(1.15)
                  `,
                  imageRendering: "high-quality",
                  WebkitFontSmoothing: "antialiased",
                }}
              />

              {/* Overlay Gradient for depth */}
              <div 
                className="
                  absolute inset-0
                  bg-gradient-to-t from-black/20 via-transparent to-transparent
                  pointer-events-none
                  z-20
                "
              />
            </div>

            {/* Decorative Glow Ring */}
            <div
              className="
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] md:w-[490px] md:h-[490px] lg:w-[560px] lg:h-[560px]
                rounded-full
                border-2 border-orange-400/30
              "
              style={{ 
                animation: 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite',
                zIndex: 50,
              }}
            />

            {/* Ambient Glow */}
            <div
              className="
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] md:w-[530px] md:h-[530px] lg:w-[600px] lg:h-[600px]
                rounded-full
                bg-gradient-radial from-orange-500/30 via-orange-600/20 to-transparent
                blur-3xl
                pointer-events-none
              "
              style={{ 
                animation: 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                zIndex: 0,
              }}
            />
          </div>
        </div>
      </div>

      {/* Removed global bottom fade */}
    </section>
  );
};

export default Hero;