import React from 'react';

import { GallerySlideProps } from '@/shared/types/type';

const GalleryProgressIndicator: React.FC<GallerySlideProps> = ({ gallery }) => {
  return (
    <nav className='relative top-20 z-50 my-auto -ml-8 x:-ml-6'>
      <div className='relative'>
        {' '}
        <ul className='relative z-30 flex w-[180%] flex-col justify-between gap-5 text-sm text-dark-600 dark:text-white'>
          {gallery.map(({ id, href, num, label }) => (
            <li
              key={id}
              className='p-[1.1rem]'
              style={{
                animationTimeline: label,
                animationRangeStart: '10cqw',
              }}
            >
              {' '}
              <a
                href={href}
                className='animate-indicator indicator-link pointer-events-auto cursor-pointer'
                style={{
                  animationTimeline: label,
                  animationRangeStart: '10cqw',
                }}
              >
                <span
                  className='animate-indicator ml-4 text-white dark:drop-shadow'
                  style={{
                    animationTimeline: label,
                    animationRangeStart: '10cqw',
                  }}
                >
                  {num}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className='indicator animate-indicator absolute left-[1.35rem] top-1/2 z-40 -translate-y-1/2'>
          <div
            className='animate-progress h-0.5 origin-left bg-dark-600 dark:bg-white dark:drop-shadow'
            style={{ animationTimeline: '--scroller' }}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default GalleryProgressIndicator;
