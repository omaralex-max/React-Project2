import React, { useState, useEffect } from "react";
import { Carousel, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardsCarousel({ recommendations }) {
  const [cardsPerSlide, setCardsPerSlide] = useState(getCardsPerSlide());

  useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(getCardsPerSlide());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getCardsPerSlide() {
    if (window.innerWidth >= 1200) {
      return 7;
    } else if (window.innerWidth >= 992) {
      return 5;
    } else if (window.innerWidth >= 768) {
      return 3;
    } else {
      return 1;
    }
  }

  const groupedRecommendations = [];
  for (let i = 0; i < recommendations.length; i += cardsPerSlide) {
    groupedRecommendations.push(recommendations.slice(i, i + cardsPerSlide));
  }

  //color raiting function
  const getBorderColor = (rating) => {
    if (rating >= 80) return "#00ff00";
    if (rating >= 60) return "yellow";
    if (rating >= 50) return "orange";
    return "red";
  };

  return (
    <Carousel>
      {groupedRecommendations.map((group, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-around flex-wrap">
            {group.map((movie) => {
              // Calculate the rating and border color for each movie
              const rating = Math.round(movie.vote_average * 10);
              const borderColor = getBorderColor(rating);
              const currentTheme = document.body.classList.contains("dark-mode") ? "darkmode" : "lightmode";

              return (
                <Card
                  key={movie.id}
                  border="white"
                  style={cardStyle[currentTheme]}
                >
                  <div
                    style={{
                      position: "absolute",
                      bottom: "90px",
                      border: `5px solid ${borderColor}`,
                      left: "20px",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "#1e2533",
                      color: "#87ceeb",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    <span>{rating}</span>
                  </div>
                  <Card.Img
                    variant="top"
                    style={{
                      borderRadius: "15px",
                      border: "1px solid black",
                      cursor: "pointer",
                    }}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <Card.Body>
                    <Link
                      style={{ textDecoration: "none" , color: "black" }}
                      to={`/movie/${movie.id}`}
                    >
                      <Card.Title
                        style={{
                          fontSize: "16px",
                          fontWeight: "bold",
                          cursor: "pointer",
                          marginBottom: "30px",
                          marginTop: "20px",
                          height: "10px",
                        }}
                      >
                        {movie.title}
                      </Card.Title>{" "}
                    </Link>

                    <Card.Text style={{ color: "gray" }}>
                      {movie.release_date}
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );

}
const cardStyle = {
  lightmode: {
  width: "16rem",
  margin: "10px auto",
  position: "relative",
  backgroundColor: "white",
  color: "black",
  },
  darkmode: {
    width: "16rem",
    margin: "10px auto",
    position: "relative",
    backgroundColor: "#333",
    color: "white",
  }
}
export default CardsCarousel;
