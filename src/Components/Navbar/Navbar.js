import React from "react";
import { FaHeart } from "react-icons/fa";
import Favorites from "../../pages/Favorites/Favorites";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate=useNavigate()
  const navigateToFavoritesPage=()=>{
    navigate("Favorites")
  }
  return (
    <nav style={navStyle}>
      <div style={leftSectionStyle}>
        <span style={logoStyle}>Movie App</span>
      </div>
      <div style={rightSectionStyle}>
        <span style={languageStyle}>
          En <span style={dropdownArrowStyle}>▼</span>
        </span>
        <div style={watchlistStyle}>
          <FaHeart style={heartIconStyle} onClick={navigateToFavoritesPage} />
          <span onClick={navigateToFavoritesPage} >Watchlist</span>
        </div>
      </div>
    </nav>
  );
}

const navStyle = {
  backgroundColor: "#ffeb3b",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
};

const leftSectionStyle = {
  display: "flex",
  alignItems: "center",
};

const logoStyle = {
  fontWeight: "bold",
  color: "#000",
};

const rightSectionStyle = {
  display: "flex",
  alignItems: "center",
};

const languageStyle = {
  marginRight: "20px",
  color: "#000",
  cursor: "pointer",
};

const dropdownArrowStyle = {
  marginLeft: "5px",
};

const watchlistStyle = {
  display: "flex",
  alignItems: "center",
  color: "#000",
  cursor: "pointer",
};

const heartIconStyle = {
  marginRight: "5px",
  color: "#000",
};

export default Navbar;
