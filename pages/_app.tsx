import MainLayout from '@/components/layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import AnimatedCursor from 'react-animated-cursor';
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/next';

export default function App({ Component, pageProps }: AppProps) {


  return (
    <MainLayout>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: '#ffffff',
        }}
        outerStyle={{
          border: '3px solid #f7f7f7',
          zIndex: '9999',
        }}
      />
      <Component {...pageProps} />
      <Analytics />
    </MainLayout>
  );
}
