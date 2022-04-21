import { FC } from "react";

interface DiscountProps {
  value: number;
}

const Discount: FC<DiscountProps> = ({ value }) => {
  return <div className="badge bg-danger">-{value}%</div>;
};

export default Discount;
