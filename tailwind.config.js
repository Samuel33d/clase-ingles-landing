/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50:  '#e8f4f0',
          100: '#c5e3d9',
          500: '#2d8a6e',
          700: '#1e6b54',
          900: '#1a5c4a',
        },
        cream: {
          DEFAULT: '#FAF7F2',
          dark: '#EDE8DF',
        },
        gold: {
          DEFAULT: '#C49A3C',
          dark: '#A87E28',
        },
      },
      fontFamily: {
        display: ['var(--font-lora)', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
