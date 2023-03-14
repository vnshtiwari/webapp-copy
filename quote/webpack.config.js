const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const { ModuleFederationPlugin } = require("webpack").container;
const dependencies = require("./package.json").dependencies;

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "app",
    projectName: "Quote",
    webpackConfigEnv,
    argv,
  });

  console.log(defaultConfig);

  return merge(defaultConfig, {
    plugins: [
      new ModuleFederationPlugin({
        name: "Quote",
        filename: "remoteEntry.js",
        remotes: {
          Products: "Products@http://localhost:8084/remoteEntry.js",
        },
        exposes: {},
      }),
    ],
    externals: [],
    // modify the webpack config however you'd like to by adding to this object
  });
};
