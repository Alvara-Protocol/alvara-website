import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import '@/styles/globals.css';
import '@/styles/scss/main.scss';

import Providers from '@/lib/Providers';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Layout>
        <Seo />
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </Providers>
  );
}

export default MyApp;
