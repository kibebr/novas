// next.config.js
const createNextPluginPreval = require('next-plugin-preval/config');
const withNextPluginPreval = createNextPluginPreval();
const withPlugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      loader: '@svgr/webpack',
      options: {
        ref: true,
        icon: true
      }
    })

    if (!isServer) {
      config.node = {
        fs: 'empty',
        module: 'empty'
      }
    }

    return config
  },
  images: {
    domains: ['futurism.com', '*']
  }
}

module.exports = withNextPluginPreval(
  withPlugins([withBundleAnalyzer], nextConfig)
)
