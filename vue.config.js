module.exports = {
    devServer: {
        port: 8082,
        https: true,
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/Pomodoro/public/index.html'
    : '/',
     build: {
    // Template for index.html
    index: path.resolve(__dirname, '../docs/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../docs'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
   
  }
}
