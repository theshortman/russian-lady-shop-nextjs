import { render } from "@testing-library/react";
import SizeListItem from "@/components/pages/catalog/[category]/[product]/SizeListItem";

describe("Product page", () => {
  test("renders SizeListItem unchanged", () => {
    const size = { size: 50, quantity: 1 };

    const { container } = render(<SizeListItem {...size} />);
    expect(container).toMatchSnapshot();
  });
});
