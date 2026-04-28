/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f8f4ef",
          100: "#efe6db",
          200: "#dbcab6",
          300: "#c5ac90",
          400: "#a98766",
          500: "#88694f",
          600: "#694f3e",
          700: "#4d3a31",
          800: "#342823",
          900: "#211a18",
          950: "#16110f"
        },
        jade: {
          100: "#f4e6db",
          300: "#dfb897",
          500: "#cd9870",
          700: "#a77852"
        },
        gold: {
          100: "#fbf1e7",
          300: "#e8c9a8",
          500: "#cd9870"
        },
        signal: {
          500: "#9c0705"
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
