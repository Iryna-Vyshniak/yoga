'use client';

import React from 'react';

import data from '@/shared/data/common.json';
import useMediaMatch from '@/shared/hooks/useMediaMatch';

const Socials = () => {
  const isMediumOrLarger = useMediaMatch('(min-width: 768px)');
  const { socials } = data;
  return (
    <ul className='z-40 flex items-center gap-2 sm:absolute sm:-left-20 sm:bottom-0 sm:h-full sm:-rotate-90 sm:transform'>
      {Object.values(socials).map(({ name, ariaLabel, url }) => (
        <li
          key={name}
          className={`rounded-sm px-4 py-4 sm:py-0 ${isMediumOrLarger ? 'backdrop-blur-sm' : ''}`}
        >
          <a
            href={url}
            aria-label={ariaLabel}
            target='_blank'
            rel='noopener noreferrer nofollow'
            className={`text-slate-800 duration-250 cursor-pointer text-xs transition-all ease-in-out hover:text-blue-90 focus:text-accent dark:text-white hover:dark:text-blue-60 ${!isMediumOrLarger ? 'x:text-base' : ''} xl:text-base`}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
