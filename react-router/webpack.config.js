const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "lotto-dev",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { browsers: ["last 2 chrome versions"] },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "react-refresh/babel",
            "@babel/plugin-proposal-class-properties",
          ],
        },
        exclude: path.join(__dirname, "node_modules"),
      },
    ],
  },

  plugins: [new ReactRefreshWebpackPlugin()],
  // output: {
  //   path: path.join(__dirname, "dist"),
  //   filename: "[name].js",
  //   publicPath: "/dist/",
  // },
  devServer: {
    historyApiFallback: true,
    publicPath: "/dist/",
    hot: true,
    port: 9000,
  },
};
