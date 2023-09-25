// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })
// module.exports = withBundleAnalyzer({})

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.externals = [...config.externals,
    //  'langchain/vectorstores/chroma'
    //     'chromadb'
    //     '@visheratin/web-ai-node'
    //     "fs",
    //     "https"
    ];
    return config;
  },
};

module.exports = withPlugins([
  [withBundleAnalyzer],
  // You can add more plugins here if needed.
], nextConfig);
