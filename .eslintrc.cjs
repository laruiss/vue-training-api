/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  // parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'standard',
  ],
  plugins: [
    '@typescript-eslint'
  ],
  env: {
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'no-irregular-whitespace': 1,
    '@typescript-eslint/indent': [
      'error',
      2,
    ],
  },
}
