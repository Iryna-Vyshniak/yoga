'use client';

import React from 'react';

import Link from 'next/link';

import Socials from '@/components/common/socials/Socials';
import Icon, {
  commonIcons,
  iconSizes,
  iconTypes,
} from '@/components/ui/icon/Icon';
import data from '@/shared/data/common.json';
import useMediaMatch from '@/shared/hooks/useMediaMatch';
import { BurgerMenuProps } from '@/shared/types/type';

import NavBar from './Navbar';

const MobileMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  const isMediumOrLarger = useMediaMatch('(min-width: 768px)');
  if (!isOpen) return null;

  const { logo, burger } = data.icons;

  return (
    <div className='remove-scrollbar z-60 fixed bottom-0 left-0 right-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-4 overflow-hidden bg-light/30 p-4 backdrop-blur-xl dark:bg-blue-90/70'>
      <div className='flex w-full items-center justify-between pr-4 pt-4'>
        <Link href='#hero' onClick={onClose}>
          <Icon
            type={iconTypes.COMMON}
            name={commonIcons.LOGO}
            size={iconSizes.LARGE}
            ariaLabel={logo.ariaLabel}
            className='duration-250 cursor-pointer text-xs text-blue-90 transition-all ease-in-out hover:text-blue-70 focus:text-accent dark:text-blue-60 hover:dark:text-blue-70'
          />
        </Link>
        <button
          aria-label={burger.close}
          className='flex items-center gap-2 uppercase'
          onClick={onClose}
        >
          <Icon
            type={iconTypes.COMMON}
            name={commonIcons.CLOSE}
            size={iconSizes.SMALL}
            ariaLabel={burger.close}
            className='duration-250 cursor-pointer text-xs text-blue-90 transition-all ease-in-out hover:text-blue-70 focus:text-accent dark:text-blue-60 hover:dark:text-blue-70'
          />
        </button>
      </div>
      <NavBar variant='mobile-menu' onClick={onClose} />
      {!isMediumOrLarger && <Socials />}
    </div>
  );
};

export default MobileMenu;
