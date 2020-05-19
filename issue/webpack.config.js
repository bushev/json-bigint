const path = require('path');

module.exports = {
  entry: './index.ts',
  mode: 'production',
  devtool: 'source-map', // source-map, eval
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: path.resolve(__dirname, 'node_modules')
    }]
  },
  externals: ['aws-sdk'],
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  optimization: {
    minimize: false
  },
  stats: 'errors-warnings',
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2', // umd, commonjs2
    path: path.resolve(__dirname, 'dist')
  }
};