const path = require('path');
const { webpack } = require('webpack');

module.exports = {
  mode: "development",
  // where the application starts executing and webpack starts bundling
  entry: [ './client/index.js' ], // ** why does this need to be in array? not in array on webpack config docs but is in unit files
  // options as to how webpack emits results
  output: {
    // the target directory for all output files
    path: path.resolve(__dirnmae, 'dist'),
    // the url to the output directory resolved relative to the HTML page
    publicPath: '/',
    // file name template for entry chunks      // ** what are entry chunks?
    filename: 'bundle.js',
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    // a static file location
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    // enable HMR on the devServer
    hot: true,  // * HMR = Hot Module Replacement (makes changes to modules while an application is running, without a full reload)
    // * not needed here:
        // compress: ,
        // historyApiFallback: ,
    // enables devServer to serve pages over HTTPS
    https: true,    // * useful when using the "proxy" feature
    // proxy URLs to backend development server ( ** devServer? )
    proxy: {
      '/api/**': {  // ** what are the ** for?
          target: 'http://localhost:3000/',
          // return false to produce a 404 error for the request
          secure: false,
      },
      '/assets/**': {
          target: 'http://localhost:3000/',
          secure: false,
      }
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin
  ],
};