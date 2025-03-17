import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
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
      fontSize: {
        '4xl': ['2.25rem', { lineHeight: '1.3' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '2xl': ['1.5rem', { lineHeight: '1.5' }],
        xl: ['1.25rem', { lineHeight: '1.5' }],
        lg: ['1.125rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.6' }],
      },
      colors: {
        // Semantic colors
        background: {
          DEFAULT: 'rgba(var(--background))',
          subtle: 'rgba(var(--background-subtle))',
        },
        foreground: {
          DEFAULT: 'rgba(var(--foreground))',
          subtle: 'rgba(var(--foreground-subtle))',
        },
        muted: 'rgba(var(--muted))',
        primary: {
          DEFAULT: 'rgba(var(--primary))',
          foreground: 'rgba(var(--primary-foreground))',
        },
        'accent-lime': {
          DEFAULT: 'rgba(var(--accent-lime))',
          foreground: 'rgba(var(--accent-lime-foreground))',
        },
        'accent-blue': 'rgba(var(--accent-blue))',
        'accent-violet': 'rgba(var(--accent-violet))',

        // Original color scale - potentially remove after refactoring
        black: {
          DEFAULT: 'rgba(var(--black))',
          100: 'rgba(var(--black-100))',
          200: 'rgba(var(--black-200))',
          300: 'rgba(var(--black-300))',
          400: 'rgba(var(--black-400))',
          500: 'rgba(var(--black-500))',
          600: 'rgba(var(--black-600))',
          700: 'rgba(var(--black-700))',
          800: 'rgba(var(--black-800))',
          900: 'rgba(var(--black-900))',
        },
        lime: {
          DEFAULT: 'rgba(var(--lime))',
          100: 'rgba(var(--lime-100))',
          200: 'rgba(var(--lime-200))',
          300: 'rgba(var(--lime-300))',
          400: 'rgba(var(--lime-400))',
          500: 'rgba(var(--lime-500))',
          600: 'rgba(var(--lime-600))',
          700: 'rgba(var(--lime-700))',
          800: 'rgba(var(--lime-800))',
          900: 'rgba(var(--lime-900))',
        },
        violet: {
          DEFAULT: 'rgba(var(--violet))',
          100: 'rgba(var(--violet-100))',
          200: 'rgba(var(--violet-200))',
          300: 'rgba(var(--violet-300))',
          400: 'rgba(var(--violet-400))',
          500: 'rgba(var(--violet-500))',
          600: 'rgba(var(--violet-600))',
          700: 'rgba(var(--violet-700))',
          800: 'rgba(var(--violet-800))',
          900: 'rgba(var(--violet-900))',
        },
        blue: {
          DEFAULT: 'rgba(var(--blue))',
          100: 'rgba(var(--blue-100))',
          200: 'rgba(var(--blue-200))',
          300: 'rgba(var(--blue-300))',
          400: 'rgba(var(--blue-400))',
          500: 'rgba(var(--blue-500))',
          600: 'rgba(var(--blue-600))',
          700: 'rgba(var(--blue-700))',
          800: 'rgba(var(--blue-800))',
          900: 'rgba(var(--blue-900))',
        },
        white: {
          DEFAULT: 'rgba(var(--white))',
          100: 'rgba(var(--white-100))',
          200: 'rgba(var(--white-200))',
          300: 'rgba(var(--white-300))',
          400: 'rgba(var(--white-400))',
          500: 'rgba(var(--white-500))',
          600: 'rgba(var(--white-600))',
          700: 'rgba(var(--white-700))',
          800: 'rgba(var(--white-800))',
          900: 'rgba(var(--white-900))',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
