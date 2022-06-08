const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  
  //console.log('env :', env);
  
  return {
  entry : './src/app.js',
  output : {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

module : {
  rules: [{
    loader: "babel-loader",
    test: /\.js$/,
    exclude: /node_modules/
  }, {
    test: /\.s?css$/,
    use: CSSExtract.extract({
      use: [
        {
        loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
        loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    })
  }]
},
plugins: [
  CSSExtract
],

//devtool : 'cheap-module-eval-source-map',
devtool : isProduction ? 'source-map' : 'inline-source-map',
devServer : {
  contentBase: path.join(__dirname, 'public'),
  historyApiFallback: true
}
};
};


/*
    test: /\.s?css$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ]
*/


/*
import { join } from 'path';

export const entry = './src/app.js';
export const output = {
  path: join(__dirname, 'public'),
  filename: 'bundle.js'
};
export const module = {
  rules: [{
    loader: "babel-loader",
    test: /\.js$/,
    exclude: /node_modules/
  }, {
    test: /\.s?css$/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader'
    ]
  }]
};
export const devtool = 'cheap-module-eval-source-map';
export const devServer = {
  contentBase: join(__dirname, 'public'),
  historyApiFallback: true
};
*/