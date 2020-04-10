import { NextPage } from 'next';

import Header from 'components/DesktopHeader';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => <Header />;

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
    return { userAgent };
};

export default Home;
