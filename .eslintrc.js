const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'eslint:recommended',
    'standard',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  ignorePatterns: [
    'dist',
    'node_modules',
    'examples',
    'scripts',
    '.eslintrc.js',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: path.resolve(__dirname),
      },
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },
  ],
};
