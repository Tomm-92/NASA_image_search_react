import React, { useState } from "react";
import "../styles/app.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const imageSearch = (searchTerm) => {
    setSearchResults(searchTerm);
    setHasSearched(true);
  };

  return (
    <div className="app">
      <img
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasa logo"
        className="logo"
      />
      <Search setSearchResults={imageSearch} />
      <SearchResults results={searchResults} hasSearched={hasSearched} />
    </div>
  );
};

export default App;
