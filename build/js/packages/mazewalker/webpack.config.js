let config = {
  mode: 'production',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["E:\\java.kotlin\\diploma.releases\\v1.0\\mazewalker\\build\\js\\packages\\mazewalker\\kotlin-dce\\mazewalker.js"]
};

config.output = {
    path: "E:\\java.kotlin\\diploma.releases\\v1.0\\mazewalker\\build\\distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "mazewalker.js"
            : "mazewalker-[name].js";
    },
    library: "mazewalker",
    libraryTarget: "umd",
    globalObject: "this"
};

// resolve modules
config.resolve.modules.unshift("E:\\java.kotlin\\diploma.releases\\v1.0\\mazewalker\\build\\js\\packages\\mazewalker\\kotlin-dce")

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = 'source-map';
config.ignoreWarnings = [/Failed to parse source map/]

// dev server
config.devServer = {
  "inline": true,
  "lazy": false,
  "noInfo": true,
  "open": true,
  "overlay": false,
  "contentBase": [
    "E:\\java.kotlin\\diploma.releases\\v1.0\\mazewalker\\build\\processedResources\\js\\main"
  ]
};

// css settings
;(function(config) {
    ;(function(config) {
       const use = [
           {
               loader: 'css-loader',
               options: {},
           }
       ]
       use.unshift({
           loader: 'style-loader',
           options: {}
       })
       
       config.module.rules.push({
           test: /\.css$/,
           use: use,
           
           
       })

   })(config);
            
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// save evaluated config file
;(function(config) {
    const util = require('util');
    const fs = require('fs');
    const evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
    fs.writeFile("E:\\java.kotlin\\diploma.releases\\v1.0\\mazewalker\\build\\reports\\webpack\\mazewalker\\webpack.config.evaluated.js", evaluatedConfig, function (err) {});
})(config);

module.exports = config
