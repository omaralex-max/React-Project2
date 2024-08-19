import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
    <h2>{movie.title}</h2>
    <Link to={`/movie/${movie.id}`}>
      <button>View Details</button>
    </Link>
  </div>
);

export default MovieCard;
