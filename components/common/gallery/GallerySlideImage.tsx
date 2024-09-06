import React from 'react';

import Image from 'next/image';

import { GallerySlideProps } from '@/shared/types/type';

const GallerySlideImage: React.FC<GallerySlideProps> = ({ gallery }) => {
  return (
    <>
      {gallery.map(({ id, label, source, url_img }) => (
        <div
          key={id}
          className='animate-grow bg-transparent absolute inset-0 -z-20 hidden h-full w-full supports-sda:block'
          style={{
            animationTimeline: label,
          }}
        >
          <div
            key={id}
            className='-z-15 absolute inset-0 hidden h-full w-full bg-cover bg-fixed bg-center bg-no-repeat blur-md filter supports-sda:block'
            style={{
              backgroundImage: `url(${url_img})`,
            }}
          >
            <div className='absolute inset-0 z-[1] h-full w-full bg-light-gradient dark:bg-dark-linear-gradient'></div>
          </div>{' '}
          <Image
            src={source}
            alt='yoga pose'
            width={500}
            height={500}
            placeholder='blur'
            sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 50vw'
            className='absolute left-1/2 top-1/2 z-40 w-full -translate-x-1/2 -translate-y-1/2 transform object-cover'
            style={{
              animationTimeline: label,
            }}
          />
        </div>
      ))}
    </>
  );
};

export default GallerySlideImage;
