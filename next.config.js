const withSass = require('@zeit/next-sass');
const withPurgeCss = require('next-purgecss');
const withFonts = require('nextjs-fonts');

module.exports = withSass({
    ...withPurgeCss({
        purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer, // Only enable PurgeCSS for client-side production builds
    }),
    ...withFonts({
        webpack(config, options) {
            return config;
        },
    }),
    cssModules: true,
});
