import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Global } from '@emotion/react';
import GlobalStyles from '../styles/GlobalStyles';
import NavBar from '../components/NavBar/NavBar';
import { SessionProvider } from "next-auth/react";
import { Provider } from 'react-redux';
import store from '../stores/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  const { session } = pageProps;
  const router = useRouter();
  const isDashboard = router.pathname === '/dashboard';

  return(
    <>
      <Provider store={store}>
        <SessionProvider session={session}>
          <Global styles={GlobalStyles} />
          <NavBar title='Shopping App' />
          <Component {...pageProps} />
          {isDashboard &&
          <ToastContainer
            position="bottom-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme='colored'
          />
          }
        </SessionProvider>
      </Provider>
    </>

  )
}

export default MyApp
