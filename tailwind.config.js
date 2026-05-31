/** @type {import('tailwindcss').Config} */
module.exports = {
  // Configure files to scan for Tailwind classes
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Include for future-proofing with Next.js App Router
    './src/**/*.{js,ts,jsx,tsx,mdx}', // General purpose source directory
  ],
  // Define custom theme configurations
  theme: {
    extend: {
      // Custom color palette for the portfolio
      colors: {
        primary: '#6366F1', // A vibrant indigo for accents and interactive elements
        secondary: '#8B5CF6', // A complementary purple
        background: '#1A202C', // Dark background for a modern feel
        text: '#E2E8F0', // Light text color for contrast
        'text-secondary': '#A0AEC0', // Slightly darker text for secondary information
        card: '#2D3748', // Background for cards/sections
        border: '#4A5568', // Border color
        accent: '#38B2AC', // Another accent color, perhaps for hover states or specific highlights
      },
      // Custom font families
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Primary sans-serif font
        mono: ['Fira Code', 'monospace'], // Monospace font for code snippets
      },
      // Custom spacing (if needed, otherwise Tailwind's default is usually sufficient)
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      // Custom border radius
      borderRadius: {
        '4xl': '2rem',
      },
      // Custom animations for smooth UI interactions
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'bounce-slow': 'bounce 2s infinite',
      },
      // Custom keyframes for animations
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      // Custom screen breakpoints (if needed, otherwise Tailwind's default is usually sufficient)
      screens: {
        '3xl': '1600px',
      },
    },
  },
  // Add Tailwind CSS plugins
  plugins: [
    require('@tailwindcss/typography'), // For styling markdown content (e.g., project descriptions)
    // require('@tailwindcss/forms'), // If forms are complex and need specific styling
    // require('@tailwindcss/aspect-ratio'), // If embedding videos or responsive images
  ],
}