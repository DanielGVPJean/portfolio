/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0D0C0B',
          700: '#A62205',
          600: '#F23207',
          500: '#F2600C',
          400: '#CCF241',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'html-transform': 'htmlTransform 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        htmlTransform: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)',
            filter: 'blur(4px)',
          },
          '50%': {
            opacity: '0.5',
            transform: 'translateY(10px)',
            filter: 'blur(2px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
            filter: 'blur(0px)',
          }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}