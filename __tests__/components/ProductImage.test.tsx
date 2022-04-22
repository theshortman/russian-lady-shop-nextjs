import ProductImage from "@/components/ProductImage";
import { screen, fireEvent, render } from "@testing-library/react";

describe("<ProductImage />", () => {
  test("should show placeholder if image does not exist", () => {
    render(<ProductImage src="" alt="" />);

    expect(screen.getByText("No Photo")).toBeInTheDocument();
    expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    expect(screen.queryByTestId("product-img")).not.toBeInTheDocument();
  });

  test("should show loader when image is loading", () => {
    render(<ProductImage src="test-src" alt="" />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/no photo/i)).not.toBeInTheDocument();
    expect(screen.queryByTestId("product-img")).toHaveClass("d-none");
  });

  test("should show error placeholder when error has occurred", () => {
    render(<ProductImage src="test-src" alt="" />);

    const img = screen.getByTestId("product-img");
    fireEvent.error(img);

    expect(screen.getByText("Error")).toBeInTheDocument();
    expect(screen.queryByText(/no photo/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    expect(img).toHaveClass("d-none");
  });

  test("should show image if it is loaded", () => {
    render(<ProductImage src="test-src" alt="" />);

    const img = screen.getByTestId("product-img");
    fireEvent.load(img);

    expect(img).not.toHaveClass("d-none");
    expect(screen.queryByText(/error/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/no photo/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  });
});
