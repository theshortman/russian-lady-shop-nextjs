import { render } from "@testing-library/react";
import CategoryPage from "@/components/pages/catalog/[category]/CategoryPage";
import { ICategory } from "@/models/ICategory";
import { IProduct } from "@/models/IProduct";

describe("Category page", () => {
  const product: IProduct = {
    id: 1,
    name: "Test product name",
    slug: "test-product-slug",
    description: "Test product description",
    detail: "test product detail",
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

  const category: ICategory = {
    id: 4,
    name: "Test category name",
    description: "Test category description",
    slug: "test-category-slug",
    products: [],
    prev_page_number: null,
    next_page_number: null,
  };

  beforeEach(() => {
    category.products = [];
    category.prev_page_number = null;
    category.next_page_number = null;
  });

  test("renders CategoryPage unchanged if products do not exist", () => {
    const { container } = render(<CategoryPage category={category} />);
    expect(container).toMatchSnapshot();
  });

  test("renders CategoryPage unchanged if products exist", () => {
    category.products.push(product);
    const { container } = render(<CategoryPage category={category} />);
    expect(container).toMatchSnapshot();
  });

  test("renders CategoryPage unchanged if there is a prev page", () => {
    category.prev_page_number = 1;
    const { container } = render(<CategoryPage category={category} />);
    expect(container).toMatchSnapshot();
  });

  test("renders CategoryPage unchanged if there is a next page", () => {
    category.next_page_number = 2;
    const { container } = render(<CategoryPage category={category} />);
    expect(container).toMatchSnapshot();
  });

  test("renders CategoryPage unchanged if there is a prev and next page", () => {
    category.next_page_number = 1;
    category.next_page_number = 2;
    const { container } = render(<CategoryPage category={category} />);
    expect(container).toMatchSnapshot();
  });
});
