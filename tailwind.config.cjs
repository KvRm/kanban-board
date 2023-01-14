var safelist = require('./tailwind.safelist.cjs')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  safelist: safelist.widthSafeList(),
  theme: {
    colors: {},
    extend: {
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        'secondary-soft': 'var(--color-text-secondary-soft)',
        blue: 'var(--color-text-blue)',
        white: 'var(--color-text-white)',
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        'primary-soft': 'var(--color-bg-primary-soft)',
        secondary: 'var(--color-bg-secondary)',
        'secondary-soft': 'var(--color-bg-secondary-soft)',
        'dark-grey': 'var(--color-bg-dark-grey)',
      },
      fontFamily: {
        primary: 'var(--font-primary)',
      },
      flex: {
        single: '0 0 100%',
        double: '0 0 45%',
        triple: '0 0 31%',
      },
      borderRadius: {
        none: '0',
        btn: 'var(--rounded-btn)',
        card: 'var(--rounded-card)',
      },
      borderColor: {
        'color-soft': 'var(--border-color-soft)',
        'color-primary': 'var(--border-color-primary)',
      },
      height: {
        view: 'calc(100vh - 64px)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
