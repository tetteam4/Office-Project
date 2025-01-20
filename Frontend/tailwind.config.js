/** @type {import('tailwindcss').Config} */
export default {
   darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
    },
    screens: {
      sm: "640px", // Mobile
      md: "768px", // Tablet
      lg: "1024px", // Laptop
      xl: "1280px", // Desktop
      "2xl": "1536px", // Large screens
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "4rem",
        "2xl": "2rem",
      },
    },
  },
  plugins: [],
};
