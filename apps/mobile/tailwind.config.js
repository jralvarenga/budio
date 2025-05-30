/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "background": {
          DEFAULT: "var(--background)",
        },
        "primary": {
          DEFAULT: "var(--primary)",
        },
        "foreground": {
          DEFAULT: "var(--foreground)",
        },
        "card": {
          DEFAULT: "var(--card)",
        },
        "card-foreground": "var(--card-foreground)",
        "popover": "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        "primary-foreground": "var(--primary-foreground)",
        "secondary": "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        "muted": "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        "accent": "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        "destructive": "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
        "border": "var(--border)",
      },
    },
  },
  plugins: [],
}