import React from 'react';

import Image from 'next/image';

import Separator from '@/public/assets/icons/devider.svg';

const Devider = () => {
  return (
    <div className='relative mx-auto my-0 mb-4 flex w-full max-w-xs items-center justify-center'>
      <div className='relative flex w-full items-center justify-center before:mr-4 before:h-[1px] before:flex-1 before:bg-blue-85 before:content-[""] after:ml-4 after:h-[1px] after:flex-1 after:bg-blue-85 after:content-[""] before:dark:bg-white after:dark:bg-white'>
        <Image
          src={Separator}
          alt='separator'
          width={24}
          height={24}
          className='relative z-10 text-blue-85 dark:text-white'
        />
      </div>
    </div>
  );
};

export default Devider;
