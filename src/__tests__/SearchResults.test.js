import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("Search Results", () => {
  const validProps = {
    hasSearched: jest.fn(),
    results: [],
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchResults
        results={validProps.results}
        hasSearched={validProps.hasSearched}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders no results message when there are no results", () => {
    render(<SearchResults results={[]} hasSearched={true} />);
    const noResultsMessage = screen.getByText("No results");
    const anotherSearchMessage = screen.getByText("Please try another search");

    expect(noResultsMessage).toBeInTheDocument();
    expect(anotherSearchMessage).toBeInTheDocument();
  });

  it("renders images when there are results to return", () => {
    const results = [
      "search-image1",
      "search-image2",
      "search-image3",
      "search-image4",
    ];
    render(<SearchResults results={results} hasSearched={true} />);
    const imageResults = screen.queryAllByAltText("spaceImage");
    expect(imageResults.length).toBe(4);
  });
});
