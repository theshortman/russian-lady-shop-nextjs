import { render } from "@testing-library/react";
import ImagePlaceholder from "@/components/ImagePlaceholder";

test("renders ImagePlaceholder unchanged", () => {
  const { container } = render(<ImagePlaceholder text="Test" />);
  expect(container).toMatchSnapshot();
});
