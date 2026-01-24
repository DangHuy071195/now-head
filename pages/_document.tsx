import { Head, Html, Main, NextScript } from 'next/document';

const MyDocument = () => (
  <Html lang="en" className="dark">
    <Head>
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* DNS prefetch for other resources */}
      <link rel="dns-prefetch" href="https://next-js-bucket.s3.ap-southeast-1.amazonaws.com" />
    </Head>
    <body className="debug-screens">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
