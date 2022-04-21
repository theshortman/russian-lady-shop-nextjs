import type { NextPage } from "next";
import Head from "next/head";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Контакты | {process.env.title}</title>
      </Head>
      <h1>Контакты</h1>

      <p>theshortman@protonmail.com</p>
    </>
  );
};

export default Page;
