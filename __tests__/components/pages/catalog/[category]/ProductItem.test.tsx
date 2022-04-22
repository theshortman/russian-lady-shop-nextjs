import { render } from "@testing-library/react";
import ProductItem from "@/components/pages/catalog/[category]/ProductItem";
import { IProduct } from "@/models/IProduct";

describe("Category page", () => {
  test("renders ProductItem unchanged", () => {
    const product: IProduct = {
      id: 1,
      name: "Test name",
      slug: "test-slug",
      description: "Test description",
      detail: "test detail",
      price: 1000,
      discount: 10,
      new_price: 900,
      product_images: [
        {
          id: 1,
          image_large: "first-image-large",
          image_medium: "first-image-medium",
          image_small: "first-image-small",
        },
        {
          id: 2,
          image_large: "second-image-large",
          image_medium: "second-image-medium",
          image_small: "second-image-small",
        },
      ],
      product_items: [
        {
          id: 1,
          size: 50,
          quantity: 1,
        },
      ],
    };

    const { container } = render(
      <ProductItem product={product} categorySlug="test-slug" />
    );
    expect(container).toMatchSnapshot();
  });
});
