import Link from "next/link";
import { FC } from "react";

const TheCart: FC = () => {
  return (
    <div className="list-group mb-3">
      <Link href="/cart">
        <a className="list-group-item text-reset">
          <div className="list-group-item-heading">
            <span className="text-danger">КОРЗИНА</span>
          </div>

          <div className="list-group-item-text">Пока пусто!</div>
        </a>
      </Link>
    </div>
  );
};

export default TheCart;
