import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/header/Header";
import MovieList from "./Components/MovieList/MovieList";
import Pagination from "./Components/Pagination/Pagination";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 6;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=d406d67947f4328b84625ac0a728bd14&page=${currentPage}`
        );
        const data = await response.json();
        setMoviesData(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the movies:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [currentPage]);

  const totalPages = Math.ceil(moviesData.length / moviesPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const currentMovies = moviesData.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  return (
    <div>
      <Navbar />
      <Header />
      <section style={sectionStyle}>
        <h2>Popular Movies</h2>
        {loading ? (
          <p>Loading movies...</p>
        ) : (
          <>
            <MovieList movies={currentMovies} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </section>
    </div>
  );
}

const sectionStyle = {
  padding: "20px",
  backgroundColor: "#f8f9fa",
};

export default App;
