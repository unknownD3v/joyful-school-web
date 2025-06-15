
import type { Config } from "tailwindcss";
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        cream: "#fff7e6",
        skyblue: "#cbeffd",
        blush: "#ffeceb",
        pastel: {
          yellow: "#fff7e6",
          blue: "#cbeffd",
          pink: "#ffeceb",
          green: "#e8ffe6",
        },
        accent: "#ffd964",
        primary: "#3286e6",
        secondary: "#faf3dd"
      },
      backgroundImage: {
        'clouds': "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
      },
      boxShadow: {
        'soft': '0 2px 16px 0 rgba(195, 183, 154, 0.10)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
