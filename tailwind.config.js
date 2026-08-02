/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#6C4DF6',
          dark: '#5A3CE0',
          mist: '#F1EDFE',
        },
        ink: '#16151F',
        muted: '#6B6980',
        line: '#EAE7F5',
        soft: '#F7F6FB',
        green: {
          DEFAULT: '#22C55E',
          mist: '#EAFBF0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(22,21,31,0.04), 0 10px 24px -16px rgba(22,21,31,0.14)',
        'card-hover': '0 2px 4px rgba(22,21,31,0.05), 0 18px 34px -16px rgba(108,77,246,0.22)',
        'btn-primary': '0 8px 18px -8px rgba(108,77,246,0.5)',
      },
      maxWidth: {
        wrap: '1080px',
      },
    },
  },
  plugins: [],
};
