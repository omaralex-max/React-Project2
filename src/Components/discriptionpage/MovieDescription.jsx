import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieDetails from './MovieDetails';

const MovieDescription = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null); // For movie details
  const [recommendations, setRecommendations] = useState([]); // For recommendations
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch movie details
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
      params: {
        api_key: '26c8bc27569c6c650c8f4a2562784179',
        language: 'en-US'
      }
    })
    .then(response => {
      setMovie(response.data);
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    });
  }, [id]);

  // Fetch recommendations
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations`, {
      params: {
        api_key: '26c8bc27569c6c650c8f4a2562784179',
        language: 'en-US'
      }
    })
    .then(response => {
      console.log(response.data); // Log the entire response to check if recommendations are present
      setRecommendations(response.data.results); // Use response.data.results if recommendations are in an array
    })
    .catch(error => {
      setError(error);
    });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!movie) return <div>Movie not found!</div>;

  // Pass both movie details and recommendations to MovieDetails component
  return <MovieDetails movie={movie} recommendations={recommendations} />;
};

export default MovieDescription;
