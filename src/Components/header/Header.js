import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({ onSearch }) {
  const searchInputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const currentTheme = document.body.classList.contains("dark-mode") ? "darkmode" : "lightmode";

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value); 
  };

  const handleSearch = () => {
    const query = searchInputRef.current.value;
    onSearch(query);
    setSearchQuery(''); 
    searchInputRef.current.value = ''; 
  };

  return (
    <header className='headBar' style={headerStyle[currentTheme]}>
      <div style={containerStyle[currentTheme]}>
        <h1>Welcome to our movie app</h1>
        <p>Millions of movies, TV shows, and people to discover. Explore now.</p>
        <div style={searchContainerStyle[currentTheme]}>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleChange}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            style={searchBarStyle[currentTheme]}
          />
          <button onClick={handleSearch} style={searchButtonStyle}>Search</button>
        </div>
      </div>
    </header>
  );
}

const headerStyle = {
  lightmode: {
    backgroundColor: '#f1f1f1',
    padding: '20px',
    color: "black",
  },
  darkmode: {
    backgroundColor: '#333',
    padding: '20px',
    color: 'white',
  }
};

const containerStyle = {
  lightmode: {
    maxWidth: '1200px',
    margin: 'auto',
    textAlign: 'left',
    paddingLeft: '10px',
    backgroundColor: '#f1f1f1',
    color: "black",
  },
  darkmode: {
    maxWidth: '1200px',
    margin: 'auto',
    textAlign: 'left',
    paddingLeft: '10px',
    backgroundColor: '#333',
    color: 'white',
  }
};

const searchContainerStyle = {
  lightmode: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
    backgroundColor: '#f1f1f1',
    color: "black",
  },
  darkmode: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
    backgroundColor: '#333',
    color: 'white',
  }
};

const searchBarStyle = {
  darkmode: {
    flex: '1',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  lightmode: {
    flex: '1',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '10px',
    backgroundColor: 'white',
    color: 'black',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 'bold',
  }
};

const searchButtonStyle = {
  padding: '10px 20px',
  color: '#333',
  backgroundColor: "#ffeb3b",
  border: '1px solid yellow',
  borderRadius: '5px',
  boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
};

export default Header;
