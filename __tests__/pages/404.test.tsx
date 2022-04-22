import { render } from "@testing-library/react";
import Page404 from "@/pages/404";

test("renders page 404 unchanged", () => {
  const { container } = render(<Page404 />);
  expect(container).toMatchSnapshot();
});
