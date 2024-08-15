/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Plus Jakarta Sans']
      }
    },
  },
  safelist: [
    'text-green-400',
    'hover:text-green-600',
    'text-red-400',
    'hover:text-red-600',
    'text-cyan-400',
    'hover:text-cyan-600',
    'text-amber-400',
    'hover:text-amber-600',
    'text-fuchsia-400',
    'hover:text-fuchsia-600',
  ],
  plugins: [],
}

