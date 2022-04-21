import { IProductItem } from "@/models/IProductItem";
import { FC } from "react";
import SizeListItem from "./SizeListItem";

interface SizeListProps {
  sizes: IProductItem[];
}

const SizeList: FC<SizeListProps> = ({ sizes }) => {
  return (
    <>
      {sizes.map((size) => (
        <SizeListItem key={size.id} {...size} />
      ))}
    </>
  );
};

export default SizeList;
