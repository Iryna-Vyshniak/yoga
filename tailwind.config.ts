import type { Config } from 'tailwindcss';

const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  darkMode: ['class'],
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        xs: '1rem',
        sm: '1rem',
        lg: '2rem',
      },
      screens: {
        xs: '320px',
        x: '480px',
        s: '640px',
        sm: '768px',
        md: '960px',
        lg: '1280px',
        xl: '1440px',
      },
    },
    extend: {
      fontSize: {
        '5xl': '2rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
        '11xl': '9rem',
        '12xl': '10rem',
        '13xl': '11rem',
        '14xl': '18rem',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        tanNimbus: ['TAN Nimbus', 'sans-serif'],
      },
      backgroundImage: {
        'light-text-gradient': 'var(--light-text-gradient)',
        'dark-text-gradient': 'var(--dark-text-gradient)',
        'light-gradient': 'var(--light-radial-gradient)',
        'dark-gradient': 'var(--dark-radial-gradient)',
        'light-hero':
          'var(--light-radial-gradient), url("/assets/images/hero-bg.jpg")',
        'dark-hero':
          'var(--dark-radial-gradient), url("/assets/images/hero-bg.jpg")',
      },
      backgroundSize: {
        '200%': '200% auto',
        '500%': '500% auto',
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        textShine: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'typing-and-shine':
          'typing 1s steps(15, end) forwards, textShine 2s ease-in-out infinite alternate',
        shine: 'textShine 1s ease-in-out infinite alternate',
      },
    },
    letterSpacing: {
      thin: '-.04em',
      base: '0.09em',
      normal: '0.1em',
      wide: '.18em',
      large: '2.28em',
    },
    screens: {
      xs: '320px',
      x: '480px',
      s: '640px',
      sm: '768px',
      md: '960px',
      lg: '1280px',
      xl: '1440px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '959.98px' },
    },
    colors: {
      light: '#e8effa',
      white: '#ffffff',
      'blue-60': '#d6e2f3',
      'blue-70': '#bed1e8',
      'blue-80': '#9db5d2',
      'blue-85': '#7490b3',
      'blue-90': '#708aab',
      'gray-60': '#a1a5bd',
      'gray-70': '#8b89a5',
      'gray-80': '#60627a',
      beige: '#d6a493',
      'beige-60': '#9b5742',
      accent: '#46261e',
      backdrop: 'rgba(1, 10, 5, 0.75)',
      dark: {
        200: '#020617',
        300: '#0f172a',
        400: '#1e293b',
        500: '#475569',
        600: '#64748b',
        700: '#94a3b8',
      },
    },
    dropShadow: {
      DEFAULT: ['0 0.5px 0.5px rgba(30, 41, 59, 0.6)'],
      sm: [
        '0 0.5px 1px rgba(112, 138, 171, 0.5)',
        '0 0.5px 1px rgba(255, 255, 255, 0.5)',
      ],
      md: [
        '0 4px 5px rgba(112, 138, 171, 0.3)',
        '0 2px 2px rgba(255, 255, 255, 0.25)',
      ],
      lg: [
        '0 8px 8px rgba(112, 138, 171, 0.4)',
        '0 6px 8px rgba(255, 255, 255, 0.3)',
      ],
      xl: [
        '0 10px 16px rgba(112, 138, 171, 0.5)',
        '0 8px 5px rgba(255, 255, 255, 0.4)',
      ],
      '2xl': [
        '0 25px 25px rgba(112, 138, 171, 0.6)',
        '0 12px 10px rgba(255, 255, 255, 0.5)',
      ],
      none: '0 0 #0000',
    },
    supports: {
      sda: 'timeline-scope: none',
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
