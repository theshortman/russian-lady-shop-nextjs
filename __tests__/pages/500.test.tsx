import { render } from "@testing-library/react";
import Page500 from "@/pages/500";

test("renders page 500 unchanged", () => {
  const { container } = render(<Page500 />);
  expect(container).toMatchSnapshot();
});
