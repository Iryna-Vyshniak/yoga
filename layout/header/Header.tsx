'use client';

import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import Contacts from '@/components/common/contacts/Contacts';
import Icon, {
  commonIcons,
  iconSizes,
  iconTypes,
} from '@/components/ui/icon/Icon';
import MobileMenu from '@/components/ui/navbar/MobileMenu';
import Navbar from '@/components/ui/navbar/Navbar';
import data from '@/shared/data/common.json';
import useMediaMatch from '@/shared/hooks/useMediaMatch';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMediumOrLarger = useMediaMatch('(min-width: 768px)');
  const { logo, burger } = data.icons;

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (isMediumOrLarger && isOpen) {
      handleClose();
    }
  }, [isMediumOrLarger, isOpen]);

  return (
    <header className='fixed left-0 right-0 top-0 z-50 h-[var(--header-height)] w-full bg-white dark:bg-blue-90/80'>
      <div className='container flex w-full items-center justify-between gap-4 p-4'>
        <Link href='#hero'>
          <Icon
            type={iconTypes.COMMON}
            name={commonIcons.LOGO}
            size={isMediumOrLarger ? iconSizes.LARGE : iconSizes.MEDIUM}
            ariaLabel={logo.ariaLabel}
            className='duration-250 cursor-pointer text-xs text-blue-90 transition-all ease-in-out hover:text-blue-70 focus:text-accent dark:text-blue-60 hover:dark:text-blue-70'
          />
        </Link>
        {isMediumOrLarger ? (
          <Navbar variant='header' />
        ) : (
          <button
            type='button'
            className='hover:text-hover focus-visible:text-pressed duration-250 block transition-all ease-in-out hover:scale-110 xl:hidden'
            aria-label={burger.ariaLabel}
            onClick={handleOpen}
          >
            <Icon
              type={iconTypes.COMMON}
              name={commonIcons.BURGER_MENU}
              size={iconSizes.MEDIUM}
              ariaLabel={burger.ariaLabel}
              className='duration-250 cursor-pointer text-xs text-blue-90 transition-all ease-in-out hover:text-blue-70 focus:text-accent dark:text-blue-60 hover:dark:text-blue-70'
            />
          </button>
        )}

        {!isMediumOrLarger && isOpen && (
          <MobileMenu isOpen={isOpen} onClose={handleClose} />
        )}
        <Contacts />
      </div>
    </header>
  );
};

export default Header;
