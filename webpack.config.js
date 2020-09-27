const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const DEV_MODE = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 8080;

module.exports = {
  entry: ["./src/index.tsx"],
  mode: DEV_MODE ? "development" : "production",
  devtool: DEV_MODE ? "source-map" : "",
  module: {
    rules: [
      {
        test: /\.tsx?$/,

        exclude: /^\/(?!node_modules).*\/.*\/__tests__\/.*\.tsx/,
        use: [
          {
            loader: "awesome-typescript-loader",
            options: {
              configFileName: "tsconfig.json",
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff)(\?v=[0-9].[0-9].[0-9])?$/,
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
  },
  optimization: {
    minimize: !DEV_MODE,
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  devServer: {
    contentBase: "./dist",
    compress: true,
    port: PORT,
    historyApiFallback: true,
    open: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
};
