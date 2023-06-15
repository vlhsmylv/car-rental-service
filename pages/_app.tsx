import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/main.scss";
import Layout from "@/components/base/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Car Rental Service</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
