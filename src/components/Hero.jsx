import { useState, useEffect } from "react";
// FIX: Assuming all utility components are now siblings in the same directory (or the path needs to be adjusted accordingly).
// Simplified to direct local imports for components likely packaged within the same project.
import TypewriterText from "./ui/TyperwriterText.jsx";
import BlurText from "./ui/BlurText.jsx";
import Hyperspeed from "./ui/HyperSpeed.jsx";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Removed unused handleAnimationComplete function

  return (
    <section
      id="home"
      // Increased vertical padding for a taller, more 'premium' section.
      className="relative pt-32 pb-48 overflow-hidden bg-black"
    >
    {/* Hyperspeed bg */}
      
      <div className="absolute inset-0 z-0">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: "turbulentDistortion",
            // Increased length to make rays appear to shoot further/higher
            length: 600,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            // Increased light sticks for a denser, more intense effect
            totalSideLightSticks: 30,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xffffff,
              brokenLines: 0xffffff,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
          }}
        />
      </div>

      {/* ✅ Content Above the Grid - Full Width, Centered */}
      <div className="relative z-0 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          {/* Text Section - Now takes full width and is centered */}
          <div
            className="w-full text-center py-10 justify-center d-flex max-w-4xl" // Max-width for a sleek, focused center column
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0px)" : "translateY(0px)",
              transition: "all 0.8s ease-in-out",
            }}
          >
            <h1
              className="text-white text-5xl md:text-7xl text-center mx-auto" // Added mx-auto
              style={{
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
                fontWeight: 800,
                display: 'flex',
                justifyContent: 'center', // Center horizontally
                alignItems: 'center'      // Center vertically
              }}
            >
              <BlurText
                text="Hi, I am Satyajit"
                delay={150}
                animateBy="words"
                direction="top"
                className="mb-3"
              />
            </h1>

            <h2
              className="text-3xl md:text-5xl font-extrabold mb-8"
              // NEW: Applied the same system font stack to the H2
              style={{
                color: "#8B5CF6",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
              }}
            >
              {/* Uses a rich purple shade that matches the Hyperspeed lights */}
              I am a <TypewriterText />
            </h2>

            {/* Paragraph text often benefits from a slightly different font weight or style */}
            <p
              className="text-xl text-gray-300 max-w-2xl mx-auto mb-10"
              style={{
                fontFamily:
                  "'Verdana', sans-serif",
                fontWeight:200
              }}
            >
              A passionate developer focusing on modern web technologies to
              build user-centric and high-performance applications.
            </p>

            <div
              className="flex justify-center gap-6" // Buttons are now centered
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0px)" : "translateY(20px)",
                transition: "all 1s ease-in-out",
                transitionDelay: "0.3s",
              }}
            >
              <a
                href="#contact"
                // Premium ghost button style
                className="px-8 py-3 text-lg font-semibold border-2 border-[#8B5CF6] text-white rounded-xl shadow-lg transition duration-300 hover:bg-[#8B5CF6]/20"
              >
                Hire Me
              </a>
              <a
                href="#about"
                // Dark background button with light text
                className="px-8 py-3 text-lg font-semibold bg-gray-800 text-gray-200 rounded-xl shadow-lg transition duration-300 hover:bg-gray-700 hover:text-white"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
