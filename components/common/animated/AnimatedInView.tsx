import React, { useEffect, useRef, useState } from 'react';

import { AnimatedInViewProps, Direction } from '@/shared/types/type';

const AnimatedInView: React.FC<AnimatedInViewProps> = ({
  children,
  direction = Direction.Down,
  duration = 1000,
  delay = 150,
  triggerOnHover = false,
  reverse = false,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getDirectionClass = () => {
    switch (direction) {
      case Direction.Left:
        return '-translate-x-10';
      case Direction.Right:
        return 'translate-x-10';
      case Direction.Top:
        return '-translate-y-10';
      case Direction.Down:
        return 'translate-y-10';
      default:
        return 'translate-y-10';
    }
  };

  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
  };

  const onVisibilityChange: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onVisibilityChange, options);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, isVisible]);

  const handleMouseEnter = () => {
    if (triggerOnHover) setIsVisible(true);
  };

  const handleMouseLeave = () => {
    if (triggerOnHover && reverse) setIsVisible(false);
  };

  return (
    <div
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
      className={`${
        isVisible
          ? 'translate-x-0 translate-y-0 opacity-100'
          : getDirectionClass()
      } w-full opacity-0 transition ease-in-out`}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default AnimatedInView;
