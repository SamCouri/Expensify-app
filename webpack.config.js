const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  
  /*
  const UglifyMinimiser = new UglifyJsPlugin(
    {
      uglifyOptions :
          {
               mangle: {
               keep_fnames: true,
               },
              compress: {
              warnings: false,
              },
              output: {
              beautify: false,
              },
              sourceMap: true
          },
      });
*/

  return {
  entry : './src/app.js',
  output : {
    path: path.join(__dirname, 'public', 'dist'),
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
  //UglifyMinimiser
],

//devtool : 'cheap-module-eval-source-map',
devtool : isProduction ? 'source-map' : 'inline-source-map',
devServer : {
  contentBase: path.join(__dirname, 'public'),
  historyApiFallback: true,
  publicPath: '/dist/'
  }
};
};
