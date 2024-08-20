import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';

function Navbar({ darkMode, setDarkMode }) {
  const [language, setLanguage] = useState("en");
  const navigate = useNavigate();

  const navigateToFavoritesPage = () => {
    navigate("Favorites");
  };

  const navigateToHomePage = () => {
    navigate("/");
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ar" : "en"));
  };

  // Define navStyle dynamically
  const navStyle = {
    backgroundColor: "#ffeb3b",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    direction: language === "en" ? "ltr" : "rtl",
  };

  return (
    <nav style={navStyle}>
      <div style={leftSectionStyle}>
        <span style={logoStyle} onClick={navigateToHomePage}>
          {language === "en" ? "MovieStar" : "موفي ستار"}
        </span>
      </div>
      <div style={rightSectionStyle}>
        <span style={languageStyle} onClick={toggleLanguage}>
          {language === "en" ? "En" : "ع"}
          <span style={dropdownArrowStyle}>▼</span>
        </span>
        <span style={languageStyle} onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={faCircleHalfStroke} />
        </span>
        <div style={watchlistStyle}>
          <FaHeart style={heartIconStyle} onClick={navigateToFavoritesPage} />
          <span onClick={navigateToFavoritesPage}>
            {language === "en" ? "Watchlist" : "قائمة المشاهدة"}
          </span>
        </div>
      </div>
    </nav>
  );
}

const leftSectionStyle = {
  display: "flex",
  alignItems: "center",
};

const logoStyle = {
  fontWeight: "bold",
  color: "#000",
  cursor: "pointer",
  fontSize: "24px",
  fontStyle: "italic",
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
