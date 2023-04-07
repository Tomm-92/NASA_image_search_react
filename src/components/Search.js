import React, {useState} from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";

const Search = ({setSearchResults}) => {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  }
  
  
  return (
    <>
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Search for an image..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="search-form__submit-button">
        Go!
      </button>
      </form>
    </>
  );
};

export default Search;
