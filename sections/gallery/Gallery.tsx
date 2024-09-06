'use client';

import React, { CSSProperties } from 'react';

import AnimatedInView from '@/components/common/animated/AnimatedInView';
import GalleryProgressIndicator from '@/components/common/gallery/GalleryProgressIndicator';
import GallerySlideCaptions from '@/components/common/gallery/GallerySlideCaptions';
import GallerySlideDescription from '@/components/common/gallery/GallerySlideDescription';
import GallerySlideImage from '@/components/common/gallery/GallerySlideImage';
import GallerySlider from '@/components/common/gallery/GallerySlider';
import { gallery } from '@/shared/data/gallery';
import { Direction } from '@/shared/types/type';

const Gallery = () => {
  return (
    <AnimatedInView direction={Direction.Right} duration={1000} delay={200}>
      <section
        id='gallery'
        className='section container-h relative isolate flex flex-col gap-8 overflow-clip bg-light-gradient supports-sda:pointer-events-none dark:bg-dark-gradient'
        style={
          {
            timelineScope:
              '--scroller, --scroller-slide-1, --scroller-slide-2, --scroller-slide-3',
            '--slides': 3,
          } as CSSProperties
        }
      >
        <GallerySlideImage gallery={gallery} />
        <div className='container-h container flex flex-col'>
          <GallerySlider gallery={gallery} />
          <div className='relative z-40 hidden min-h-full flex-1 flex-col gap-[inherit] p-2 supports-sda:flex'>
            <GallerySlideDescription gallery={gallery} />
            <GalleryProgressIndicator gallery={gallery} />
            <GallerySlideCaptions gallery={gallery} />
          </div>
        </div>
      </section>
    </AnimatedInView>
  );
};

export default Gallery;
