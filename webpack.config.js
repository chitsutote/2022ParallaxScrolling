const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: './src/index',
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: '[name].bundle.js',
  },
  optimization: {
    noEmitOnErrors: true,
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: '@linaria/webpack-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/i,
        dependency: { not: ['url'] },
        use: [{
          loader: 'file-loader',
        }],
      },
    ],
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
    },
    extensions: ["*", ".js", ".jsx"],
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
};