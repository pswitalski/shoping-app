import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import GlobalStyles from '../styles/GlobalStyles';
import NavBar from '../components/NavBar/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Global styles={GlobalStyles} />
      <NavBar title='Shopping App' />
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
