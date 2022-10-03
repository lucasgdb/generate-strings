module.exports = {
   preset: 'ts-jest',
   transform: {
      '^.+.[t]sx?$': [
         'ts-jest',
         {
            babelConfig: true,
         },
      ],
   },
   testEnvironment: 'node',
   transformIgnorePatterns: ['/node_modules/(?!@babel/runtime)', 'dist'],
   testPathIgnorePatterns: ['node_modules', 'dist'],
   setupFiles: ['core-js'],
};
