'use client';

import React, { useEffect, useState } from 'react';

import Icon, {
  commonIcons,
  iconSizes,
  iconTypes,
} from '@/components/ui/icon/Icon';
import data from '@/shared/data/common.json';

const Intro = () => {
  const [show, setShow] = useState<boolean>(true);
  const { introTitle, introSubtitle } = data.intro;
  const { ariaLabel } = data.icons.logo;

  useEffect(() => {
    let timerId;

    timerId = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => clearTimeout(timerId);
  }, []);

  if (!show) return null;

  return (
    <section className='remove-scrollbar fixed inset-0 z-50 flex h-screen w-full items-center justify-center overflow-hidden bg-light-hero bg-cover bg-center bg-no-repeat dark:bg-dark-hero'>
      <div className='flex flex-col items-center justify-center gap-4 rounded-sm p-4 backdrop-blur-sm'>
        <Icon
          type={iconTypes.COMMON}
          name={commonIcons.LOGO}
          size={iconSizes.EXTRA_LARGE}
          ariaLabel={ariaLabel}
          className='text-blue-90 dark:text-blue-60'
        />
        <h1 className='section-title text-transparent animate-typing-and-shine overflow-hidden whitespace-nowrap bg-dark-text-gradient bg-[length:200%] bg-clip-text font-tanNimbus uppercase drop-shadow-sm dark:bg-light-text-gradient md:p-4 lg:leading-[8rem]'>
          {introTitle}
        </h1>
        <p className='animate-typing-and-shine overflow-hidden whitespace-nowrap bg-[length:200%] text-center text-base uppercase drop-shadow-sm sm:text-xl md:text-2xl'>
          {introSubtitle}
        </p>
      </div>
    </section>
  );
};

export default Intro;
