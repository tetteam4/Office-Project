/** @type {import('tailwindcss').Config} */
export default {
   darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'grid-cols-5',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      scrollbar: {
        width: "5px",
        thumb: {
          backgroundColor: "#4f46e5", // Indigo-600
          borderRadius: "5px",
        },
        track: {
          backgroundColor: "#f3f4f6", // Gray-100
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif','Poppins'], // Using Roboto as the default sans-serif font
      },
    },
    screens: {
      sm: "640px", // Mobile
      md: "768px", // Tablet
      lg: "1024px", // Laptop
      xl: "1280px", // Desktop
      "2xl": "1536px", // Large screens
    },
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: "1rem",
    //     sm: "2rem",
    //     lg: "4rem",
    //     xl: "4rem",
    //     "2xl": "2rem",
    //   },
    // },
  },
  plugins: [],
};
