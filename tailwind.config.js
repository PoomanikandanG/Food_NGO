/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { forest: '#166534', ink: '#1F2937', mint: '#DCFCE7', paper: '#F8FAF9' },
      fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Manrope', 'sans-serif'] },
      boxShadow: { soft: '0 20px 60px rgba(22, 101, 52, .12)' }
    }
  },
  plugins: []
}
