// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, Html, NextScript } from 'next/document';
import '../project/api';


class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <noscript dangerouslySetInnerHTML={{ __html: `<iframe
                      src="https://www.googletagmanager.com/ns.html?id=GTM-NXCB72"
                      height="0" width="0" style="display:none;visibility:hidden"
                    />` }}
                    />

                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
