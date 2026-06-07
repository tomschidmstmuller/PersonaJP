/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        washi: { base: "#FDF9F0", warm: "#FCF6E8", cool: "#F5F3F0", shadow: "#E8E2D5" },
        sumi: { light: "#3A3A3A", mid: "#1F1F1F", deep: "#0F0F0D" },
        bamboo: { DEFAULT: "#8B8581", ash: "#8B8581" },
        rust: "#C4A484",
        vermilion: { DEFAULT: "#C23B22", hover: "#A32E18" },
        indigo: { DEFAULT: "#2C3E50", deep: "#1A2A3A" },
        matcha: { DEFAULT: "#6B7B3A", deep: "#4A5D2A" },
        plum: { DEFAULT: "#9B5E6B", light: "#B87B8A" },
        goldleaf: { DEFAULT: "#C9A86B", light: "#D4BA80" },
        kurenai: { DEFAULT: "#B23A3A" },
        night: { bg: "#1A1815", surface: "#211E1A", text: "#D4CFC7", ember: "#D45A3B", border: "#3D3632" },
      },
      fontFamily: {
        heading: ['"Noto Serif JP"', "serif"],
        body: ['"Noto Sans JP"', '"Inter"', "system-ui", "sans-serif"],
        vertical: ['"Noto Serif JP"', "serif"],
      },
      spacing: {
        "ma-xs": "4px",
        "ma-sm": "8px",
        "ma-md": "24px",
        "ma-lg": "48px",
        "ma-xl": "80px",
        "ma-xxl": "120px",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "underline-center": "underlineCenter 0.3s ease-out forwards",
        "yugen-fade": "yugenFade 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "bamboo-rise": "bambooRise 0.5s ease forwards",
        "ink-bleed": "inkBleed 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        underlineCenter: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        yugenFade: {
          "0%": { opacity: "0", transform: "translateY(16px) scale(0.98)", filter: "blur(4px)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)", filter: "blur(0)" },
        },
        bambooRise: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        inkBleed: {
          "0%": { backgroundSize: "0% 100%" },
          "100%": { backgroundSize: "100% 100%" },
        },
      },
      backgroundImage: {
        "kumiko": "repeating-linear-gradient(90deg, transparent, transparent 24px, rgba(139, 133, 129, 0.08) 24px, rgba(139, 133, 129, 0.08) 28px)",
        "washi-texture": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'%3E%3Cfilter id='washi'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23washi)' opacity='0.06'/%3E%3C/svg%3E\")",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
