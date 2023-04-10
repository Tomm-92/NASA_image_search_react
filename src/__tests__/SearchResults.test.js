import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("Search Results", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<SearchResults results={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders with results", () => {
    const results = ["search-image1", "search-image2", "search-image3"];
    const { asFragment } = render(<SearchResults results={results} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("renders no results message when there are no results", () => {
    render(<SearchResults results={[]} hasSearched={true} />);
    const noResultsMessage = screen.getByText(
      "No results" && "Please try another search"
    );
    expect(noResultsMessage).toBeInTheDocument();
  });
  it("renders images when there are results to return", () => {
    const results = [
      "search-image1",
      "search-image2",
      "search-image3",
      "search-image4]",
    ];
    const hasSearched = true;
    render(<SearchResults results={results} hasSearched={hasSearched} />);
    const imageResults = screen.queryAllByAltText("spaceImage");
    expect(imageResults.length).toBe(4);
  });
});

//2 snapshots - one with results as [], one with array as strings
//set up as sperate tests, next.js
