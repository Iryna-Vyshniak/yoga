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
