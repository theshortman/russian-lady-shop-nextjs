import { IProduct } from "@/models/IProduct";
import { FC } from "react";
import Link from "next/link";
import Price from "./Price";
import ProductImage from "@/components/ProductImage";
import SizeList from "./SizeList";

interface ProductItemProps {
  product: IProduct;
  categorySlug: string;
}

const ProductItem: FC<ProductItemProps> = ({ product, categorySlug }) => {
  return (
    <div className="col-sm-6 col-md-6 col-lg-4 mb-3">
      <div className="row">
        <div className="col-7 col-sm-8 col-md-8">
          <Link href={`/catalog/${categorySlug}/${product.slug}`}>
            <a>
              <ProductImage
                src={product.product_images[0]?.image_medium}
                alt={product.name}
              />
            </a>
          </Link>
        </div>
        <div className="col-5 col-sm-4 col-md-4 ps-0">
          <div className="mb-1">
            <Price
              price={product.price}
              newPrice={product.new_price}
              discount={product.discount}
            />
          </div>

          <div className="mb-2">
            <SizeList sizes={product.product_items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
