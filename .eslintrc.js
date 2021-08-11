module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'no-unused-vars': 1,
    'import/no-dynamic-require': 1,
    'no-async-promise-executor': 1,
    'global-require': 1,
    'comma-dangle': ['error', 'never'],
    'max-len': [
      'warn',
      { code: 80, ignoreComments: true, ignoreRegExpLiterals: true }
    ],
    'no-bitwise': ['error', { allow: ['~'] }],
    'prefer-destructuring': ['error', { object: true, array: false }]
  }
};
