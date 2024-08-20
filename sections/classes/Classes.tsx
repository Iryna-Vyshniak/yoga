'use client';

import React from 'react';

import Image from 'next/image';

import AnimatedInView from '@/components/common/animated/AnimatedInView';
import Devider from '@/public/assets/icons/devider.svg';
import { CLASSES } from '@/shared/data/classes';
import { Direction } from '@/shared/types/type';

const Classes = () => {
  return (
    <section
      id='classes'
      className='section container-h custom-scroll flex h-full items-center justify-center overflow-y-auto bg-light-bg-logo bg-contain bg-center bg-no-repeat py-12 dark:bg-dark-bg-logo'
    >
      <div className='container relative grid h-full grid-rows-[auto_1fr] gap-4'>
        <div className='mt-5'>
          {' '}
          <h2 className='text-gray-800 sr-only mb-2 text-center font-tanNimbus text-3xl x:mb-8'>
            Classes
          </h2>
          <div className='flex w-full items-center justify-center'>
            <div className='relative flex w-full max-w-xs items-center justify-center'>
              <div className='relative flex w-full items-center justify-center before:mr-4 before:h-[1px] before:flex-1 before:bg-blue-85 before:content-[""] after:ml-4 after:h-[1px] after:flex-1 after:bg-blue-85 after:content-[""] before:dark:bg-white after:dark:bg-white'>
                <Image
                  src={Devider}
                  alt='separator'
                  width={24}
                  height={24}
                  className='relative z-10 text-blue-85 dark:text-white'
                />
              </div>
            </div>
          </div>
        </div>{' '}
        <ul className='yoga-classes-list grid h-full auto-rows-max grid-cols-1 gap-2 pb-4 x:grid-flow-row x:grid-cols-2 x:place-items-center md:gap-4 lg:grid-cols-3 lg:grid-rows-1'>
          {CLASSES.map(({ image, title, description, id }) => (
            <li
              id={id}
              key={title}
              className='yoga-classes flex h-full w-full flex-auto flex-col'
            >
              <AnimatedInView
                direction={Direction.Right}
                duration={1000}
                delay={200}
              >
                <div className='yoga-classes-wrapper flex w-full flex-col gap-1 x:gap-4'>
                  <div className='box-shadow-md w-full flex-auto rounded-lg border-2 border-blue-70'>
                    <Image
                      src={image}
                      alt={title}
                      className='h-full w-full rounded-lg object-cover'
                    />
                  </div>
                  <div className='box-shadow-md mt-4 w-full flex-auto rounded-lg border-2 border-blue-70 bg-light p-2 dark:bg-dark-500'>
                    <h3 className='text-gray-800 mb-4 text-lg font-semibold md:text-xl'>
                      {title}
                    </h3>
                    <p className='text-gray-600 mb-6 text-xs md:text-base'>
                      {description}
                    </p>
                    <button className='inline-block rounded-md bg-light px-6 py-2 font-medium text-white drop-shadow-md transition duration-300 hover:bg-blue-80'>
                      <span className='text-xs text-blue-85 hover:text-white focus:text-white md:text-base'>
                        Book a class
                      </span>
                    </button>
                  </div>
                </div>
              </AnimatedInView>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Classes;
