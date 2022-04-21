import { FC } from "react";

interface SizeListItemProps {
  size: number;
  quantity: number;
}

const SizeListItem: FC<SizeListItemProps> = ({ size, quantity }) => {
  return (
    <label className="me-2">
      <input className="me-1" type="radio" name="size" value={quantity} />
      {size}
    </label>
  );
};

export default SizeListItem;
