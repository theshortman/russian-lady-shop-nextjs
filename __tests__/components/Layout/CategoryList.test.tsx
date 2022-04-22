import { render } from "@testing-library/react";
import CategoryList from "@/components/Layout/CategoryList";
import { ICategory } from "@/models/ICategory";

test("renders CategoryList unchanged", () => {
  const category: ICategory = {
    id: 1,
    name: "Test category",
    description: "Test description",
    slug: "test-slug",
    products: [],
    prev_page_number: 1,
    next_page_number: 2,
  };

  const { container } = render(<CategoryList categories={[category]} />);
  expect(container).toMatchSnapshot();
});
