import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMovieToList, removeMovieFromList } from "../../Store/Slices/FavoritesSlice.js";
import StarRatings from 'react-star-ratings';
import "./favoritescard.css";

function FavoriteMovieCard({ movie }) {
  const dispatch = useDispatch();
  
  // Get the favorite status directly from Redux state
  const isFavorite = useSelector((state) =>
    state.favList.favList.some((favMovie) => favMovie?.id === movie?.id)
  );

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeMovieFromList(movie.id));
    } else {
      dispatch(addMovieToList(movie));
    }
  };

  return (
    <div style={favoriteCardStyle}>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "default-poster-path.jpg"
        }
        alt={movie.title}
        style={imageStyle}
      />
      <div style={cardContentStyle}>
        <h3 style={titleStyle}>{movie.title}</h3>
        <p style={dateStyle}>{new Date(movie.release_date).toDateString()}</p>
        <StarRatings
          rating={movie.vote_average / 2} // Assuming the API rating is out of 10 and stars are out of 5
          starRatedColor="black"
          starEmptyColor="gray"
          starDimension="20px"
          starSpacing="2px"
          numberOfStars={5}
          name='rating'
        />
        <span style={reviewCountStyle}>
          {movie.vote_count} reviews
        </span>
        <p style={descriptionStyle}>{movie.overview || "No description available."}</p>
        <div style={actionsWrapperStyle}>
          <FaHeart
            style={{
              color: isFavorite ? "#ffeb3b" : "gray",
              fontSize: "35px",
              cursor: "pointer",
            }}
            onClick={handleClick}
          />
          <Link to={`/movie/${movie.id}`} style={linkStyle}>
            <button className="buttonView">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const favoriteCardStyle = {
  width: "47%",
  height: "290px",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  margin: "10px 0",
  display: "flex",
  flexDirection: "row",
};

const imageStyle = {
  width: "40%",
  height: "95%",
  borderRadius: "15px",
};

const cardContentStyle = {
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "60%",
};

const titleStyle = {
  margin: "0 0 5px 0",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#333",
};

const dateStyle = {
  margin: "0 0 5px 0",
  fontSize: "14px",
  color: "#888",
};

const descriptionStyle = {
  fontSize: "14px",
  color: "#666",
  margin: "0 0 10px 0",
  maxHeight: "4.5em",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  whiteSpace: "normal",
};

const actionsWrapperStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "10px",
  gap: "15px",
};

const reviewCountStyle = {
  marginLeft: "10px",
  fontSize: "14px",
  color: "#666",
};

const linkStyle = {
  textDecoration: "none",
};

export default FavoriteMovieCard;
