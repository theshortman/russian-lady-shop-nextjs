import type { NextPage } from "next";
import Head from "next/head";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ошибка | {process.env.title}</title>
      </Head>
      <div>
        <h1>Not Found (#404)</h1>
        <p className="alert alert-danger">Страница не найдена.</p>
      </div>
    </>
  );
};

export default Page;
