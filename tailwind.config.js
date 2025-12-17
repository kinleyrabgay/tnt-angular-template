module.exports = {
  content: ["./apps/**/*.{html,ts,scss}", "./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'accent': 'var(--color-accent)',
        'success': 'var(--color-success)',
        'warning': 'var(--color-warning)',
        'error': 'var(--color-error)',
      },
    },
  },
  plugins: [],
};