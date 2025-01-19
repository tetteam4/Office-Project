/** @type {import('tailwindcss').Config} */
export default {
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
  },
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }), // Enable the plugin
  ],
};
