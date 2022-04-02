import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import GlobalStyles from '../styles/GlobalStyles';
import NavBar from '../components/NavBar/NavBar';
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }: AppProps) {

  const { session } = pageProps;
  console.log(session)

  return(
    <>
      <SessionProvider>
        <Global styles={GlobalStyles} />
        <NavBar title='Shopping App' />
        <Component {...pageProps} />
      </SessionProvider>
    </>

  )
}

export default MyApp
