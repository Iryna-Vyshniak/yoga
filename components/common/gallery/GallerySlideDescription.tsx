import React from 'react';

import { GallerySlideProps } from '@/shared/types/type';

const GallerySlideDescription: React.FC<GallerySlideProps> = ({ gallery }) => {
  return (
    <div className='overlap w-[20rem] items-end rounded-sm px-6 py-4 pt-2 backdrop-blur-sm x:w-[31rem] md:px-10 md:py-7'>
      {gallery.map(({ id, label, description }) => (
        <p
          key={id}
          className='animate-text translate-y-[50%] skew-y-[1.5deg]'
          style={{
            animationTimeline: label,
            animationRangeStart: '30cqw',
          }}
        >
          {description}
        </p>
      ))}
    </div>
  );
};

export default GallerySlideDescription;
