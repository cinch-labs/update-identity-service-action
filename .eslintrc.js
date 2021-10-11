/* eslint-disable no-undef */
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'no-console': 1, // Avoid leaving console logs behind
    'prefer-template': 1, // Prefer template strings
    '@typescript-eslint/no-unused-vars': 0,
  },
}
