module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:prettier/recommended'],
  plugins: ['import'],
  rules: {
    indent: 'off',
    'react-native/no-inline-styles': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
      },
    ],
  },
};
