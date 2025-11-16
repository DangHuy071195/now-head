import MainLayout from '@/components/layout';
import '@/styles/globals.css';
import '@/styles/profile-card.css';
import type { AppProps } from 'next/app';
import AnimatedCursor from 'react-animated-cursor';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Override the library's hardcoded z-index: 999
    const updateCursorZIndex = () => {
      // Target all divs that have the cursor's characteristic inline styles
      const allDivs = document.querySelectorAll('body > div');
      allDivs.forEach((element) => {
        if (element instanceof HTMLElement) {
          const style = element.getAttribute('style') || '';
          // Check if this div has the cursor's characteristic styles
          if (
            style.includes('pointer-events: none') ||
            style.includes('position: fixed') && style.includes('border-radius: 50%')
          ) {
            element.style.setProperty('z-index', '10000', 'important');
            console.log('Updated cursor z-index:', element);
          }
        }
      });
    };

    // Run immediately and after a short delay to ensure cursor is mounted
    updateCursorZIndex();
    setTimeout(updateCursorZIndex, 100);
    setTimeout(updateCursorZIndex, 500);
    
    const observer = new MutationObserver(updateCursorZIndex);
    observer.observe(document.body, { childList: true, subtree: false, attributes: true, attributeFilter: ['style'] });

    return () => observer.disconnect();
  }, []);

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
        }}
      />
      <Component {...pageProps} />
    </MainLayout>
  );
}
