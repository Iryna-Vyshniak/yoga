import { useEffect, useRef } from 'react';

export const useSmoothScroll = (speed: number = 0.08) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef<number>(0);

  useEffect(() => {
    const scrollWrap = scrollRef.current;

    if (!scrollWrap) return;

    const height = () => scrollWrap.getBoundingClientRect().height;

    const smoothScroll = () => {
      const offset = offsetRef.current;
      const newOffset = offset + (window.pageYOffset - offset) * speed;
      offsetRef.current = newOffset;

      scrollWrap.style.transform = `translateY(-${newOffset}px) translateZ(0)`;
      window.requestAnimationFrame(smoothScroll);
    };

    const handleResize = () => {
      document.body.style.height = Math.floor(height()) + 'px';
    };

    smoothScroll(); // Start smooth scrolling
    handleResize(); // Adjust the height on initial load

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [speed]);

  return scrollRef;
};
