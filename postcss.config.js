module.exports = {
  plugins: {
    // Tailwind CSS plugin for PostCSS.
    // It processes Tailwind directives (@tailwind base, @tailwind components, @tailwind utilities)
    // and generates the corresponding CSS based on your tailwind.config.js.
    tailwindcss: {},

    // Autoprefixer plugin for PostCSS.
    // It parses CSS and adds vendor prefixes to CSS rules using values from Can I Use.
    // This ensures better cross-browser compatibility for your styles.
    autoprefixer: {},
  },
};