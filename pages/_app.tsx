import "../public/styles/globals.css";
import Head from "next/head";

function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Marknote</title>
        <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
        <meta name="title" content="Marknote" />
        <meta name="description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Marknote" />
        <meta property="og:image" content="./favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
