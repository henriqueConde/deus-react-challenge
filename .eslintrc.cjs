module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/no-shadow': 0,
    'react/jsx-no-comment-textnodes': 0,
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-cycle': 0,
    'import/prefer-default-export': 0,
    'react/require-default-props': 0,
    '@typescript-eslint/no-unused-expressions': 0
  },
  "ignorePatterns": ["cypress.config.ts"],
};
