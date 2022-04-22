import { render } from "@testing-library/react";
import SizeChartPage from "@/pages/size-chart";

test("renders size chart page unchanged", () => {
  const { container } = render(<SizeChartPage />);
  expect(container).toMatchSnapshot();
});
