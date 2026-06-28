// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        ocean: {
          950: "#020b18",
          900: "#0a1628",
          800: "#0f2744",
          700: "#1a3a5c",
          600: "#1e4d7b",
          500: "#2563a8",
          400: "#3b82d0",
          300: "#60a5ef",
          200: "#93c5fd",
          100: "#dbeafe",
        },
      },
      animation: {
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(6, 182, 212, 0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(6, 182, 212, 0.3)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-ocean":
          "linear-gradient(180deg, #020b18 0%, #0a1628 40%, #0f2744 70%, #020b18 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
