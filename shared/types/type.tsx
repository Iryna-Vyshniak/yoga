// NAVBAR
import { StaticImageData } from 'next/image';

export interface NavbarProps {
  variant: 'header' | 'mobile-menu';
  className?: string;
  onClick?: () => void;
}

export interface NavbarLinkProps {
  name: string;
  href: string;
  variant: 'mobile-menu' | 'header';
  onClick?: () => void;
}
export interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// GALLERY
export interface GalleryItem {
  id: string;
  href: string;
  source: StaticImageData;
  label: string;
  num: string;
  title: string;
  slogan: string;
  description: string;
}

export interface GallerySlideProps {
  gallery: GalleryItem[];
}

// for animation view

export enum Direction {
  Left = 'left',
  Right = 'right',
  Top = 'top',
  Down = 'down',
}

export interface AnimatedInViewProps {
  children: React.ReactNode;
  direction?: Direction;
  duration?: number;
  delay?: number;
  triggerOnHover?: boolean;
  reverse?: boolean;
}
