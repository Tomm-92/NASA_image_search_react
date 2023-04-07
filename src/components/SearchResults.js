import React from "react";
import "../styles/searchResults.css";

const SearchResults = ({results}
) => {

  if(!results.length) {
    return <p> No results <br></br><br></br>
    Please try another search </p> 
  } else

  return (
    <>
    <div className="image-gallery">
      {results.map((image) => (
        <img className="return-images" src={image} alt="spaceImage" key={image} />
      ))}
      </div>
    </>

  );
}

export default SearchResults;
