/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0E2A3B',
          50: '#E8EEF1',
          100: '#C9D8E0',
          200: '#A3BDCB',
          300: '#7DA2B6',
          400: '#5E8AA5',
          500: '#3F7295',
          600: '#2F5A7E',
          700: '#1F4464',
          800: '#0E2A3B',
          900: '#071620',
        },
        accent: {
          DEFAULT: '#1FB6B2',
          hover: '#159A97',
          50: '#E6F7F7',
          100: '#C2EEEC',
          200: '#9BE4E1',
          300: '#73DAD6',
          400: '#4AC5C1',
          500: '#1FB6B2',
          600: '#159A97',
          700: '#107C79',
          800: '#0B5E5B',
          900: '#06403E',
        },
        text: {
          DEFAULT: '#24323C',
          light: '#8A9BA8',
        },
        ui: {
          light: '#E6ECEF',
          muted: '#8A9BA8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '48': '48px',
        '64': '64px',
        '80': '80px',
        '96': '96px',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        subtle: '0 2px 8px rgba(14, 42, 59, 0.05)',
        card: '0 4px 16px rgba(14, 42, 59, 0.08)',
        hover: '0 8px 24px rgba(14, 42, 59, 0.12)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
