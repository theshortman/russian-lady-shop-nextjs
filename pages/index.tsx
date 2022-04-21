import ProductItem from "./catalog/[category]/ProductItem";
import { ICategory } from "@/models/ICategory";
import type { GetServerSideProps, NextPage } from "next";

interface PageProps {
  category: ICategory;
}

const Page: NextPage<PageProps> = ({ category }) => {
  return (
    <div className="row">
      {category.products.map((prod) => (
        <ProductItem
          categorySlug={category.slug}
          key={prod.id}
          product={prod}
        />
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/categories/belorusskie-platya/products/`
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
