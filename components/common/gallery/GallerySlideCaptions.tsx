import React from 'react';

import { GallerySlideProps } from '@/shared/types/type';

const GallerySlideCaptions: React.FC<GallerySlideProps> = ({ gallery }) => {
  return (
    <div className='overlap relative z-40 w-[20rem] items-end px-6 py-4 x:w-[31rem] md:px-10 md:py-7'>
      {gallery.map(({ id, title, label, slogan }) => (
        <div key={id}>
          <p className='block overflow-clip'>
            <span
              className='tracking-widest animate-text-up mb-3 block font-medium uppercase md:mb-4'
              style={{
                animationTimeline: label,
                animationRangeStart: '30cqw',
              }}
            >
              {title}
            </span>
          </p>
          <p
            className='animate-text translate-y-[105%] skew-y-6 pb-7 font-tanNimbus text-4xl md:text-5xl md:leading-[8rem]'
            style={{
              animationTimeline: label,
              animationRangeStart: '30cqw',
            }}
          >
            {slogan}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GallerySlideCaptions;
