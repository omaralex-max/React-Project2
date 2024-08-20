import React, { useState, useEffect } from "react";
import Header from "../../Components/header/Header";
import MovieList from "../../Components/MovieList/MovieList";
import Pagination from "../../Components/Pagination/Pagination";

const MoviesPage = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const moviesPerPage = 12;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=d406d67947f4328b84625ac0a728bd14&page=${currentPage}`
        );
        const data = await response.json();
        setMoviesData(data.results || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the movies:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [currentPage]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on new search
  };

  const filteredMovies = moviesData.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentMovies = filteredMovies.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  const currentTheme = document.body.classList.contains("dark-mode") ? "darkmode" : "lightmode";
  const notFoundStyle = {
    fontSize: '50px',
    color: currentTheme === 'darkmode' ? 'white' : 'grey',
    textAlign: 'center',
    marginTop: '20px',
    fontWeight: 'bold',
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <section style={sectionStyle[currentTheme]}>
        <h2>Popular Movies</h2>
        {loading ? (
          <p>Loading movies...</p>
        ): filteredMovies.length === 0 ? (
            <p style={notFoundStyle}>No Movies Found</p>
        ) : (
          <>
            <MovieList movies={currentMovies} />
            {filteredMovies.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </section>
    </div>
  );
};

const sectionStyle = {
  
  lightmode: {
    padding: "20px",
    backgroundColor: "#f8f9fa",
    color:"black",
    
  },
  darkmode: {
    padding: "20px",
    backgroundColor: "black",
    color: "white",
  }
};


export default MoviesPage;
