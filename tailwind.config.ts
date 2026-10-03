import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './data/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        panel: '#f7f5f1',
        ink: '#121212',
        mist: '#d9d4cb',
        accent: '#1d4ed8',
      },
      boxShadow: {
        soft: '0 20px 40px -24px rgba(19, 23, 32, 0.25)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
