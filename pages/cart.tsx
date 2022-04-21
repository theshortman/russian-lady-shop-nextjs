import type { NextPage } from "next";
import Head from "next/head";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Корзина | {process.env.title}</title>
      </Head>
      <h1>Корзина</h1>

      <p>Пока пусто!</p>
    </>
  );
};

export default Page;
