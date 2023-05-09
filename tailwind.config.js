/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Font Family
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif']
      },

      // Font Weight
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700'
      },

      // Border Radius
      borderRadius: {
        button: '7px',
        card: '10px'
      },

      // Custom Colors
      colors: {
        primary: '#15DBFF',
        secondary: '#A514FC',
        background: '#0A0A0A',
        accent: '#171717',
        accent2: '#272727',
        textGray: '#9E9E9E',
        divide: '#474747',
        placeholder: "#C3C3C3"
      },

      // Primary Gradient
      backgroundImage: {
        gradient: 'linear-gradient(96.99deg, #15DBFF 0%, #A514FC 104.31%)'
      },

      // SCREENS
      screens: {
        'sm': '480px',
        'md': '760px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1900px'
      },
    },
  },
  plugins: [],
}

