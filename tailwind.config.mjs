/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        nvidia: {
          green: '#76b900',
          darkgreen: '#5a8d00',
        },
        ink: {
          DEFAULT: '#000000',
        },
        canvas: {
          DEFAULT: '#ffffff',
        },
        surface: {
          soft: '#f7f7f7',
          dark: '#000000',
          elevated: '#1a1a1a',
        },
        hairline: '#cccccc',
        body: '#1a1a1a',
        mute: '#757575',
        ondark: '#ffffff',
        ondarkmute: 'rgba(255,255,255,0.7)',
        linkblue: '#0046a4',
        error: '#e52020',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '2px',
        sm: '2px',
        md: '2px',
        lg: '2px',
        xl: '2px',
        '2xl': '2px',
        '3xl': '2px',
      },
    },
  },
  plugins: [],
};
