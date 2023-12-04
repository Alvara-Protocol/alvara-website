import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';
import '@/styles/scss/main.scss';
import 'react-medium-image-zoom/dist/styles.css';

import Providers from '@/lib/Providers';

import { Seo } from '@/components';
import Layout from '@/components/layout/Layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Layout>
        <Seo />

        <Component {...pageProps} />
      </Layout>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </Providers>
  );
}

export default App;
