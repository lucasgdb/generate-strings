const path = require("node:path");

module.exports = {
  mode: "production",
  entry: {
    generateStrings: {
      import: "./src/index.ts",
      filename: "generateStrings.min.js",
    },

    generateRandomPassword: {
      import: "./src/utils/generateRandomPassword.ts",
      filename: "generateRandomPassword.min.js",
    },
    generateRandomString: {
      import: "./src/utils/generateRandomString.ts",
      filename: "generateRandomString.min.js",
    },
    generateRandomStringWithMask: {
      import: "./src/utils/generateRandomStringWithMask.ts",
      filename: "generateRandomStringWithMask.min.js",
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    globalObject: "this",
    clean: true,
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        exclude: /(node_modules)/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: "swc-loader",
        },
      },
    ],
  },
};
