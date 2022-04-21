import Discount from "@/components/Discount";
import { FC } from "react";

interface PriceProps {
  price: number;
  newPrice: number;
  discount: number;
}

const Price: FC<PriceProps> = ({ price, newPrice, discount }) => {
  return (
    <div>
      <span className="me-1 badge bg-success">
        {price > newPrice ? newPrice : price}
        RUB
      </span>
      {discount > 0 && <Discount value={discount} />}
    </div>
  );
};

export default Price;
