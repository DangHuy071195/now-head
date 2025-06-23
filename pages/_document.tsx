import { Head, Html, Main, NextScript } from 'next/document';

const MyDocument = () => (
  <Html lang="en">
    <Head />
    <body className="debug-screens">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default MyDocument;
