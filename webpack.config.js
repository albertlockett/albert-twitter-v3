var webpack = require('webpack');
var path = require('path');

var config = {
  entry: ['./src/js/init.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  babel: {
    presets: ['es2015', 'react']
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        loaders: ['babel'], 
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
