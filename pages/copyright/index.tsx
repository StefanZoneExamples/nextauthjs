import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from 'components/layout';

const Index: NextPage = () => {
    return (
        <>
            <Head>
                <title>Copyright</title>
            </Head>
            <Layout>
                <h1>Copyright</h1>
                <p>
                    Except as otherwise noted, the contents of this site are licensed under the{' '}
                    <a
                        href="https://creativecommons.org/licenses/by/3.0/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Creative Commons Attribution 3.0 License
                    </a>
                    , and code is licensed under the{' '}
                    <a
                        href="https://www.gnu.org/licenses/gpl-3.0.txt"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        GNU General Public License v3.0
                    </a>
                    .
                </p>
            </Layout>
        </>
    );
};

export default Index;
