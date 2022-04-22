import type { NextPage } from "next";
import { ICategory } from "@/models/ICategory";
import { GetServerSideProps } from "next";
import CategoryPage from "@/components/pages/catalog/[category]/CategoryPage";

interface PageProps {
  category: ICategory;
}

const Page: NextPage<PageProps> = ({ category }) => {
  return <CategoryPage category={category} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/categories/${params?.category}/products/?page=${params?.id}`
  );

  const data = await res.json();

  if (!data.category)
    return {
      notFound: true,
    };

  const { category } = data;
  return { props: { category } };
};

export default Page;
