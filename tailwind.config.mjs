/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "rgb(var(--ink-50) / <alpha-value>)",
          100: "rgb(var(--ink-100) / <alpha-value>)",
          200: "rgb(var(--ink-200) / <alpha-value>)",
          300: "rgb(var(--ink-300) / <alpha-value>)",
          400: "rgb(var(--ink-400) / <alpha-value>)",
          500: "rgb(var(--ink-500) / <alpha-value>)",
          600: "rgb(var(--ink-600) / <alpha-value>)",
          700: "rgb(var(--ink-700) / <alpha-value>)",
          800: "rgb(var(--ink-800) / <alpha-value>)",
          900: "rgb(var(--ink-900) / <alpha-value>)",
          950: "rgb(var(--ink-950) / <alpha-value>)"
        },
        jade: {
          100: "rgb(var(--jade-100) / <alpha-value>)",
          300: "rgb(var(--jade-300) / <alpha-value>)",
          500: "rgb(var(--jade-500) / <alpha-value>)",
          700: "rgb(var(--jade-700) / <alpha-value>)"
        },
        gold: {
          100: "rgb(var(--gold-100) / <alpha-value>)",
          300: "rgb(var(--gold-300) / <alpha-value>)",
          500: "rgb(var(--gold-500) / <alpha-value>)"
        },
        signal: {
          500: "rgb(var(--signal-500) / <alpha-value>)"
        }
      },
      boxShadow: {
        card: "0 24px 60px -34px rgba(38, 22, 17, 0.18)",
        glow: "0 0 0 1px rgba(205, 152, 112, 0.14), 0 28px 80px -40px rgba(77, 24, 22, 0.42)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(205, 152, 112, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(205, 152, 112, 0.08) 1px, transparent 1px)"
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif']
      },
      maxWidth: {
        "8xl": "90rem"
      },
      animation: {
        "float-slow": "float 9s ease-in-out infinite",
        "fade-up": "fadeUp 0.6s ease forwards"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        }
      }
    }
  },
  plugins: []
};
