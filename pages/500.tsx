import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ошибка | {process.env.title}</title>
      </Head>
      <div>
        <h1>Internal Server Error (#500)</h1>
        <p className="alert alert-danger">Внутренняя ошибка сервера.</p>
        <p>
          Пожалуйста, <Link href="/contacts">свяжитесь с нами</Link>.
        </p>
      </div>
    </>
  );
};

export default Page;
