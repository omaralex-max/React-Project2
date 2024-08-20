import React from "react";
import MovieCard from "../../Components/MovieCard/MovieCard";

function MovieList({ movies }) {
  return (
    <div style={listStyle}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

const listStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

export default MovieList;
