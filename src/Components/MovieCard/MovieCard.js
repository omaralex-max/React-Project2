import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div style={cardStyle}>
      <div style={imageWrapperStyle}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "default-poster-path.jpg"
          }
          alt={movie.title}
          style={imageStyle}
        />
        <div style={ratingCircleStyle}>
          <span>{Math.round(movie.vote_average * 10)}</span>
        </div>
      </div>
      <div style={cardContentStyle}>
        <h3 style={titleStyle}>{movie.title}</h3>
        <p style={dateStyle}>{new Date(movie.release_date).toDateString()}</p>
        <div style={favoriteWrapperStyle} onClick={toggleFavorite}>
          <FaHeart
            style={{
              color: isFavorite ? "#ffeb3b" : "gray",
              fontSize: "20px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  width: "180px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  margin: "10px",
  textAlign: "center",
  position: "relative",
};

const imageWrapperStyle = {
  position: "relative",
};

const imageStyle = {
  width: "100%",
  height: "250px",
  objectFit: "cover",
};

const ratingCircleStyle = {
  position: "absolute",
  bottom: "-15px",
  left: "10px",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "#1e2533",
  color: "#87ceeb",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "14px",
};

const cardContentStyle = {
  padding: "10px",
  position: "relative",
};

const titleStyle = {
  margin: "10px 0 5px 0",
  fontSize: "16px",
  color: "#333",
};

const dateStyle = {
  marginBottom: "10px",
  fontSize: "14px",
  color: "#888",
};

const favoriteWrapperStyle = {
  position: "absolute",
  bottom: "10px",
  right: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default MovieCard;
