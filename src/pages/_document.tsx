import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="application-name" content="Shophgram" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                    <meta name="apple-mobile-web-app-title" content="Shopgram" />
                    <meta name="description" content="شبکه اجتماعی خرید" />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="mobile-web-app-capable" content="yes" />
                    {/* <meta name="msapplication-config" content="/static/icons/browserconfig.xml" /> */}
                    <meta name="msapplication-TileColor" content="#2B5797" />
                    <meta name="msapplication-tap-highlight" content="no" />
                    <meta name="theme-color" content="#890066" />
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                    />

                    <link rel="apple-touch-icon" sizes="180x180" href="/images/icons/icon-85x128.png" />
                    <link rel="icon" type="image/png" sizes="96x96" href="/images/icons/icon-64x96.png" />
                    <link rel="icon" type="image/png" sizes="72x72" href="/images/icons/icon-48x72.png" />
                    <link rel="manifest" href="/manifest.json" />
                    {/* <link rel="mask-icon" href="/static/icons/safari-pinned-tab.svg" color="#5bbad5" /> */}
                    {/* <link rel="shortcut icon" href="/static/icons/favicon.ico" /> */}
                    <link rel="stylesheet" href="/styles/tailwind/tailwind.css" />

                    {/* <meta name="twitter:card" content="summary" />
                    <meta name="twitter:url" content="https://yourdomain.com" />
                    <meta name="twitter:title" content="PWA App" />
                    <meta name="twitter:description" content="Best PWA App in the world" />
                    <meta name="twitter:image" content="https://yourdomain.com/static/icons/android-chrome-192x192.png" />
                    <meta name="twitter:creator" content="@DavidWShadow" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="PWA App" />
                    <meta property="og:description" content="Best PWA App in the world" />
                    <meta property="og:site_name" content="PWA App" />
                    <meta property="og:url" content="https://yourdomain.com" />
                    <meta property="og:image" content="https://yourdomain.com/static/icons/apple-touch-icon.png" /> */}
                </Head>

                <body className="font-primary">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
