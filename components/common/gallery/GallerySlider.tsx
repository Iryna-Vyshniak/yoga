import React from 'react';

import { GallerySlideProps } from '@/shared/types/type';

const GallerySlider: React.FC<GallerySlideProps> = ({ gallery }) => {
  return (
    <div
      className='custom-scrollbar pointer-events-auto absolute inset-0 -z-10 hidden h-full w-full snap-x snap-mandatory overflow-x-auto scroll-smooth supports-sda:block'
      style={{ scrollTimeline: '--scroller x' }}
    >
      <ul className='grid h-full w-fit auto-cols-[70cqw] grid-flow-col pr-[30cqw]'>
        {gallery.map(({ id, label }) => (
          <li
            role='none'
            key={id}
            id={id}
            className='snap-start'
            style={{ viewTimeline: `${label} x` }}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default GallerySlider;
