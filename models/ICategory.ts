import { IProduct } from "@/models/IProduct";

export interface ICategory {
  id: number;
  name: string;
  description: string;
  slug: string;
  products: IProduct[];
  prev_page_number: number;
  next_page_number: number;
}
