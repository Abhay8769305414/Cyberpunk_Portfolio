import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        "cyber-bg": "#050505",
        "cyber-card": "#0A0A0A",
        "cyber-surface": "#121212",
        "cyber-border": "#1E1E1E",
        "cyber-border-hover": "#FF1E27",
        "cyber-red": "#FF1E27",
        "cyber-red-dark": "#3B070A",
        "cyber-red-glow": "rgba(255, 30, 39, 0.25)",
        "cyber-emerald": "#10B981",
        "cyber-emerald-glow": "rgba(16, 185, 129, 0.25)",
        "cyber-text": "#F5F5F5",
        "cyber-muted": "#8A8A8A",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "Syne", "sans-serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(to right, #1E1E1E 1px, transparent 1px), linear-gradient(to bottom, #1E1E1E 1px, transparent 1px)",
        "cyber-glow": "radial-gradient(circle at 50% 0%, rgba(255, 30, 39, 0.15) 0%, transparent 60%)",
      },
      boxShadow: {
        "neon-red": "0 0 15px rgba(255, 30, 39, 0.35)",
        "neon-red-lg": "0 0 30px rgba(255, 30, 39, 0.5)",
        "neon-emerald": "0 0 15px rgba(16, 185, 129, 0.4)",
        "card-inner": "inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scanline": "scanline 8s linear infinite",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
