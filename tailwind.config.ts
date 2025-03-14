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
        '2xl': '1024px',
      },
    },
    extend: {
      // Accesibility approved line heights
      fontSize: {
        '4xl': ['2.25rem', { lineHeight: '1.3' }], // 36px font → 47px line height
        '3xl': ['1.875rem', { lineHeight: '1.3' }], // 30px font → 39px line height
        '2xl': ['1.5rem', { lineHeight: '1.5' }], // 24px font → 36px line height
        xl: ['1.25rem', { lineHeight: '1.5' }], // 20px font → 30px line height
        lg: ['1.125rem', { lineHeight: '1.5' }], // 18px font → 27px line height
        base: ['1rem', { lineHeight: '1.5' }], // 16px font → 24px line height
        sm: ['0.875rem', { lineHeight: '1.6' }], // 14px → 22px line height
      },
      colors: {
        black: {
          DEFAULT: '#0a0a1a',
          100: '#bbbbe4',
          200: '#7676ca',
          300: '#3f3fa2',
          400: '#25255e',
          500: '#0a0a1a',
          600: '#080815',
          700: '#06060f',
          800: '#04040a',
          900: '#020205',
        },
        lime: {
          DEFAULT: '#ceff1a',
          100: '#f5ffd1',
          200: '#ebffa3',
          300: '#e1ff75',
          400: '#d7ff47',
          500: '#ceff1a',
          600: '#b0e000',
          700: '#84a800',
          800: '#587000',
          900: '#2c3800',
        },
        violet: {
          DEFAULT: '#7d3cff',
          100: '#e5d8ff',
          200: '#cbb1ff',
          300: '#b18bff',
          400: '#9864ff',
          500: '#7d3cff',
          600: '#5400fd',
          700: '#3f00be',
          800: '#2a007e',
          900: '#15003f',
        },
        blue: {
          DEFAULT: '#1be7ff',
          100: '#d1faff',
          200: '#a3f6ff',
          300: '#75f1ff',
          400: '#47edff',
          500: '#1be7ff',
          600: '#00cae0',
          700: '#0097a8',
          800: '#006570',
          900: '#003238',
        },
        white: {
          DEFAULT: '#eef0f2',
          100: '#fcfcfc',
          200: '#f8f9fa',
          300: '#f5f6f7',
          400: '#f1f3f4',
          500: '#eef0f2',
          600: '#b8c0c8',
          700: '#81909e',
          800: '#53606c',
          900: '#2a3036',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
