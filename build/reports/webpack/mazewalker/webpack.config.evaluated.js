{
  mode: 'production',
  resolve: {
    modules: [
      'E:\\java.kotlin\\diploma.releases\\v1.0\\mazewalker\\build\\js\\packages\\mazewalker\\kotlin-dce',
      'node_modules'
    ]
  },
  plugins: [
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      'E:\\java.kotlin\\diploma.releases\\v1.0\\mazewalker\\build\\js\\packages\\mazewalker\\kotlin-dce\\mazewalker.js'
    ]
  },
  output: {
    path: 'E:\\java.kotlin\\diploma.releases\\v1.0\\mazewalker\\build\\distributions',
    filename: [Function: filename],
    library: 'mazewalker',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    contentBase: [
      'E:\\java.kotlin\\diploma.releases\\v1.0\\mazewalker\\build\\processedResources\\js\\main'
    ]
  },
  stats: {
    warnings: false,
    errors: false
  }
}