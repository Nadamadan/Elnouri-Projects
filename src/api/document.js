import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <meta name="description" content="This is my Next.js PWA application." />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
