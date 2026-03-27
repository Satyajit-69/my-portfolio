import { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card relative w-full h-[260px] my-6 p-0 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.12)] box-border origin-top will-change-transform ${itemClassName}`.trim()}
    style={{
      backfaceVisibility: 'hidden',
      transformStyle: 'preserve-3d'
    }}
  >
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 90,
  itemScale = 0.06,
  itemStackDistance = 18,
  stackPosition = '25%',
  scaleEndPosition = '12%',
  baseScale = 0.88,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
  onStackComplete
}) => {
  const scrollerRef = useRef(null);
  const cardsRef = useRef([]);
  const lenisRef = useRef(null);
  const animationFrameRef = useRef(null);

  const update = useCallback(() => {
    const scrollTop = window.scrollY;
    const vh = window.innerHeight;

    cardsRef.current.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      const offset = rect.top + scrollTop;

      const start = offset - vh * 0.25 - i * itemStackDistance;
      const end = offset - vh * 0.12;

      let progress = (scrollTop - start) / (end - start);
      progress = Math.max(0, Math.min(1, progress));

      const scale = 1 - progress * (1 - (baseScale + i * itemScale));
      const translateY =
        scrollTop >= start
          ? scrollTop - offset + vh * 0.25 + i * itemStackDistance
          : 0;

      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
    });
  }, [itemScale, itemStackDistance, baseScale]);

  useLayoutEffect(() => {
    cardsRef.current = Array.from(document.querySelectorAll('.scroll-stack-card'));

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    lenis.on('scroll', update);

    const raf = (time) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;

    update();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      lenis.destroy();
    };
  }, [update]);

  return (
    <div className={`relative w-full ${className}`} ref={scrollerRef}>
      <div className="pt-[20vh] px-6 pb-[40vh]">
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;