module.exports = {
  content: ["./src/views/**/*.pug"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
      },
    },
    animation: {
      'toggle': 'toggle 1.5s infinite',
      'zoom': 'zoom 10s infinite',
    },
    keyframes: {
      toggle: {
        '0%, 15%, 75%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      },
      zoom: {
        '0%, 100%': { transform: 'scale(100%)' },
        '50%': { transform: 'scale(110%)' },
      }
    },
    screens: {
      sm: '414px',
      md: '768px',
      lg: '1320px',
      xl: '1480px',
    },
    extend: {
      animation: {
        slide: 'slide 2.5s ease-in-out infinite',
      },
      keyframes: {
        slide: {
          '0%, 20%': { transform: 'translateX(0) skewX(25deg)' },
          '80%, 100%': { transform: 'translateX(-550px) skewX(25deg)' },
        }
      },
      colors: {
        'yellow-400': '#F6A847',
        'beige-400': '#FFEEDA',
        'beige-500': '#F5F5DC',
        'brown-400': '#964B00',
        'graphite-400': '#3B3B48',
        'gray-000': '#E5E8F0',
        'gray-100': '#F5F5F6',
        'gray-200': '#121212',
        'gray-300': '#333333',
        'gray-400': '#EBEBEB',
        'gray-500': '#F2F2F2',
        'gray-600': '#D4D8E5',
        'gray-700': '#4A4A4A',
        'gray-800': '#939393',
        'gray-900': '#7D7D7D',
        'green-400': '#008000',
        'cyan-400': '#42AAFF',
        'blue-200': '#051B3E',
        'blue-400': '#0000FF',
        'dark-blue-400': '#1A3241',
        'silver-200': '#E5E5E5',
        'silver-300': '#F0F0F0',
        'silver-400': '#8A8E9D',
        'silver-500': '#707070',
        'silver-600': '#757575',
        'silver-700': '#808080', 
        'silver-800': '#B9B9B9',
        'silver-900': '#444444',
        'turquoise-400': '#30D5C8',
        'black-700': '#24292E',
        'black-800': '#252525',
        'black-900': '#121212',
        'white-900': '#F4F4F4'
      },
    },
    fontFamily: {
      'lato': ['Lato'],
      'playfair': ['Playfair Display'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}