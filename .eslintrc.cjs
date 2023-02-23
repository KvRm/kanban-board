module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/eslint-plugin',
    'prettier',
  ],
  rules: {
    'vue/require-default-prop': 'off',
    'vue/valid-template-root': 'off',
    'no-unused-vars': 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', '@typescript-eslint'],
  root: true,
}
