import React from 'react';

import { cn } from '@/lib/utils';

const variantClasses = {
  default:
    'bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90 drop-shadow-md transition duration-300 ease-in-out',
  simple:
    'rounded-md bg-light font-medium text-white drop-shadow-md transition duration-300 hover:bg-blue-80 text-blue-85 hover:text-white focus:text-white ease-in-out',
  destructive:
    'bg-destructive text-destructive-foreground hover:bg-destructive/90 dark:bg-destructive dark:text-destructive-foreground dark:hover:bg-destructive/90 drop-shadow-md transition duration-300 ease-in-out',
  outline:
    'border border-input bg-background hover:bg-secondary hover:text-white dark:border-input dark:bg-background dark:hover:bg-accent dark:hover:text-accent-foreground drop-shadow-md transition duration-300 ease-in-out',
  secondary:
    'bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/80 drop-shadow-md transition duration-300 ease-in-out',
  ghost:
    'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent dark:hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline dark:text-primary dark:hover:underline drop-shadow-md transition duration-300 ease-in-out',
};

const sizeClasses = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
  icon: 'h-10 w-10',
};

const getButtonClasses = (
  variant: keyof typeof variantClasses,
  size: keyof typeof sizeClasses,
) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-ring dark:focus-visible:ring-offset-2';

  return cn(baseClasses, variantClasses[variant], sizeClasses[size]);
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  href?: string;
  asChild?: boolean; // To determine whether to use another element as a child
  component?: React.ElementType;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'default',
  size = 'default',
  href,
  asChild = false,
  component: Component = 'button', // Use another element instead of <button> if necessary
  ...props
}) => {
  const classes = getButtonClasses(variant, size);

  return (
    <Component className={cn(classes, className)} href={href} {...props} />
  );
};

export { Button };
