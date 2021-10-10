module.exports = {
   root: true,
   env: {
      browser: true,
      node: true,
      jest: true,
      es6: true,
   },
   extends: ['airbnb-base', 'prettier', 'plugin:import/typescript'],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
   },
   plugins: ['@typescript-eslint'],
   rules: {
      'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
      'arrow-body-style': 'off',

      'import/extensions': [
         'error',
         'ignorePackages',
         {
            ts: 'never',
         },
      ],
   },
};
