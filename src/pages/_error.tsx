import Error, { ErrorProps } from 'next/error';
import Router from 'next/router';

export default Error;

Error.getInitialProps = ({ res, err, asPath }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

    if (statusCode && statusCode === 404) {
        const [path = '', query = ''] = asPath?.split('?') || [];
        if (path?.match(/\/$/)) {
            const withoutTrailingSlash = `${path.substr(0, path.length - 1)}${query ? `?${query}` : ''}`;
            if (res) {
                res.writeHead(302, {
                    Location: withoutTrailingSlash,
                });
                res.end();
            } else {
                Router.push(withoutTrailingSlash);
            }
        }
    }

    return { statusCode } as ErrorProps;
};
