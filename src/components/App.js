import React from "react";
import "../styles/App.css";

const SearchBar = () => {
  return (
    <div id="searchbar">
      <input placeholder="Search..." />
      <button>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div id="main">
      <SearchBar />
    </div>
  );
};

export default App;
