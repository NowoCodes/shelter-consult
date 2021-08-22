
module.exports = {
    pwa: {
        workboxOptions: {
            exclude: [/_redirects/]
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/shelter-consult/'
        : '/'
}