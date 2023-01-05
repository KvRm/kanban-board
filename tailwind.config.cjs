/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    colors: {},
    textColor: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      'secondary-soft': 'var(--color-text-secondary-soft)',
      blue: 'var(--color-text-blue)',
    },
    backgroundColor: {
      primary: 'var(--color-bg-primary)',
      'primary-soft': 'var(--color-bg-primary-soft)',
      secondary: 'var(--color-bg-secondary)',
      'secondary-soft': 'var(--color-bg-secondary-soft)',
      default: 'var(--color-bg-default)',
    },
    fontFamily: {
      primary: 'var(--font-primary)',
    },
    borderRadius: {
      none: '0',
      btn: 'var(--rounded-btn)',
      card: 'var(--rounded-card)',
    },
    extend: {
      flex: {
        single: '0 0 100%',
        double: '0 0 45%',
        triple: '0 0 31%',
      },
    },
  },
  plugins: [],
}
