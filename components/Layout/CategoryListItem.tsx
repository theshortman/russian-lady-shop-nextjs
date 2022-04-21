import { FC } from "react";
import Link from "next/link";

interface CategoryListItemProps {
  name: string;
  slug: string;
}

const CategoryListItem: FC<CategoryListItemProps> = ({ name, slug }) => {
  return (
    <Link href={`/catalog/${slug}`}>
      <a className="list-group-item list-group-item-action" aria-current="page">
        {name}
      </a>
    </Link>
  );
};

export default CategoryListItem;
