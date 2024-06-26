/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend:{
      colors: {
        greenButton: '#046307',
        greenButton2: '#556B2F'
      },
      textShadow: {
        sm: '1px 1px 2px var(--tw-shadow-color)',
        DEFAULT: '2px 2px 4px var(--tw-shadow-color)',
        lg: '4px 4px 8px var(--tw-shadow-color)',
        xl: '4px 4px 16px var(--tw-shadow-color)',
      }
    }
    
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {};
      Object.keys(theme('textShadow')).forEach(key => {
        const value = theme('textShadow')[key];
        newUtilities[`.text-shadow-${key}`] = {
          textShadow: value
        };
      });
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ]
}
