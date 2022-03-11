import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import GlobalStyles from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Global styles={GlobalStyles} />
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
