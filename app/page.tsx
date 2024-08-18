import Intro from '@/components/ui/intro/Intro';
import Classes from '@/sections/classes/Classes';
import Gallery from '@/sections/gallery/Gallery';
import Hero from '@/sections/hero/Hero';
import Widget from '@/sections/widget/Widget';

export default function Home() {
  return (
    <>
      <Intro />
      <Hero />
      <Classes />
      <Gallery />
      <Widget />
    </>
  );
}
