// pages/_document.js
import SideNav from '@/components/layout/SideNav';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>{/* Add any additional meta tags, fonts, or link tags here */}</Head>
        <body>
          {/* Any global HTML elements (no client-side components) */}
          <Main /> {/* This renders the main application */}
          <NextScript /> {/* This injects Next.js scripts */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
