const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'public'),
    assetModuleFilename: '[hash][ext][query]',
    publicPath: '/',
  },
  devServer: {
    open: true,
    historyApiFallback: true,
    stats: 'errors-only',
  },
  optimization: {
    nodeEnv: 'development',
    emitOnErrors: true,
    minimize: false,
    removeAvailableModules: false,
    concatenateModules: true,
    checkWasmTypes: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.pug',
      filename: './index.html',
      favicon: 'src/assets/favicon.ico',
      inject: false,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.pug$/,
        use: 'pug-loader',
      },

      {
        test: /.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: [/node_modules/, /public/, /__mocks__/, /tests/],
      },

      {
        test: /\.(c|sa|sc)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
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
