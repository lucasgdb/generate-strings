module.exports = {
   presets: ['@babel/preset-env', '@babel/preset-typescript'],
   plugins: [
      '@babel/plugin-proposal-export-default-from',
      '@babel/plugin-proposal-export-namespace-from',
   ],
   ignore: [/node_modules/, /dist/],
};
