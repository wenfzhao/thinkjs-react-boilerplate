var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
      main: [
          './assets/js/App.jsx',
          'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
      ]
  },
  output: {
    path: path.join(__dirname, '/www/static/js/'),
    publicPath: '/static/js',
    filename: 'bundle.js'
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
  //loaders 
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
//        cacheDirectory: false,
        query: {
          presets: ['react', 'es2015-loose', 'stage-0'],
          plugins: ['transform-runtime']
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  }
}