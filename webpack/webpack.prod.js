const path = require("path")

module.exports = {
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
    publicPath: "/weather-letras/",
  },
}
