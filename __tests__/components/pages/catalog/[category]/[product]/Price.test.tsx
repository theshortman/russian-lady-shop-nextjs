import { render } from "@testing-library/react";
import Price from "@/components/pages/catalog/[category]/[product]/Price";

describe("Product page", () => {
  test("renders Price unchanged if discount is 0", () => {
    const { container } = render(
      <Price price={100} newPrice={100} discount={0} />
    );
    expect(container).toMatchSnapshot();
  });

  test("renders Price unchanged if discount is 30", () => {
    const { container } = render(
      <Price price={100} newPrice={70} discount={30} />
    );
    expect(container).toMatchSnapshot();
  });
});
