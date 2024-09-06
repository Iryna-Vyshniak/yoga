'use client';

import React from 'react';

import AnimatedInView from '@/components/common/animated/AnimatedInView';
import Icon, {
  commonIcons,
  iconSizes,
  iconTypes,
} from '@/components/ui/icon/Icon';
import data from '@/shared/data/common.json';
import linkContacts from '@/shared/data/linkContacts.json';
import useMediaMatch from '@/shared/hooks/useMediaMatch';
import { Direction } from '@/shared/types/type';

const Widget = () => {
  const { phone } = data.icons;
  const { href, ariaLabel } = linkContacts[0];
  const isMediumOrLarger = useMediaMatch('(min-width: 768px)');

  return (
    <section className='pointer-events-none fixed inset-0 flex h-screen w-full'>
      <AnimatedInView direction={Direction.Right} duration={1000} delay={200}>
        <a
          className='box-shadow-md duration-250 pointer-events-auto absolute bottom-[2%] right-[12%] z-[70] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-gray-60 bg-blue-80 transition-all ease-in-out hover:border-blue-80 hover:bg-blue-70 focus:border-blue-80 focus:bg-blue-70 x:h-12 x:w-12'
          href={href}
          aria-label={ariaLabel}
        >
          <p className='relative flex items-center justify-center'>
            <span className='absolute h-full w-full animate-ping rounded-full border-2 border-blue-80 opacity-75' />
            <span className='absolute h-10 w-10 animate-ping rounded-full border-2 border-blue-80 opacity-50' />
            <span className='absolute h-8 w-8 animate-ping rounded-full border-2 border-blue-80 opacity-25' />
            <Icon
              type={iconTypes.COMMON}
              name={commonIcons.PHONE}
              size={isMediumOrLarger ? iconSizes.LARGE : iconSizes.MEDIUM}
              ariaLabel={phone.ariaLabel}
              className='duration-250 box-shadow relative z-10 text-xs text-white transition-all ease-in-out hover:text-dark-300 focus:text-accent'
            />
          </p>
        </a>
      </AnimatedInView>
    </section>
  );
};

export default Widget;
