const path = require("path");

module.exports = (config) => {
  config.module.resolve.alias({
    Actions: path.resolve(__dirname, "src/Actions"),
    App: path.resolve(__dirname, "src/App"),
    Components: path.resolve(__dirname, "src/Components"),
    Reducers: path.resolve(__dirname, "src/Reducers"),
    Tracking: path.resolve(__dirname, "src/Tracking"),
    Utils: path.resolve(__dirname, "src/Utils"),
  })(config);
  return config;
};
