import { FC } from "react";

interface SizeListItemProps {
  size: number;
}

const SizeListItem: FC<SizeListItemProps> = ({ size }) => {
  return <span className="badge bg-secondary me-1">{size}</span>;
};

export default SizeListItem;
