import Pagination from "@/components/Pagination";
import { render, screen } from "@testing-library/react";

describe("<Pagination />", () => {
  test("renders correctly if links are not null", () => {
    const { container } = render(
      <Pagination
        prevPageLink="/test-prev-link"
        nextPageLink="/test-next-link"
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("prev link should not be in the document if it is null", () => {
    render(<Pagination prevPageLink={null} nextPageLink={null} />);
    expect(screen.queryByText("Пред.")).not.toBeInTheDocument();
  });

  test("next link should not be in the document if it is null", () => {
    render(<Pagination prevPageLink={null} nextPageLink={null} />);
    expect(screen.queryByText("След.")).not.toBeInTheDocument();
  });
});
