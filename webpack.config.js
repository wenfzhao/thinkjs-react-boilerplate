var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
      main: [
          './assets/js/index.jsx',
          'webpack-dev-server/client?http://localhost:3001',
          'webpack/hot/only-dev-server'
      ]
  },
  mode: 'development',
  output: {
    path: path.join(__dirname, '/www/static/js/'),
    publicPath: '/static/js',
    filename: 'bundle.js'
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
  //loaders 
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
  //        cacheDirectory: false,
          options: {
            presets: ['react', 'es2015-loose', 'stage-0'],
            plugins: ['transform-runtime']
          },
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
  },
  devServer: {
    contentBase: "/static/js",
    historyApiFallback: true,
    inline: true,
    hot: true,
}
}