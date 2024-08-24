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
  url_img: string;
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

// for classes section

export interface ClassItem {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
}

// prices

export interface PricingCardProps {
  isYearly?: boolean;
  title: string;
  monthlyPrice?: number;
  yearlyPrice?: number;
  description: string;
  features: string[];
  schedule: string;
  actionLabel: string;
  popular?: boolean;
  exclusive?: boolean;
  yearlyFeatures?: string[];
  yearlySchedule?: string;
  yearlyDescription?: string;
}

export interface PricingSwitchProps {
  onSwitch: (value: string) => void;
}
