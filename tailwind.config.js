/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        'border': 'var(--border)',
        'input': 'var(--input)',
        'ring': 'var(--ring)',
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
        'primary': 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        'secondary': 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',
        'accent': 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        'destructive': 'var(--destructive)',
        'destructive-foreground': 'var(--destructive-foreground)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}