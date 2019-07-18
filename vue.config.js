module.exports = {
    devServer: {
        port: 8082,
        https: true,
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/Pomodoro/'
    : '/'
}
