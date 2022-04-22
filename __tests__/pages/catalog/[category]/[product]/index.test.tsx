import { screen, fireEvent, render } from "@testing-library/react";
import ProductPage from "@/pages/catalog/[category]/[product]";
import { IProduct } from "@/models/IProduct";

describe("Product page", () => {
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

  test("renders product page unchanged", () => {
    const { container } = render(<ProductPage product={product} />);
    expect(container).toMatchSnapshot();
  });

  test("should have src of the main image", () => {
    render(<ProductPage product={product} />);

    const img = screen.getByTestId("product-img");
    expect(img).toHaveAttribute("src", "first-image-large");
  });

  test("should change src of the main image by click", async () => {
    render(<ProductPage product={product} />);
    const thumbnails = await screen.findAllByTestId("thumbnail-img");
    fireEvent.click(thumbnails[1]);

    const img = screen.getByTestId("product-img");
    expect(img).toHaveAttribute("src", "second-image-large");
  });
});
