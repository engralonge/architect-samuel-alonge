/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        accl: {
          ink: "#111111",
          muted: "#6f6f68",
          line: "#e8e5df",
          paper: "#f7f5f1",
          warm: "#c6a978",
          slate: "#222522"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(17, 17, 17, 0.12)"
      }
    }
  },
  plugins: []
};
