import '@fontsource/source-serif-pro/latin.css';
import { Provider } from 'next-auth/client';
import type { AppProps } from 'next/app';
import 'normalize.css';
import 'styles/globals.css';

function App({ Component, pageProps }: AppProps) {
    return (
        <Provider
            options={{
                clientMaxAge: 0,
                keepAlive: 0
            }}
            session={pageProps.session}
        >
            <Component {...pageProps} />
        </Provider>
    );
}

export default App;
