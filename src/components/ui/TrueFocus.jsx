import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const TrueFocus = ({
  sentence = "True Focus",
  separator = " ",
  manualMode = false,
  blurAmount = 5,
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}) => {
  const words = sentence.split(separator);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const wordRefs = useRef([]);
  const [focusRect, setFocusRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  // Auto rotate
  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(
        () => setCurrentIndex((prev) => (prev + 1) % words.length),
        (animationDuration + pauseBetweenAnimations) * 1000
      );
      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  // Update border box position
  useEffect(() => {
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect =
      wordRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex]);

  return (
    <div
      ref={containerRef}
      className="relative flex gap-4 justify-center items-center flex-wrap"
      style={{ userSelect: "none" }}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;

        return (
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            className={`
              relative text-[3rem] font-extrabold cursor-pointer transition-all duration-500
              bg-clip-text text-transparent 
              ${
                isActive
                  ? "scale-110 animate-gradientText bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 dark:from-yellow-300 dark:via-orange-400 dark:to-red-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.65)]"
                  : "blur-sm bg-gradient-to-r from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-700"
              }
            `}
          >
            {word}
          </span>
        );
      })}

      {/* Animated Border Box */}
      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-border border-0"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{ duration: animationDuration }}
      >
        {["tl", "tr", "bl", "br"].map((corner, i) => {
          const styles = {
            tl: "top-[-10px] left-[-10px] border-r-0 border-b-0",
            tr: "top-[-10px] right-[-10px] border-l-0 border-b-0",
            bl: "bottom-[-10px] left-[-10px] border-r-0 border-t-0",
            br: "bottom-[-10px] right-[-10px] border-l-0 border-t-0",
          }[corner];

          return (
            <span
              key={i}
              className={`absolute w-4 h-4 border-[3px] rounded-[3px] ${styles} animate-glow`}
              style={{
                borderColor: "var(--focus-border)",
                filter: "drop-shadow(0 0 6px var(--focus-glow))",
              }}
            ></span>
          );
        })}
      </motion.div>

      {/* CSS Variables + Animation */}
      <style>
        {`
          :root {
            --focus-border: #38bdf8;
            --focus-glow: rgba(56, 189, 248, 0.7);
          }
          .dark :root {
            --focus-border: #facc15;
            --focus-glow: rgba(250, 204, 21, 0.7);
          }

          /* Animated gradient for active word */
          @keyframes gradientSlide {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradientText {
            background-size: 250% 250%;
            animation: gradientSlide 3s infinite ease-in-out;
          }

          /* Glowing border corners */
          @keyframes glowPulse {
            0%,100% { filter: drop-shadow(0 0 4px var(--focus-glow)); }
            50% { filter: drop-shadow(0 0 10px var(--focus-glow)); }
          }
          .animate-glow {
            animation: glowPulse 1.6s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default TrueFocus;
