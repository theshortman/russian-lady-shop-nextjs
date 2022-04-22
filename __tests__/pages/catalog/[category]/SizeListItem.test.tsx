import { render } from "@testing-library/react";
import SizeListItem from "@/pages/catalog/[category]/SizeListItem";

describe("Category page", () => {
  test("renders SizeListItem unchanged", () => {
    const size = { size: 50, quantity: 1 };

    const { container } = render(<SizeListItem {...size} />);
    expect(container).toMatchSnapshot();
  });
});
