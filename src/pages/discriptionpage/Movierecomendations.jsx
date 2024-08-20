// CardsCarousel.js
import React from "react";
import PropTypes from "prop-types";

const CardsCarousel = ({ recommendations }) => {
  if (!recommendations || !Array.isArray(recommendations)) {
    return <p>No recommendations available.</p>;
  }

  return (
    <div className="carousel">
      {recommendations.map((item) => (
        <div key={item.id} className="carousel-item">
          <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};

CardsCarousel.propTypes = {
  recommendations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default CardsCarousel;
