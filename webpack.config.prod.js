const merge = require("webpack-merge")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const ManifestPlugin = require("webpack-manifest-plugin")
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

const baseConfig = require("./webpack.config.base")

module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "bundle_sizes.html"
    }),
    new ManifestPlugin({
      fileName: "asset-manifest.json"
    }),
    new SWPrecacheWebpackPlugin({
      filename: "service-worker.js",
      logger(message) {
        if (message.indexOf("Total precache size is") === 0) {
          return
        }
        console.log(message)
      },
      minify: true,
      navigateFallback: "./src/index.html",
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/]
    }),
    new CopyWebpackPlugin([{ from: "src/pwa" }])
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  }
})
