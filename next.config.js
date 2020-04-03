const withSass = require('@zeit/next-sass');
const withPurgeCss = require('next-purgecss');
const withFonts = require('nextjs-fonts');
const withPwa = require('next-pwa');

module.exports = withPwa({
    pwa: {
        dest: 'public/service-worker',
        sw: 'service-worker.js',
    },
    ...withSass({
        ...withFonts(
            withPurgeCss({
                purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer, // Only enable PurgeCSS for client-side production builds
            }),
        ),
        cssModules: true,
    }),
});
