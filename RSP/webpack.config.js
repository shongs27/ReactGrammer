const path = require("path");
// const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  name: "lotto-dev",
  mode: "development",
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
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
  // plugins: [new ReactRefreshWebpackPlugin()],
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
    // publicPath: "/dist/",
  },
  // devServer: {
  //   historyApiFallback: true,
  //   publicPath: "/dist/",
  //   hot: true,
  // },
};

// const path = require("path");
// // const webpack = require("webpack");

// module.exports = {
//   mode: "development",
//   devtool: "inline-source-map", // hidden-source-map
//   resolve: {
//     extensions: [".jsx", ".js"],
//   },

//   entry: {
//     app: ["./client"],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         loader: "babel-loader",
//         options: {
//           presets: [
//             [
//               "@babel/preset-env",
//               {
//                 targets: {
//                   browsers: ["> 1% in KR"], // browserslist
//                 },
//                 debug: true,
//               },
//             ],
//             "@babel/preset-react",
//           ],
//           plugins: [],
//         },
//       },
//     ],
//   },
//   output: {
//     filename: "[name].js",
//     path: path.join(__dirname, "dist"),
//   },
// };
