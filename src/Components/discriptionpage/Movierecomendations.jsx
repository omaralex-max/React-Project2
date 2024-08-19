import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieDetails from './MovieDetails';

const MovieDescription = () => {
  const { id } = useParams();
  const [recomendation, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations`, {
      params: {
        api_key: '26c8bc27569c6c650c8f4a2562784179',
        language: 'en-US'
      }
    })
    .then(response => {
      console.log(response.data); // Log the entire response to check if recommendations are present
      setMovie(response.data.results); // Use response.data.results if recommendations are in an array
      setLoading(false);
    })
    .catch(error => {
      setError(error);
      setLoading(false);
    });
  }, [id]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!recomendation) return <div>Recomendations not found!</div>;

  return <MovieDetails movie={recomendation} />;
};

export default MovieDescription;
