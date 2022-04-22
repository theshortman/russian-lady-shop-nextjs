import { render } from "@testing-library/react";
import Discount from "@/components/Discount";

test("renders Discount unchanged", () => {
  const { container } = render(<Discount value={30} />);
  expect(container).toMatchSnapshot();
});
