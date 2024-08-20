import React from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const currentTheme = document.body.classList.contains("dark-mode") ? "darkmode" : "lightmode";

  return (
    <div style={paginationContainerStyle[currentTheme]}>
      <button
        style={{
          ...buttonStyle,
          ...leftButtonStyle,
          ...(currentPage === 1 && disabledButtonStyle),
        }}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <span style={pageInfoStyle}>
        {currentPage} / {totalPages}
      </span>
      <button
        style={{
          ...buttonStyle,
          ...rightButtonStyle,
          ...(currentPage === totalPages && disabledButtonStyle),
        }}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
}

const paginationContainerStyle = {
  lightmode: {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  backgroundColor: "white",
  },
  darkmode: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "black",
  }
};

const buttonStyle = {
  backgroundColor: "#ffeb3b",
  color: "#1e2533",
  border: "none",
  padding: "10px 15px",
  borderRadius: "5px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "16px",
  margin: "0 5px",
  transition: "background-color 0.3s ease",
};

const leftButtonStyle = {
  borderTopLeftRadius: "20px",
  borderBottomLeftRadius: "20px",
};

const rightButtonStyle = {
  borderTopRightRadius: "20px",
  borderBottomRightRadius: "20px",
};

const disabledButtonStyle = {
  backgroundColor: "#b3b3b3",
  cursor: "not-allowed",
};

const pageInfoStyle = {
  color: "#ffeb3b",
  fontWeight: "bold",
  fontSize: "16px",
  margin: "0 10px",
};

export default Pagination;
