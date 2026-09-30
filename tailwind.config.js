/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff6b35',
          hover: '#e55a2b',
          glow: 'rgba(255, 107, 53, 0.4)',
        },
        secondary: '#f7c59f',
        dark: {
          DEFAULT: '#0c0c0c',
          card: '#16161a',
          lighter: '#1f1f24',
        },
        surface: '#f5f5f5',
        borderMuted: '#e5e5e5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'float': 'float 4s ease-in-out infinite',
        'shine': 'shine 1.5s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(255, 107, 53, 0.4)' },
          '50%': { boxShadow: '0 0 25px rgba(255, 107, 53, 0.8)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
