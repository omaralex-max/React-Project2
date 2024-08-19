import React from "react";
import { Link } from "react-router-dom";
import DynamicStar from "./DynamicStar"; 
import CardsCarousel from "./slidercards"; // Import the carousel component
import "@fortawesome/fontawesome-free/css/all.min.css";

const MovieDetails = ({ movie, recommendations }) => {
  const primaryCompany = movie.production_companies[0] || null;

  return (
    <div className="mx-5 mt-5">
      <div className="row">
        {/* Movie Poster */}
        <div className="col-md-4" style={{ width: "350px" }}>
          <img
            style={{ borderRadius: "15px", border: "3px solid black" }}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="img-fluid"
          />
        </div>

        {/* Movie Details */}
        <div className="col-md-8 mx-4">
          <h1>{movie.title}</h1>
          <p className="mb-5" style={{ color: "gray" }}>
            {movie.release_date}
          </p>
          <p className="mb-5">
            <strong>Rating:</strong>
            <DynamicStar rating={movie.vote_average} /> {movie.vote_average}
          </p>
          <p className="mb-3">{movie.overview}</p>
          <p className="mb-3">
            <strong>Run Time: </strong>
            <span
              style={{
                marginLeft: "15px",
                backgroundColor: "#FFE353",
                padding: "5px 10px",
                borderRadius: "15px",
                fontSize: "14px",
              }}
            >
              {movie.runtime} Min
            </span>
          </p>
          <p>
            <strong>Languages:</strong>
            {movie.spoken_languages.map((language) => (
              <span
                key={language.iso_639_1}
                style={{
                  marginLeft: "15px",
                  backgroundColor: "#FFE353",
                  padding: "5px 10px",
                  borderRadius: "15px",
                  fontSize: "14px",
                }}
              >
                {language.name}
              </span>
            ))}
          </p>
          <p>
            <strong>Genres:</strong>
            {movie.genres.map((genre) => (
              <span
                key={genre.id}
                style={{
                  marginRight: "10px",
                  marginLeft: "10px",
                  backgroundColor: "#FFE353",
                  padding: "5px 10px",
                  borderRadius: "25px",
                  cursor: "pointer",
                }}
              >
                {genre.name}
              </span>
            ))}
          </p>
          <div className="d-flex">
            {primaryCompany && (
              <div className="d-flex align-items-center">
                {primaryCompany.logo_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${primaryCompany.logo_path}`}
                    alt={primaryCompany.name}
                    style={{ width: "150px", borderRadius: "3px" }}
                  />
                ) : (
                  <div
                    style={{
                      width: "100px",
                      height: "60px",
                      backgroundColor: "gray",
                      borderRadius: "10px",
                    }}
                  />
                )}
              </div>
            )}
          </div>

          <br />
          <Link to="/">
            <button className="btn btn-outline-warning">Back to Movies</button>
          </Link>
        </div>
      </div>
      <hr />
      <h1>Recommendations</h1>
      {recommendations.length > 0 ? (
        <CardsCarousel recommendations={recommendations} />
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
};

export default MovieDetails;
