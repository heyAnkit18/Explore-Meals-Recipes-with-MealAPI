import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for a meal..." />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
