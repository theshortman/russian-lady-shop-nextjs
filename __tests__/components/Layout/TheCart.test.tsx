import { render } from "@testing-library/react";
import TheCart from "@/components/Layout/TheCart";

test("renders TheCart unchanged", () => {
  const { container } = render(<TheCart />);
  expect(container).toMatchSnapshot();
});
