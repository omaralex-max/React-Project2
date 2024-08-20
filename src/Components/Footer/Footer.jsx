import React from "react";

function Navbar({ darkMode, setDarkMode }) {

  return (
    <nav style={footStyle}>
      <div style={leftSectionStyle}>
        <span style={logoStyle}>&copy; 2024 MovieStar. All rights reserved.</span>
      </div>
    </nav>
  );
}

const footStyle = {
    position: "fixed", // or 'fixed' depending on your use case
    backgroundColor: "#ffeb3b",
    display: "flex",
    bottom: "0%",
    width: "100%", // Ensures the footer spans the full width of the container
    justifyContent: "space-between",
    alignItems: "center",
  };
  

const leftSectionStyle = {
  display: "flex",
  alignItems: "center",
};

const logoStyle = {
  fontWeight: "bold",
  color: "#000",
  cursor: "pointer",
};

export default Navbar;
