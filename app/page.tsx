import Intro from '@/components/ui/intro/Intro';
import Classes from '@/sections/classes/Classes';
import Gallery from '@/sections/gallery/Gallery';
import Hero from '@/sections/hero/Hero';

export default function Home() {
  return (
    <>
      <Intro />
      <Hero />
      <Classes />
      <Gallery />
    </>
  );
}
