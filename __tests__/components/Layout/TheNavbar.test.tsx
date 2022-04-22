import { render } from "@testing-library/react";
import TheNavbar from "@/components/Layout/TheNavbar";

test("renders TheNavbar unchanged", () => {
  const { container } = render(<TheNavbar />);
  expect(container).toMatchSnapshot();
});
