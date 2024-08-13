// Defining the icon types
export const iconTypes = {
  COMMON: 'COMMON',
} as const;

export type IconTypes = (typeof iconTypes)[keyof typeof iconTypes];

// Defining the common icons
export const commonIcons = {
  LOGO: 'yoga-logo',
  BURGER_MENU: 'burger-menu',
  CLOSE: 'close',
  MAIL: 'mail',
  PHONE: 'phone',
  CHEVRON_DOWN: 'chevron-down',
} as const;

export type CommonIcons = (typeof commonIcons)[keyof typeof commonIcons];

// Defining icon sizes
export const iconSizes = {
  SMALL: 16,
  MEDIUM: 24,
  LARGE: 32,
  EXTRA_LARGE: 56,
  CUSTOM: '1em', // Custom size can be set via CSS
} as const;

export type IconSizes = (typeof iconSizes)[keyof typeof iconSizes];

// Mapping icon types to their respective icon sets
export interface SpritesMap {
  [iconTypes.COMMON]: CommonIcons;
}

// Defining the icon source type
export type IconSource = {
  name: CommonIcons;
  type: keyof typeof iconTypes;
};

// Defining props for the Icon component
export interface IconProps<Group extends keyof SpritesMap> {
  name: SpritesMap[Group];
  type: Group;
  ariaLabel?: string;
  size?: IconSizes;
  className?: string;
}

// Icon component definition
export const Icon = <Group extends keyof SpritesMap>({
  type,
  name,
  size = iconSizes.CUSTOM,
  className,
  ariaLabel,
}: IconProps<Group>) => (
  <svg
    className={`${className} text-current`}
    width={size}
    height={size}
    aria-label={ariaLabel}
    role='img'
  >
    <use href={`/assets/icons/sprites/${type.toLowerCase()}.svg#${name}`} />
  </svg>
);

export default Icon;
