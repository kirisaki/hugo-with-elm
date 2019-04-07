const path = require("path")

module.exports = () => ({
  mode: 'development',
  entry: {
    main: path.join(__dirname, './src/index.js'),
  },
  output: {
    path: path.join(__dirname, 'static')
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
              cwd: path.join(__dirname),
              debug: true
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
})
