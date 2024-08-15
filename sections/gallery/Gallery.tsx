import React, { CSSProperties } from 'react';

import GalleryProgressIndicator from '@/components/common/gallery/GalleryProgressIndicator';
import GallerySlideCaptions from '@/components/common/gallery/GallerySlideCaptions';
import GallerySlideDescription from '@/components/common/gallery/GallerySlideDescription';
import GallerySlideImage from '@/components/common/gallery/GallerySlideImage';
import GallerySlider from '@/components/common/gallery/GallerySlider';
import { gallery } from '@/shared/data/gallery';

const Gallery = () => {
  return (
    <section
      id='gallery'
      className='container-h relative isolate flex flex-col gap-8 overflow-clip bg-light-gradient supports-sda:pointer-events-none dark:bg-dark-gradient'
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
      <div className='absolute inset-0 z-30 h-full w-full bg-light-gradient dark:bg-dark-gradient'></div>
    </section>
  );
};

export default Gallery;
