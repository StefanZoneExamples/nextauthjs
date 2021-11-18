import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from 'components/layout';

const Index: NextPage = () => {
    return (
        <>
            <Head>
                <title>FAQ</title>
            </Head>
            <Layout>
                <h1>FAQ</h1>
                <h2>Restrict Access to Authorized Users</h2>
                <p>
                    In order to restrict access to selected users only, it is necessary to activate
                    access restrictions. To do this, specify a list of email addresses in the{' '}
                    <strong>authorizedUsers</strong> section of the{' '}
                    <a
                        href="https://nextjs.org/docs/api-reference/next.config.js/introduction"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        next.config.js
                    </a>{' '}
                    file, that you can find in the root directory of your project.
                </p>
                <p>
                    If your project is still in the development phase, you will also need to
                    register these email addresses as <strong>test users</strong> in the{' '}
                    <a
                        href="https://console.cloud.google.com/apis/credentials/consent"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Google OAuth consent screen
                    </a>{' '}
                    settings.
                </p>
                <p>Then, restart the server to see the changes in effect.</p>
            </Layout>
        </>
    );
};

export default Index;
