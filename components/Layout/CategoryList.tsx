import { FC } from "react";
import { ICategory } from "@/models/ICategory";
import CategoryListItem from "@/components/Layout/CategoryListItem";

interface CategoryListProps {
  categories: ICategory[];
}

const CategoryList: FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="list-groupn mb-3">
      {categories?.map((category) => (
        <CategoryListItem key={category.id} {...category} />
      ))}
    </div>
  );
};

export default CategoryList;
