import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#EEF1FB',
          100: '#D6DDF4',
          200: '#A8B5E6',
          300: '#7989D3',
          400: '#4D63BD',
          500: '#2A44A5',
          600: '#0B2E83',
          700: '#082567',
          800: '#061D52',
          900: '#04153B',
          950: '#020A1F',
        },
        gold: {
          50: '#FEF8EB',
          100: '#FDEEC8',
          200: '#FADC8C',
          300: '#F8C758',
          400: '#F5B335',
          500: '#E89A1A',
          600: '#C57B10',
          700: '#9E5E10',
          800: '#824B14',
          900: '#6E3F16',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'royal-gradient':
          'linear-gradient(135deg, #04153B 0%, #061D52 35%, #0B2E83 70%, #2A44A5 100%)',
        'gold-gradient':
          'linear-gradient(135deg, #F5B335 0%, #E89A1A 100%)',
        'hero-radial':
          'radial-gradient(1200px 600px at 20% 10%, rgba(245,179,53,0.15), transparent 60%), radial-gradient(1000px 500px at 80% 30%, rgba(42,68,165,0.35), transparent 60%), linear-gradient(135deg, #020A1F 0%, #061D52 45%, #0B2E83 100%)',
        'grid-pattern':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      boxShadow: {
        'glow-gold': '0 10px 40px -10px rgba(245,179,53,0.45)',
        'glow-royal': '0 10px 40px -10px rgba(11,46,131,0.55)',
        'card-premium':
          '0 1px 2px rgba(2,10,31,0.06), 0 12px 32px -8px rgba(2,10,31,0.18)',
        'card-premium-hover':
          '0 1px 2px rgba(2,10,31,0.06), 0 24px 60px -16px rgba(11,46,131,0.35)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient-pan': 'gradient-pan 14s ease infinite',
        'marquee': 'marquee 40s linear infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-pan': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundSize: {
        'grid-sm': '40px 40px',
        'grid-lg': '80px 80px',
      },
    },
  },
  plugins: [],
};

export default config;
