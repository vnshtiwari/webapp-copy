var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "app",
    projectName: "Products",
    webpackConfigEnv,
    argv,
  });
  //console.log(defaultConfig);
  return merge(defaultConfig, {
    devtool: false,
    output: {
      clean: true,
    },
    module: {
      rules: [
        // CSS rules
        {
          test: /\.(s(a|c)ss)$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
      plugins: [
        // new CopyPlugin([{ from: "public", to: "." }]),
      ],
    },
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: "all",
        minSize: 1000,
        minChunks: 3,
        cacheGroups: {
          default: false,
        },
      },
    },
    plugins: [new BundleAnalyzerPlugin()],
  });
};
