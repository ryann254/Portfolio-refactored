const path = require("path");
const includePath = path.resolve(__dirname, "..");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const AppManifestWebpackPlugin = require('app-manifest-webpack-plugin')

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "./public"),
    historyApiFallback: true,
    port: 4002,
    compress: true,
    writeToDisk: true
  },
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
  optimization: {
    concatenateModules: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        include: includePath,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|webp|png|svg)$/,
        include: includePath,
        use: "url-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: `./public/images/favicon.ico`,
      inject: false,
    }),
    new AppManifestWebpackPlugin({
      logo: './public/images/Logo/logo6_192x192.png',
      persistentCache: true,
      config: {
        appName: "Ryan's Modern Portfolio",
        appDescription: "Modern Portfolio",
        developerName: 'Ryan Njoroge',
        background: "#FFE9D2",
        theme_color: "#FFE1C4",
        display: "standalone",
        orientation: "portrait-primary",
        start_url: "/index.html",
        icons: {
          appleStartup: false,
          coast: false,
          firefox: false,
          windows: false,
          yandex: false,
        }
      }
    }),
  ],
};
