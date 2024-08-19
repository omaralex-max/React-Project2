//import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  //color raiting function
  const getBorderColor = (rating) => {
    if (rating >= 80) return "#00ff00"; 
    if (rating >= 60) return "yellow"; 
    if (rating >= 50) return "orange"; 
    return "red"; 
  };
  const rating = Math.round(movie.vote_average * 10);
  const borderColor = getBorderColor(rating);
  const ratingCircleStyle = {
    position: "absolute",
    bottom: "-15px",
    border: `5px solid ${borderColor}`,
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
         <Link to={`/movie/${movie.id}`}>
          <button className="btn btn-outline-warning mb-3">View Details</button>
        </Link>
      </div>
    </div>
  );
}

const cardStyle = {
  width: "200px",
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
  borderRadius: "15px", 
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  marginBottom: "10px",
};


const cardContentStyle = {
  padding: "10px",
  position: "relative",
};

const titleStyle = {
marginTop: "15px",
fontSize: "18px",
height:"50px",
marginBottom: "15px",
};

const dateStyle = {
  marginBottom: "10px",
  fontSize: "14px",
  color: "#888",
};

const favoriteWrapperStyle = {
  position: "absolute",
  bottom: "35px",
  right: "10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default MovieCard;
