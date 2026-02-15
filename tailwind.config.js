/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maxim: {
          yellow: '#FFD400',
          brown: '#3D2817',
          beige: '#F5E6D3',
          cream: '#FBF6ED',
          dark: '#2D1810',
        }
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'steam': 'steam 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        steam: {
          '0%': { opacity: '0', transform: 'translateY(0)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(20px)' },
        },
      },
    },
  },
  plugins: [],
}
