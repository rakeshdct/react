var path = require("path");

var config = {
   entry: './main.js',

   output: {
      filename: 'index.js',
   },

   devServer: {
      inline: true,
      port: 8080
   },

   module: {

      loaders: [
        { test: /\.css$/, loader: "style!css" },
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
               presets: ['es2015', 'react']
            }
         }
      ],

   }
}

module.exports = config;
