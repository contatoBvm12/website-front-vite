/** @type {import('tailwindcss').Config} */
// Paleta e tipos da marca recriada da BVM12 (deliverables/bvm12-marca/MARCA.md). Verde nunca é texto sobre névoa.
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        marinho: '#142B4D',
        verde: '#4ADE80',
        esmeralda: '#34D399',
        nevoa: '#F3F4F6',
        ardosia: '#334155',
        queda: '#F87171',
      },
      fontFamily: {
        sans: ['Archivo', 'Arial', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
