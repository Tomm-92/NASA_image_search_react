import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    setSearchResults: jest.fn(),
  };
  it("renders correctly", () => {
    const { asFragment } = render(
      <Search setSearchResults={validProps.setSearchResults} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the search input", () => {
    render(<Search setSearchResults={validProps.setSearchResults} />);

    const input = screen.getByPlaceholderText("Search for an image...");

    expect(input).toBeInTheDocument();
  });

  it("renders the search button", () => {
    render(<Search setSearchResults={validProps.setSearchResults} />);
    const button = screen.getAllByRole("button");
    expect(button).toHaveLength(1);
    expect(button[0]).toHaveTextContent("Go!");
  });
});
