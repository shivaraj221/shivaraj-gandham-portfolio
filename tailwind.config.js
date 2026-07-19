/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0A0D14",
        surface: "#10141F",
        surface2: "#161B29",
        line: "#232A3B",
        ink: "#E9EDF5",
        muted: "#8A93A6",
        signal: "#6EE7F9",
        reason: "#A78BFA",
        amber: "#F5B942",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #0A0D14 85%), linear-gradient(rgba(110,231,249,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(110,231,249,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "100% 100%, 40px 40px, 40px 40px",
      },
      animation: {
        "pulse-slow": "pulse 5s cubic-bezier(0.4,0,0.6,1) infinite",
        marquee: "marquee 32s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
