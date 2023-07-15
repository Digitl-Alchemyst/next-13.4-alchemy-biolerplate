/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/util/**/*.{js,ts,jsx,tsx,mdx}',
    './src/store/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#121063',
        'copper': '#b87333',
        'bronze': '#565584',
        'silver': '#ecebff',
        'gold': '#f7f7ff',
        'platinum': '#ffffff',
        'onyx': '#000000',
        'obsidian': '#464646',
        'diamond': '#b9f2ff',
        'pearl': '#f0f0ff',
        'amethyst': '#9966cc',
        'emerald': '#50c878',
        'ruby': '#e0115f',
        'citrine': '#e4d00a',      
        'sapphire': '#0f52ba',
        'topaz': '#ffc87c',
        'coffee': '#6f4e37',
        'cedar': '#4a3728',
        'caramel': '#af6e4d',
        'ginger': '#b06500',
        'hazel': '#8e7618',
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
  },
},
  plugins: [
    plugin(({ theme, addUtilities }) => {
      const neonUtilities ={};
      const colors = theme('colors');
      for (const color in colors) {
        if (typeof colors[color] === 'object'){
          const color1 = colors[color][300];
          const color2 = colors[color][600];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px 0 ${color1}, 0 0 20px 0 ${color2}`,
          };
        }
      }
      addUtilities(neonUtilities);
    })
  ],
}
