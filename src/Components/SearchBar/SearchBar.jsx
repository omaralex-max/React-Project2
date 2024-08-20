import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for a movie..."
      value={searchTerm}
      onChange={handleInputChange}
      style={searchBarStyle}
    />
  );
};

const searchBarStyle = {
  padding: '10px',
  margin: '20px 0',
  width: '100%',
  fontSize: '16px',
};

export default SearchBar;