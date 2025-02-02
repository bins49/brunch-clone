const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    // 최종 번들링된 자바스크립트
    filename: "main.js",
    // dist를 배포용 폴더로 사용
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
        exclude: ["/node_modules/"],
      },
    ],
  },
};
