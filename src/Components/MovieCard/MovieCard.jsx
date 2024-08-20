import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMovieToList, removeMovieFromList } from "../../Store/Slices/FavoritesSlice.js";

function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => 
    state.favList.favList.some((favMovie) => favMovie?.id === movie?.id)
  );
  const [isFavoriteLocal, setIsFavoriteLocal] = useState(isFavorite);

  useEffect(() => {
    setIsFavoriteLocal(isFavorite);
  }, [isFavorite]);

  const handleClick = () => {
    setIsFavoriteLocal((prev) => {
      const newFavoriteStatus = !prev;
      if (newFavoriteStatus) {
        dispatch(addMovieToList(movie));
      } else {
        dispatch(removeMovieFromList(movie.id));
      }
      return newFavoriteStatus;
    });
  };

  const currentTheme = document.body.classList.contains("dark-mode") ? "darkmode" : "lightmode";
  
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
    <div style={cardStyle[currentTheme]}>
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
          <span>{rating}</span>
        </div>
      </div>
      <div style={cardContentStyle}>
        <h3 style={titleStyle}>{movie.title}</h3>
        <p style={dateStyle}>{new Date(movie.release_date).toDateString()}</p>
        <div style={favoriteWrapperStyle}>
          <FaHeart
            style={{
              color: isFavoriteLocal ? "#ffeb3b" : "gray",
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={handleClick}
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
  lightmode: {

    border:"1px solid white",
    color:"black",
    width: "200px",
    backgroundColor: "white",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "10px",
    textAlign: "center",
    position: "relative",
  },
  darkmode: {
    width: "200px",
    backgroundColor: "#333",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "10px",
    textAlign: "center",
    position: "relative",
    color: "white",
  },
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
  height: "50px",
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
