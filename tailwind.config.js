module.exports = {
  content: [
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', 
  ],
  theme: {
    extend: {
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }

        'xl': {'max': '1200px'},
        // => @media (max-width: 1200px) { ... }

        'lg': {'max': '992px'},
        // => @media (max-width: 992px) { ... }

        'md': {'max': '768px'},
        // => @media (max-width: 768px) { ... }

        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }

        'xs': {'max': '480px'},
        // => @media (max-width: 480px) { ... }

        's': {'max': '320px'},
        // => @media (max-width: 320px) { ... }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
