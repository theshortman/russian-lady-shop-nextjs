import { IProduct } from "@/models/IProduct";

export interface ICategory {
  id: number;
  name: string;
  description: string;
  slug: string;
  products: IProduct[];
  prev_page_number: number | null;
  next_page_number: number | null;
}
