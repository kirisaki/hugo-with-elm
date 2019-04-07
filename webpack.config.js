const path = require("path")
const TerserPlugin = require('terser-webpack-plugin')

module.exports = () => ({
  mode: 'production',
  entry: {
    main: path.join(__dirname, './src/index.js'),
  },
  output: {
    path: path.join(__dirname, 'static'),
    library: 'Elm',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: [
          {
            loader: 'elm-webpack-loader',
            options: {
              optimize: true,
              },
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          mangle: false,
          compress: {
            pure_funcs: ['F2','F3','F4','F5','F6','F7','F8','F9','A2','A3','A4','A5','A6','A7','A8','A9'],
            pure_getters: true,
            keep_fargs: false,
            unsafe_comps: true,
            unsafe: true,
          },
        },
      }),
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: { mangle: true },
      }),
    ],
  },
})
