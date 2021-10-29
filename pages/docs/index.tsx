import type { NextPage } from 'next';
import Head from 'next/head';

import Layout from 'components/layout';
import Pre from 'components/pre';

const Index: NextPage = () => {
    return (
        <>
            <Head>
                <title>Docs</title>
            </Head>
            <Layout>
                <h1>Docs</h1>
                <p>First, clone the underlying GitHub repository for this project.</p>
                <h2>Install Dependencies</h2>
                <p>Conduct a clean install of all dependencies.</p>
                <Pre>{`$ npm ci`}</Pre>
                <h2>NextAuth.js Configuration</h2>
                <p>
                    Review and update options in <em>pages/api/auth/[...nextauth].ts</em>.
                </p>
                <h2>Google OAuth Configuration</h2>
                <p>
                    Create a{' '}
                    <a
                        href="https://console.cloud.google.com/projectcreate"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        new project
                    </a>{' '}
                    in the Google Cloud Platform console.
                </p>
                <h4>Configure OAuth Consent Screen</h4>
                <ol>
                    <li>
                        Navigate to the{' '}
                        <a
                            href="https://console.cloud.google.com/apis/credentials/consent"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            OAuth Consent Screen Wizard
                        </a>
                        .
                    </li>
                    <li>
                        Select <strong>External</strong>. This will launch OAuth in test mode and
                        make it available only to users you add to the list of test users.
                    </li>
                    <li>
                        Next, fill in all the required fields related to the{' '}
                        <strong>app information</strong> and{' '}
                        <strong>developer contact information</strong>.{' '}
                    </li>
                    <li>
                        Skip entering the required <strong>scopes</strong>, as these are set
                        automatically.
                    </li>
                    <li>
                        Finally, you need to add <strong>test users</strong>. These are email
                        addresses of users who currently have a Google account. During the
                        development and testing phase, only this subset will have exclusive access
                        to your app.
                    </li>
                </ol>
                <h4>Create OAuth Client ID</h4>
                <ol>
                    <li>
                        Navigate to the{' '}
                        <a
                            href="https://console.cloud.google.com/apis/credentials/oauthclient"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            OAuth Client ID Wizard
                        </a>
                        .
                    </li>
                    <li>
                        Select <strong>Web application</strong> from the list of application types.
                    </li>
                    <li>
                        Fill in the non-public <strong>name</strong> of the client.
                    </li>
                    <li>
                        In the <strong>Authorized JavaScript origins</strong> field, enter the
                        domains, under which your web application is hosted. If you use a port other
                        than 80, you must specify it, for example: <em>http://localhost:3000</em> or{' '}
                        <em>https://example.com:3000</em>.
                    </li>
                    <li>
                        Finally, you need to define callback URIs in the{' '}
                        <strong>Authorised redirect URIs</strong> section. The user will be
                        redirected to these after logging in. If using the provider Google, the
                        callback URI would be, for example:{' '}
                        <em>http://localhost:3000/api/auth/callback/google</em>.
                    </li>
                    <li>
                        Now copy the <strong>Client ID</strong> and the{' '}
                        <strong>Client Secret</strong>.
                    </li>
                </ol>
                <h2>Configure Environment Variables</h2>
                <p>
                    Copy the <em>.env.local.example</em> file to <em>.env.local</em> (which will be
                    ignored by Git).
                </p>
                <Pre>{`$ cp .env.local.example .env.local`}</Pre>
                <p>
                    You may now proceed with the configuration of the <em>.env.local</em> file.
                </p>
                <ol>
                    <li>
                        <em>SECRET</em>: Pseudo-randomly generated{' '}
                        <a
                            href="https://generate-secret.vercel.app/32"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            secret
                        </a>{' '}
                        .
                    </li>
                    <li>
                        <em>GOOGLE_ID</em>: Google OAuth Client ID.
                    </li>
                    <li>
                        <em>GOOGLE_SECRET</em>: Google OAuth Client Secret.
                    </li>
                    <li>
                        <em>NEXTAUTH_URL</em>: Canonical Web Application URI.
                    </li>
                </ol>
                <p>
                    <strong>Note</strong>: When deploying to production, set the{' '}
                    <em>NEXTAUTH_URL</em> environment variable to the canonical URL of your site.
                </p>
                <h2>Enable Google Sheets API</h2>
                <p>
                    The Google Sheets API can be activated via the{' '}
                    <a
                        href="https://console.cloud.google.com/marketplace/product/google/sheets.googleapis.com"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Google Cloud Platform Marketplace
                    </a>
                    .
                </p>
            </Layout>
        </>
    );
};

export default Index;
