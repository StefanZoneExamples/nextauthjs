import '@fontsource/source-serif-pro/latin.css';
import axios from 'axios';
import { Provider } from 'next-auth/client';
import type { AppProps } from 'next/app';
import 'normalize.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import 'styles/globals.css';
import { errorHandler } from 'utils/axios';

function App({ Component, pageProps }: AppProps) {
    return (
        <Provider
            options={{
                clientMaxAge: 0,
                keepAlive: 0
            }}
            session={pageProps.session}
        >
            <QueryClientProvider
                client={
                    new QueryClient({
                        defaultOptions: {
                            queries: {
                                // Referenz: https://react-query.tanstack.com/guides/default-query-function
                                queryFn: async ({ queryKey }) => {
                                    try {
                                        // Durchführen der Abfrage.
                                        return (await axios.get(`${queryKey[0]}`)).data;
                                    } catch (error) {
                                        // Es ist ein Fehler aufgetreten.
                                        errorHandler(error);
                                    }
                                }
                            }
                        }
                    })
                }
            >
                <Component {...pageProps} />
            </QueryClientProvider>
        </Provider>
    );
}

export default App;
