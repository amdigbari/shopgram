const withPurgeCss = require('next-purgecss');
const withOffline = require('next-offline');

const offlineConfigs = {
    generateSw: false,
    workboxOpts: {
        swSrc: './public/sw.js',
        swDest: 'static/service-worker.js',
    },
    experimental: {
        async rewrites() {
            return [
                {
                    source: '/service-worker.js',
                    destination: '/_next/static/service-worker.js',
                },
            ];
        },
    },
};

module.exports = withOffline({
    ...offlineConfigs,
    ...withPurgeCss({
        purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer, // Only enable PurgeCSS for client-side production builds
    }),
});
