import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from 'components/layout';

const Index: NextPage = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy</title>
            </Head>
            <Layout>
                <h1>Privacy Policy</h1>
                <p>
                    Data provided to this site is exclusively used to support signing in and is not
                    passed to any third party services, other than via SMTP or OAuth for the
                    purposes of authentication.
                </p>
            </Layout>
        </>
    );
};

export default Index;
