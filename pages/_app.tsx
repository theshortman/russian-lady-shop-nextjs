import "@/styles/styles.min.css";
import { FC } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/Layout";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>{process.env.title}</title>
        <meta
          name="description"
          content="Интернет-магазин &amp;laquo;Русская леди&amp;raquo; предлагает Вам женскую одежду от 50 до 58 размера российских и белорусских производителей по низким ценам почтой без предоплаты."
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
