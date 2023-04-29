import React from "react";
import "../styles/searchResults.css";

const SearchResults = ({ hasSearched, results }) => {
  if (!hasSearched) return null;
  if (!results.length) {
    return (
      <div>
        <h3> No results</h3>
        <p> Please try another search </p>
      </div>
    );
  }

  return (
    <div className="image-gallery">
      {results.map((image) => (
        <img
          className="return-images"
          src={image}
          alt="spaceImage"
          key={image}
        />
      ))}
    </div>
  );
};

export default SearchResults;
