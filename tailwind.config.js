/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: "#1a202c", // Dark slate background
        darkCard: "#2d3748", // Slightly lighter background for cards
        textPrimary: "#e2e8f0", // Light gray text
        textSecondary: "#a0aec0", // Muted gray text
        accent: "#4fd1c5", // Cyan accent
        accentHover: "#38b2ac", // Darker cyan for hover
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        section: "4rem", // Generous spacing between sections
        cardPadding: "2rem", // Padding for cards
      },
      borderRadius: {
        card: "10px",
      },
      boxShadow: {
        card: "0 4px 10px rgba(0, 0, 0, 0.25)", // Subtle shadow for cards
      },
    },
  },
  plugins: [],
};
