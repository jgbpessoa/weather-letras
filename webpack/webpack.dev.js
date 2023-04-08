const path = require("path")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  devtool: "cheap-module-source-map",
  plugins: [new ReactRefreshWebpackPlugin()],
}
