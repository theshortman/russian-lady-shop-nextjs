import { ICategory } from "@/models/ICategory";
import type { NextPage } from "next";
import Head from "next/head";
import ProductItem from "./ProductItem";
import Pagination from "@/components/Pagination";

interface CategoryPageProps {
  category: ICategory;
}

const generatePageUrl = (categorySlug: string, page: number): string | null =>
  page ? `/catalog/${categorySlug}/page/${page}` : null;

const CategoryPage: NextPage<CategoryPageProps> = ({ category }) => {
  return (
    <>
      <Head>
        <title>
          {category.name} | {process.env.title}
        </title>
        <meta name="description" content={category.description} />
      </Head>
      <div>
        <h1>{category.name}</h1>
        <div className="row">
          {category.products.length ? (
            category.products.map((prod) => (
              <ProductItem
                categorySlug={category.slug}
                key={prod.id}
                product={prod}
              />
            ))
          ) : (
            <p>Ничего не найдено</p>
          )}
        </div>
        {(category.prev_page_number || category.next_page_number) && (
          <Pagination
            prevPageLink={generatePageUrl(
              category.slug,
              category.prev_page_number
            )}
            nextPageLink={generatePageUrl(
              category.slug,
              category.next_page_number
            )}
          />
        )}
      </div>
    </>
  );
};

export default CategoryPage;
