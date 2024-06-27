const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
/* config object */
module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    /* default file name is main.js */
    filename: "[name].[contenthash].js",
    /* only keep one current file  */
    clean: true,
    /* ext stands for extension */
    assetModuleFilename: "[name][ext]",
  },

  /* source maps are good for debugging, it will help us debug  */
  devtool: "source-map",
  /* that folder is what we are serving  */
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    /* default port is 8080 */
    port: 3000,
    /* when npm run dev command dist folder will open the browser automatically */
    open: true,
    /* hot reloading */
    hot: true,
    /* gzip compression*/
    compress: true,
    historyApiFallback: true,
  },

  /* loaders */
  module: {
    rules: [
      {
        /* regular expression => any files that end with this extension scss */
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        /* i is case insensitive */
        test: /\.(png|jpeg|svg|jpg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  /* plugins are powerful than loaders */
  plugins: [
    /* Takes object with some options */
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "src/template.html",
    }),
    /* Gives like a visual representation of the application */
    new BundleAnalyzerPlugin(),
  ],
};
