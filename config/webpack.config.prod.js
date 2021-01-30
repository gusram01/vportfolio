const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'js/bundle.[contenthash].js',
    path: path.resolve(__dirname, '..', 'public'),
    assetModuleFilename: '[hash][ext][query]',
    publicPath: '/',
  },
  optimization: {
    nodeEnv: 'production',
    concatenateModules: true,
    checkWasmTypes: true,
    minimize: true,
    emitOnErrors: true,
    removeAvailableModules: false,
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/pug/pages/index.pug',
      filename: './index.html',
      favicon: 'src/assets/favicon.ico',
      inject: false,
    }),
    new CompressionPlugin({
      exclude: /\.ico$/,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/styles.[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },

      {
        test: /.ts?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: [/node_modules/, /dist/],
      },

      {
        test: /\.(c|sa|sc)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },

      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset',
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
            },
          },
        ],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              outputPath: 'webfonts/',
            },
          },
        ],
      },

      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
};
