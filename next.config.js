module.exports = {
  target: 'serverless',
  webpack: function (config, { isServer }) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    return config
  },
}