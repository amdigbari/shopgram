const withSass = require('@zeit/next-sass');
const withPurgeCss = require('next-purgecss');
const withFonts = require('nextjs-fonts');
const withOffline = require('next-offline');

const offlineConfigs = {
    workboxOpts: {
        runtimeCaching: [
            {
                // Match any request that ends with .png, .jpg, .jpeg or .svg.
                urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

                // Apply a cache-first strategy.
                handler: 'CacheFirst',

                options: {
                    // Use a custom cache name.
                    cacheName: 'images',

                    // Only cache 10 images.
                    expiration: {
                        maxEntries: 10,
                    },
                },
            },
            {
                urlPattern: /^https?.*/,
                handler: 'NetworkFirst',
                options: {
                    cacheableResponse: {
                        statuses: [0, 200],
                    },
                    cacheName: 'offlineCache',
                    expiration: {
                        maxEntries: 200,
                    },
                },
            },
        ],
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
