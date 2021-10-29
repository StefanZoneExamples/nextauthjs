import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript
} from 'next/document';
import React from 'react';

class _Document extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        return await Document.getInitialProps(ctx);
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default _Document;
