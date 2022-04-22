import { render } from "@testing-library/react";
import CartPage from "@/pages/cart";

test("renders cart page unchanged", () => {
  const { container } = render(<CartPage />);
  expect(container).toMatchSnapshot();
});
