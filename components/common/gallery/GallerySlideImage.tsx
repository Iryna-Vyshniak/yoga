import React from 'react';

import Image from 'next/image';

import { GallerySlideProps } from '@/shared/types/type';

const GallerySlideImage: React.FC<GallerySlideProps> = ({ gallery }) => {
  return (
    <>
      {gallery.map(({ id, label, source }) => (
        <div
          key={id}
          className='animate-grow bg-transparent absolute inset-0 -z-20 hidden h-full w-full supports-sda:block'
          style={{
            animationTimeline: label,
          }}
        >
          <Image
            src={source}
            alt='yoga pose'
            width={800}
            height={800}
            placeholder='blur'
            sizes='(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 50vw'
            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform object-cover'
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
