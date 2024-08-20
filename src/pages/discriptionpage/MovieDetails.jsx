// MovieDetails.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieProps from "./movieprops.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addMovieToList, removeMovieFromList } from "../../Store/Slices/FavoritesSlice.js";

const MovieDetails = ({ movie, recommendations }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isFavorite = useSelector((state) =>
    state.favList.favList.some((favMovie) => favMovie?.id === movie?.id)
  );

  const [isFavoriteLocal, setIsFavoriteLocal] = useState(isFavorite);

  useEffect(() => {
    setIsFavoriteLocal(isFavorite);
  }, [isFavorite]);

  const handleFavoriteClick = () => {
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

  const navigateToHomePage = () => navigate("/");

  if (!movie) {
    return <p>Error Loading Data...</p>;
  }

  return (
    <MovieProps
      movie={movie}
      recommendations={recommendations}
      isFavorite={isFavoriteLocal}
      onFavoriteClick={handleFavoriteClick}
      navigateToHomePage={navigateToHomePage}
    />
  );
};

export default MovieDetails;
