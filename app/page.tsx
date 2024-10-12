'use client';

import Intro from '@/components/ui/intro/Intro';
import Classes from '@/sections/classes/Classes';
import Gallery from '@/sections/gallery/Gallery';
import Hero from '@/sections/hero/Hero';
import Prices from '@/sections/pricing/Prices';
import Widget from '@/sections/widget/Widget';
import { useSmoothScroll } from '@/shared/hooks/useSmoothScroll';

export default function Home() {
  const scrollRef = useSmoothScroll();
  return (
    <div ref={scrollRef}>
      <Intro />
      <Hero />
      <Classes />
      <Prices />
      <Gallery />
      <Widget />
    </div>
  );
}
