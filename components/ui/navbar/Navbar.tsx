import React from 'react';

import { cn } from '@/lib/utils';
import navLinks from '@/shared/data/header.json';
import { NavbarProps } from '@/shared/types/type';

import NavbarLink from './NavbarLink';

const NavBar: React.FC<NavbarProps> = ({ variant, onClick, className }) => {
  const NavbarClasses = cn(
    'flex',
    {
      'items-center self-center flex-col gap-6 p-4': variant === 'mobile-menu',
      'items-center gap-2': variant === 'header',
    },
    className,
  );
  return (
    <nav className={variant === 'mobile-menu' ? 'flex grow self-center' : ''}>
      <ul className={NavbarClasses}>
        {navLinks.map(({ id, name, href }) => (
          <NavbarLink
            key={id}
            name={name}
            href={href}
            variant={variant}
            onClick={onClick}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
