import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-raleway)'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1024px',
        '2xl': '1024px', // Match your header width
      },
    },
    extend: {
      colors: {
        black: {
          DEFAULT: '#0a0a1a',
          100: '#020205',
          200: '#04040a',
          300: '#06060f',
          400: '#080815',
          500: '#0a0a1a',
          600: '#25255e',
          700: '#3f3fa2',
          800: '#7676ca',
          900: '#bbbbe4',
        },
        lime: {
          DEFAULT: '#ceff1a',
          100: '#2c3800',
          200: '#587000',
          300: '#84a800',
          400: '#b0e000',
          500: '#ceff1a',
          600: '#d7ff47',
          700: '#e1ff75',
          800: '#ebffa3',
          900: '#f5ffd1',
        },
        violet: {
          DEFAULT: '#7d3cff',
          100: '#15003f',
          200: '#2a007e',
          300: '#3f00be',
          400: '#5400fd',
          500: '#7d3cff',
          600: '#9864ff',
          700: '#b18bff',
          800: '#cbb1ff',
          900: '#e5d8ff',
        },
        blue: {
          DEFAULT: '#1be7ff',
          100: '#003238',
          200: '#006570',
          300: '#0097a8',
          400: '#00cae0',
          500: '#1be7ff',
          600: '#47edff',
          700: '#75f1ff',
          800: '#a3f6ff',
          900: '#d1faff',
        },
        white: {
          DEFAULT: '#eef0f2',
          100: '#2a3036',
          200: '#53606c',
          300: '#81909e',
          400: '#b8c0c8',
          500: '#eef0f2',
          600: '#f1f3f4',
          700: '#f5f6f7',
          800: '#f8f9fa',
          900: '#fcfcfc',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
