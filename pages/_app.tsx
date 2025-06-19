import MainLayout from '@/components/layout';
import { useActions } from '@/hooks/useAction';
import { useTypedSelector } from '@/hooks/useSelector';
import { auth } from '@/libs/firebase';
import { store } from '@/store';
import '@/styles/globals.css';
import '@/styles/profile-card.css';
import fetcher from '@/utils/fetcher';
import { onAuthStateChanged } from 'firebase/auth';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import useSWR from 'swr';
import AnimatedCursor from 'react-animated-cursor';

export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   // Sync localStorage state after hydration
  //   const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null;
  //   if (user) {
  //     store.dispatch({
  //       type: 'auth/hydrate',
  //       payload: user,
  //     });
  //   }
  // }, []);

  return (
    <Provider store={store}>
      <MainLayout>
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: '#ffffff',
          }}
          outerStyle={{
            border: '3px solid #f7f7f7',
          }}
        />
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}
