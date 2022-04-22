import { render } from "@testing-library/react";
import ShippingAndPaymentPage from "@/pages/shipping-and-payment";

test("renders shipping and payment page unchanged", () => {
  const { container } = render(<ShippingAndPaymentPage />);
  expect(container).toMatchSnapshot();
});
