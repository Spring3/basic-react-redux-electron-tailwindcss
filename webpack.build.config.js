const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const NodeExternals = require('webpack-node-externals');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const glob = require('glob-all');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// Config directories
const SRC_DIR = path.resolve(__dirname, 'src');
const OUTPUT_DIR = path.resolve(__dirname, 'dist');

// Any directories you will be adding code/files into, need to be added to this array so webpack will pick them up
const defaultInclude = [SRC_DIR];
const isRelease = process.argv.indexOf('-p') !== -1;

module.exports = {
  entry: SRC_DIR + '/index.js',
  output: {
    path: OUTPUT_DIR,
    publicPath: './',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              minimize: isRelease,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'
          }]
        }),
        include: defaultInclude,
        exclude: ['__tests__', '__mocks__']
      },
      {
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader' }],
        include: defaultInclude,
        exclude: ['__tests__', '__mocks__']
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
        include: defaultInclude
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
        include: defaultInclude
      }
    ]
  },
  target: 'electron-renderer',
  externals: [NodeExternals()],
  plugins: [
    new HtmlWebpackPlugin({
      template: SRC_DIR + '/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      test: /\.jsx?$/,
      sourceMap: true,
      uglifyOptions: {
        compress: true,
        comments: false
      }
    }),
    new OptimizeCssPlugin({
      cssProcessorOptions: { discardComments: { removeAll: true } }
    }),
    new PurgecssPlugin({
      paths: glob.sync([
        SRC_DIR + '/index.html',
        SRC_DIR + '/**/*'
      ], { nodir: true }),
      extractors: [
        {
          extractor: class {
            static extract(content) {
              return content.match(/[A-z0-9-:\/]+/g) || []
            }
          },
          extensions: ['html', 'js', 'json', 'css', 'jsx']
        }
      ]
    })
    // ,new BundleAnalyzerPlugin()
  ],
  stats: {
    colors: true,
    children: false,
    chunks: false,
    modules: false
  }
};
