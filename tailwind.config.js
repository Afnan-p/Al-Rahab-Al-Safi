/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#B28444',
          'gold-hover': '#9C6F34',
          'gold-light': '#F6EFE5',
          forest: '#112A21',
          'forest-deep': '#0C1C16',
          'forest-light': '#1C4032',
          cream: '#FAF8F5',
          'cream-alt': '#F5F0E6',
          sand: '#ECE4D6',
          border: '#E7DFD3',
          dark: '#1C1917',
          muted: '#78716C',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        arabic: ['"Cairo"', '"Amiri"', 'system-ui', 'sans-serif'],
        'arabic-serif': ['"Amiri"', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(17, 42, 33, 0.06), 0 2px 6px -1px rgba(17, 42, 33, 0.04)',
        'card': '0 10px 30px -4px rgba(17, 42, 33, 0.08), 0 4px 10px -2px rgba(17, 42, 33, 0.04)',
        'elevated': '0 20px 40px -6px rgba(17, 42, 33, 0.12), 0 8px 16px -4px rgba(17, 42, 33, 0.06)',
      }
    },
  },
  plugins: [],
}
