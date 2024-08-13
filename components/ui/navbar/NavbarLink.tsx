'use client';

import React from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';
import { NavbarLinkProps } from '@/shared/types/type';

const NavbarLink: React.FC<NavbarLinkProps> = ({
  name,
  href,
  variant,
  onClick,
}) => {
  const navlinkClasses = cn(
    'cursor-pointer text-slate-800 dark:text-white text-xs xl:text-base hover:text-blue-90 hover:dark:text-blue-60 focus:text-accent active:text-blue-90 dark:active:text-blue-70 duration-250 transition-all ease-in-out sm:after:content-["|"] sm:after:text-slate-800 sm:after:pl-2 sm:last:after:content-none',
    {
      'active:text-blue-90 dark:active:text-blue-70 cursor-pointer text-slate-800 dark:text-white text-xs x:text-base hover:text-blue-90 hover:dark:text-blue-60 focus:text-accent duration-250 transition-all ease-in-out dark:drop-shadow':
        variant === 'mobile-menu',
    },
  );

  return (
    <li className={navlinkClasses}>
      <Link
        href={href}
        onClick={onClick}
        className={
          variant === 'mobile-menu'
            ? 'dark:drop-shadow dark:hover:drop-shadow-none dark:focus:drop-shadow-none'
            : ''
        }
      >
        {name}
      </Link>
    </li>
  );
};

export default NavbarLink;
