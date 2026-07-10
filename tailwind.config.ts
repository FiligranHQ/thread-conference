import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        cyan: {
          DEFAULT: "hsl(var(--cyan))",
          glow: "hsl(var(--cyan-glow))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ["Sora", "Inter", "Segoe UI", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        glow: "0 0 30px hsl(187 100% 42% / 0.15)",
        card: "0 4px 20px -4px hsl(220 30% 5% / 0.5)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-slow": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px hsl(187 100% 42% / 0.2)" },
          "50%": { boxShadow: "0 0 30px hsl(187 100% 42% / 0.4)" },
        },
        "letter-in": {
          "0%": { opacity: "0", transform: "translateY(40px) rotate(2deg)" },
          "100%": { opacity: "1", transform: "translateY(0) rotate(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "yarn-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-dot": {
          "0%": { boxShadow: "0 0 0 0 rgba(22, 235, 249, 0.55)" },
          "70%": { boxShadow: "0 0 0 12px rgba(22, 235, 249, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(22, 235, 249, 0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-slow": "fade-in-slow 0.8s ease-out",
        glow: "glow 3s ease-in-out infinite",
        "letter-in": "letter-in 0.7s cubic-bezier(0.2, 0.7, 0.3, 1) forwards",
        marquee: "marquee 30s linear infinite",
        "yarn-spin": "yarn-spin 60s linear infinite",
        "pulse-dot": "pulse-dot 2.2s infinite",
        "slide-up": "slide-up 0.3s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
