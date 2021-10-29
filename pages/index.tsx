import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from 'components/layout';

const Index: NextPage = () => {
    return (
        <>
            <Head>
                <title>NextAuth.js Example</title>
            </Head>
            <Layout>
                <h1>NextAuth.js Example</h1>
                <p>
                    This is an example site to demonstrate how to use{' '}
                    <a href="https://next-auth.js.org" target="_blank" rel="noreferrer noopener">
                        NextAuth.js
                    </a>{' '}
                    with Google.
                </p>
            </Layout>
        </>
    );
};

export default Index;
