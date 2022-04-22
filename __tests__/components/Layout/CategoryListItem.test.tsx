import { render } from "@testing-library/react";
import CategoryListItem from "@/components/Layout/CategoryListItem";

test("renders CategoryListItem unchanged", () => {
  const category = { name: "Test category", slug: "test-slug" };

  const { container } = render(<CategoryListItem {...category} />);
  expect(container).toMatchSnapshot();
});
