import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import GlobalStyles from '../styles/GlobalStyles';
import NavBar from '../components/NavBar/NavBar';
import { SessionProvider } from "next-auth/react";
import { Provider } from 'react-redux';
import store from '../stores/store';

function MyApp({ Component, pageProps }: AppProps) {
  const { session } = pageProps;

  return(
    <>
      <Provider store={store}>
        <SessionProvider>
          <Global styles={GlobalStyles} />
          <NavBar title='Shopping App' />
          <Component {...pageProps} />
        </SessionProvider>
      </Provider>
    </>

  )
}

export default MyApp
