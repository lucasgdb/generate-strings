module.exports = {
   preset: 'ts-jest',
   globals: {
      'ts-jest': {
         babelConfig: true,
      },
   },
   transform: {
      '^.+\\.ts?$': 'babel-jest',
   },
   testEnvironment: 'node',
   transformIgnorePatterns: ['/node_modules/(?!@babel/runtime)', 'dist'],
   testPathIgnorePatterns: ['node_modules', 'dist'],
};
