module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      spacing: {
        '13': '4rem',
        '14': '5rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
