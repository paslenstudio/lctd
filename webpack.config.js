const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development', // или 'production'
  entry: {
    background: path.resolve(__dirname, ".", "src", "background.ts"),
    content: path.resolve(__dirname, ".", "src", "content.ts"),
  },
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name].js",
 },
  devtool: 'source-map', // Генерация карты исходных кодов для отладки
  resolve: {
    extensions: ['.ts', '.tsx', '.js'] // Расширения файлов, которые Webpack будет обрабатывать
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Укажите регулярное выражение для файлов .ts и .tsx
        use: 'ts-loader',
        exclude: /node_modules/ // Исключите папку node_modules
      }
    ]
  },
  plugins: [
    new CopyPlugin({
       patterns: [{from: ".", to: ".", context: "public"}]
    }),
 ]
};
