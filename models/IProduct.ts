import { IProductImage } from "@/models/IProductImage";
import { IProductItem } from "@/models/IProductItem";

export interface IProduct {
  id: number;
  name: string;
  slug: string;
  description: string;
  detail: string;
  price: number;
  discount: number;
  new_price: number;
  product_images: IProductImage[];
  product_items: IProductItem[];
}
