const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   // mode: 'development', //must be removed for production
   entry: {
      index: './src/index.js',
   },
   devtool: 'inline-source-map',
   devServer: {
      static: './dist',
      hot: true,
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: 'Restaurant', //remove line 5 'mode'
      }),
   ],
   output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
   },
   module: {
      rules: [
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
         },
      ],
   },
}