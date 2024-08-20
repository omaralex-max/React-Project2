import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieDetails from './MovieDetails';

const MovieDescription = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: {
            api_key: '26c8bc27569c6c650c8f4a2562784179',
            language: 'en-US'
          }
        });
        setMovie(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations`, {
          params: {
            api_key: '26c8bc27569c6c650c8f4a2562784179',
            language: 'en-US'
          }
        });
        setRecommendations(response.data.results);
      } catch (error) {
        setError(error);
      }
    };

    fetchMovieDetails();
    fetchRecommendations();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!movie) return <div>Movie not found!</div>;

  return <MovieDetails movie={movie} recommendations={recommendations} />;
};

export default MovieDescription;
