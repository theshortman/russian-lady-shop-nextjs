import { render } from "@testing-library/react";
import ContactsPage from "@/pages/contacts";

test("renders contacts page unchanged", () => {
  const { container } = render(<ContactsPage />);
  expect(container).toMatchSnapshot();
});
