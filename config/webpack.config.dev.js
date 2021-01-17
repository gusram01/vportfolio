const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'public'),
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
      template: 'src/index.html',
      filename: './index.html',
    }),
  ],
  module: {
    rules: [
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
        exclude: [/node_modules/, /dist/],
      },

      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
