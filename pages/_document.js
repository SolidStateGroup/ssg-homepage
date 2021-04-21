// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, Html, NextScript } from 'next/document';
import '../project/api';


if (typeof window !=='undefined') {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event' : 'dataLayer'
  });
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-NXCB72');
}
class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <noscript dangerouslySetInnerHTML={{__html:`<iframe
                      src="https://www.googletagmanager.com/ns.html?id=GTM-NXCB72"
                      height="0" width="0" style="display:none;visibility:hidden"
                    />`}}>
                    </noscript>

                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
