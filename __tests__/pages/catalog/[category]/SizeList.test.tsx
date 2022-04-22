import { render } from "@testing-library/react";
import SizeList from "@/pages/catalog/[category]/SizeList";
import { IProductItem } from "@/models/IProductItem";

describe("Category page", () => {
  test("renders SizeList unchanged", () => {
    const size: IProductItem = {
      id: 1,
      size: 50,
      quantity: 1,
    };

    const { container } = render(<SizeList sizes={[size]} />);
    expect(container).toMatchSnapshot();
  });
});