const path = require('path'),
  webpack = require('webpack'),
  HtmlWebpackPlugin = require('html-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
  entry: {
    app: ['./src/index.tsx'],
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [path.resolve('./node_modules')],
    plugins: [new TsConfigPathsPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  watchOptions: {
    poll: 1000,
    ignored: /node_modules/
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'index.html') }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
