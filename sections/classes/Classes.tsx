'use client';

import React from 'react';

import Image from 'next/image';

import AnimatedInView from '@/components/common/animated/AnimatedInView';
import Devider from '@/components/ui/devider/Devider';
import SectionHeader from '@/components/ui/section.header/SectionHeader';
import { CLASSES } from '@/shared/data/classes';
import { Direction } from '@/shared/types/type';

const Classes = () => {
  return (
    <section
      id='classes'
      className='section container-h flex h-full items-center justify-center overflow-y-auto bg-light-bg-logo bg-contain bg-center bg-no-repeat py-12 dark:bg-dark-bg-logo'
    >
      <div className='container relative grid h-full grid-rows-[auto_auto_1fr] gap-4 overflow-x-auto'>
        <AnimatedInView direction={Direction.Right} duration={1000} delay={220}>
          <SectionHeader
            title='Classes'
            subtitle='Unroll your mat and find your perfect flow'
          />
        </AnimatedInView>
        <AnimatedInView direction={Direction.Right} duration={1000} delay={230}>
          <Devider />
        </AnimatedInView>
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
                delay={240}
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
