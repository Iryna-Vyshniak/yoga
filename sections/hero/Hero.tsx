'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import AnimatedInView from '@/components/common/animated/AnimatedInView';
import Socials from '@/components/common/socials/Socials';
import Icon, {
  commonIcons,
  iconSizes,
  iconTypes,
} from '@/components/ui/icon/Icon';
import HeroYoga from '@/public/assets/images/hero-yoga.png';
import data from '@/shared/data/hero.json';
import useMediaMatch from '@/shared/hooks/useMediaMatch';

const Hero = () => {
  const isMediumOrLarger = useMediaMatch('(min-width: 768px)');
  const {
    pretitle,
    title,
    startTitle,
    endTitle,
    heroHref,
    ariaLabelIcon,
    altPhoto,
  } = data;
  return (
    <section
      id='#hero'
      className='flex h-screen items-center justify-center bg-light-hero bg-cover bg-center bg-no-repeat dark:bg-dark-hero'
    >
      <div className='container relative flex h-full min-h-screen w-full flex-col items-center justify-center gap-4'>
        <AnimatedInView>
          {' '}
          <div className='flex h-full w-full items-center justify-center'>
            {/* Yoga Text */}
            <p
              aria-hidden='true'
              className='text-transparent relative z-30 mr-4 animate-shine overflow-hidden whitespace-nowrap bg-light-text-gradient bg-[length:200%] bg-clip-text font-tanNimbus text-6xl drop-shadow-xl x:text-8xl md:text-9xl lg:text-14xl'
            >
              {startTitle}
            </p>
            <h1 className='relative text-center font-tanNimbus text-6xl drop-shadow-xl x:text-8xl md:text-9xl lg:text-14xl'>
              <span className='sr-only'>{title}</span>
              <span className='text-transparent relative z-10 animate-shine overflow-hidden whitespace-nowrap bg-gradient-to-r from-blue-90 via-blue-85 to-blue-90 bg-[length:200%] bg-clip-text drop-shadow-xl'>
                {endTitle}
              </span>
            </h1>

            {/* Yoga Image */}
            <Image
              src={HeroYoga}
              alt={altPhoto}
              width={600}
              height={600}
              priority
              placeholder='empty'
              className='absolute inset-0 z-20 m-auto h-[300px] max-h-[350px] min-h-[300px] w-auto max-w-full object-contain sm:max-h-[450px] sm:min-h-[400px] md:max-h-[500px] md:min-h-[450px] lg:max-h-[650px] lg:min-h-[600px]'
            />

            {/* Balance Text */}
            {isMediumOrLarger && (
              <div className='top-60% absolute left-[14%] z-40 translate-y-[60%] transform'>
                <h2 className='text-slate-800 duration-250 w-1/2 text-2xl dark:text-white x:text-3xl md:text-4xl lg:text-6xl lg:leading-[3.6rem]'>
                  {pretitle}
                </h2>
              </div>
            )}
          </div>
        </AnimatedInView>

        {/* SOCIALS */}
        {isMediumOrLarger && <Socials />}
        {/* BUTTON DOWN */}
        <Link
          href={heroHref}
          className='absolute bottom-6 flex cursor-pointer flex-col items-center justify-center rounded-sm p-4 backdrop-blur-sm'
        >
          <p
            className={`text-slate-800 duration-250 cursor-pointer text-xs transition-all ease-in-out hover:text-blue-90 focus:text-accent dark:text-white hover:dark:text-blue-60 ${!isMediumOrLarger ? 'x:text-base' : ''} xl:text-base`}
          >
            Get started
          </p>
          <Icon
            type={iconTypes.COMMON}
            name={commonIcons.CHEVRON_DOWN}
            size={iconSizes.CUSTOM}
            ariaLabel={ariaLabelIcon}
            className='text-slate-800 duration-250 cursor-pointer text-xs transition-all ease-in-out hover:text-blue-90 focus:text-accent dark:text-white hover:dark:text-blue-60'
          />
          <Icon
            type={iconTypes.COMMON}
            name={commonIcons.CHEVRON_DOWN}
            size={iconSizes.CUSTOM}
            ariaLabel={ariaLabelIcon}
            className='text-slate-800 duration-250 cursor-pointer text-xs transition-all ease-in-out hover:text-blue-90 focus:text-accent dark:text-white hover:dark:text-blue-60'
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
