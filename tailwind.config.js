/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        saffron: {
          DEFAULT: '#FF7A00',
          light: '#F4A261',
          soft: '#FFE5B4',
          pale: '#FFF3E8',
          cream: '#FFF8F2',
          dark: '#CC5F00',
        },
        dark: {
          DEFAULT: '#1C1C1C',
          muted: '#6B6B6B',
          subtle: '#9A9A9A',
        },
      },
      boxShadow: {
        'saffron': '0 8px 32px rgba(255,122,0,0.15)',
        'saffron-hover': '0 16px 48px rgba(255,122,0,0.28)',
        'saffron-glow': '0 0 30px rgba(255,122,0,0.35)',
        'card': '0 4px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 8s ease-in-out infinite 2s',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(4deg)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
};
