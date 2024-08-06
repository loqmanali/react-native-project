const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'index.web.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web'
    },
    extensions: ['.web.js', '.js', '.ts', '.tsx'] // Add .ts and .tsx
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // Handle .ts and .tsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['module:metro-react-native-babel-preset']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
