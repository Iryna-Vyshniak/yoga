import React from 'react';

import { GallerySlideProps } from '@/shared/types/type';

const GalleryProgressIndicator: React.FC<GallerySlideProps> = ({ gallery }) => {
  return (
    <div className='relative z-40 my-auto -ml-20 w-40 rotate-90 transform'>
      <nav className='flex w-40 justify-between gap-5 text-sm text-dark-300 dark:text-white'>
        {gallery.map(({ id, href, num, label }) => (
          <a
            key={id}
            href={href}
            className='animate-page pointer-events-auto -rotate-90 transform text-dark-300 dark:text-white dark:drop-shadow'
            style={{
              animationTimeline: label,
              animationRangeStart: '10cqw',
            }}
          >
            {num}
          </a>
        ))}
      </nav>

      <div className='mt-2 w-40 bg-dark-600/60'>
        <div
          className='animate-progress h-0.5 origin-left bg-dark-400 dark:bg-white dark:drop-shadow'
          style={{ animationTimeline: '--scroller' }}
        ></div>
      </div>
    </div>
  );
};

export default GalleryProgressIndicator;
