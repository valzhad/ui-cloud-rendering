const path = require('path');

module.exports = {
  entry: {
    client: './src/client.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets/js'),
    filename: '[name].js'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  }
};
