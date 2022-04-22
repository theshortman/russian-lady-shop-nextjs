import { IProductImage } from "@/models/IProductImage";
import ThumbnailItem from "@/components/pages/catalog/[category]/[product]/ThumbnailItem";
import { screen, fireEvent, render } from "@testing-library/react";

describe("<ThumbnailItem />", () => {
  const image: IProductImage = {
    id: 1,
    image_large: "image_large",
    image_medium: "image_medium",
    image_small: "image_small",
  };

  test("image should have class d-none if it is not loaded", () => {
    render(<ThumbnailItem image={image} alt="" setImage={() => null} />);
    const img = screen.getByRole("img");
    expect(img).toHaveClass("d-none");
  });

  test("image should not have class d-none if it is loaded", () => {
    render(<ThumbnailItem image={image} alt="" setImage={() => null} />);
    const img = screen.getByRole("img");
    fireEvent.load(img);
    expect(img).not.toHaveClass("d-none");
  });
});
