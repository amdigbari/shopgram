const withSass = require("@zeit/next-sass");
const withPurgeCss = require("next-purgecss");

module.exports = withSass(
    withPurgeCss({
        purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer, // Only enable PurgeCSS for client-side production builds
        cssModules: true
    })
);
