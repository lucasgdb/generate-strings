module.exports = {
   preset: 'ts-jest',
   globals: {
      'ts-jest': {
         babelConfig: true,
      },
   },
   testEnvironment: 'node',
   transformIgnorePatterns: ['/node_modules/(?!@babel/runtime)', 'dist'],
   testPathIgnorePatterns: ['node_modules', 'dist'],
};
