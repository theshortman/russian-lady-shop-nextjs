import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { IProduct } from "@/models/IProduct";
import ThumbnailItem from "./ThumbnailItem";
import { IProductImage } from "@/models/IProductImage";
import SizeForm from "./SizeForm";
import Price from "./Price";
import ProductImage from "@/components/ProductImage";

interface PageProps {
  product: IProduct;
}

const Page: NextPage<PageProps> = ({ product }) => {
  const firtsImage = product.product_images.length
    ? product.product_images[0]
    : null;
  const [mainImage, setMainImage] = useState<IProductImage | null>(firtsImage);

  return (
    <>
      <Head>
        <title>
          {product.name} | {process.env.title}
        </title>
        <meta name="description" content={product.description} />
      </Head>
      <div>
        <h1>{product.name}</h1>
        <div className="row">
          <div className="col-sm-6 col-md-5 mb-2">
            <div>
              <ProductImage
                src={mainImage ? mainImage.image_large : null}
                alt={product.name}
              />
              {product.product_images.length > 1 &&
                product.product_images.map((img) => (
                  <ThumbnailItem
                    key={img.id}
                    image={img}
                    alt={product.name}
                    setImage={setMainImage}
                  />
                ))}
            </div>
          </div>
          <div className="col-sm-6 col-md-7">
            <Price
              discount={product.discount}
              price={product.price}
              newPrice={product.new_price}
            />

            <div className="mb-2">
              <strong>Размеры в наличии:</strong>
            </div>
            {product.product_items.length ? (
              <SizeForm sizes={product.product_items} />
            ) : (
              <p className="text-danger">Нет в наличии</p>
            )}
            <p dangerouslySetInnerHTML={{ __html: product.description }} />
            <div dangerouslySetInnerHTML={{ __html: product.detail }} />
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/categories/${params?.category}/products/${params?.product}`
  );

  const product = await res.json();

  if (!product)
    return {
      notFound: true,
    };

  return { props: { product } };
};

export default Page;
