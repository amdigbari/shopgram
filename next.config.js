const withSass = require('@zeit/next-sass');
const withPurgeCss = require('next-purgecss');
const withFonts = require('nextjs-fonts');
const withOffline = require('next-offline');

const offlineConfigs = {
    workboxOpts: {
        swDest: process.env.NEXT_EXPORT ? 'service-worker.js' : 'static/service-worker.js',
        runtimeCaching: [
            {
                urlPattern: /^https?.*/,
                handler: 'NetworkFirst',
                options: {
                    cacheName: 'offlineCache',
                    expiration: {
                        maxEntries: 200,
                    },
                },
            },
        ],
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
    ...withSass({
        ...withFonts(
            withPurgeCss({
                purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer, // Only enable PurgeCSS for client-side production builds
            }),
        ),
        cssModules: true,
    }),
});
