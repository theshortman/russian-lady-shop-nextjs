import { render } from "@testing-library/react";
import SizeForm from "@/components/pages/catalog/[category]/[product]/SizeForm";

describe("Product page", () => {
  test("renders SizeForm unchanged", () => {
    const { container } = render(<SizeForm sizes={[]} />);
    expect(container).toMatchSnapshot();
  });
});
