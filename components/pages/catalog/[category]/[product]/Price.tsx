import { FC } from "react";
import Discount from "@/components/Discount";

interface PriceProps {
  price: number;
  newPrice: number;
  discount: number;
}

const Price: FC<PriceProps> = ({ price, newPrice, discount }) => {
  if (discount > 0) {
    return (
      <>
        <div className="me-1 badge bg-secondary">{price} RUB</div>
        <Discount value={discount} />
        <div className="fs-5 fw-bold text-success">{newPrice} RUB</div>
        <div className="mb-3">
          Вы экономите{" "}
          <span className="fw-bold text-danger">{price - newPrice} RUB</span>
        </div>
      </>
    );
  }

  return <div className="fs-5 fw-bold text-success">{price} RUB</div>;
};

export default Price;
