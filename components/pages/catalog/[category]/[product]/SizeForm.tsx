import { IProductItem } from "@/models/IProductItem";
import { FC } from "react";
import SizeList from "./SizeList";

interface SizeFormProps {
  sizes: IProductItem[];
}

const SizeForm: FC<SizeFormProps> = ({ sizes }) => {
  return (
    <form className="mb-3" action="" method="post">
      <div className="mb-2">
        <SizeList sizes={sizes} />
      </div>
      <div className="form-group">
        <button type="button" className="btn btn-danger text-white" disabled>
          ДОБАВИТЬ В КОРЗИНУ
        </button>
      </div>
    </form>
  );
};

export default SizeForm;
