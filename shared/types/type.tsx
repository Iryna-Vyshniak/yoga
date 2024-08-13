// NAVBAR

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
