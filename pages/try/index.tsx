import { useSpreadSheet } from 'hooks';
import { NextPage } from 'next';
import Head from 'next/head';

import Layout from 'components/layout';
import Response from 'components/response';

const Index: NextPage = () => {
    return (
        <>
            <Head>
                <title>Try</title>
            </Head>
            <Layout>
                <h1>Try</h1>
                <p>The blocks below show responses from the API endpoints.</p>
                <p>
                    <em>You must be signed in to see responses.</em>
                </p>
                <h2>Spreadsheet</h2>
                <p>
                    The OAuth Access Token can be used to retrieve data from a Google Spreadsheet.
                </p>
                <p>
                    <em>/api/provider/google/spreadsheets/values/json</em>
                </p>
                <Response {...useSpreadSheet()} />
            </Layout>
        </>
    );
};

export default Index;
