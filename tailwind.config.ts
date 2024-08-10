import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
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
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1440px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
    },
    colors: {
      light: '#e8effa',
      'blue-60': '#d6e2f3',
      'blue-70': '#bed1e8',
      'blue-80': '#9db5d2',
      'blue-90': '#708aab',
      'gray-60': '#a1a5bd',
      'gray-70': '#8b89a5',
      'gray-80': '#60627a',
      beige: '#d6a493',
      'beige-60': '#9b5742',
      accent: '#46261e',
      backdrop: 'rgba(1, 10, 5, 0.75)',
    },
  },
  plugins: [],
}
export default config
