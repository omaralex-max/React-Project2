import React from 'react';
import { Carousel } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function CardsCarousel({ recommendations }) {
  const getCardsPerSlide = () => {
    if (window.innerWidth >= 1200) {
      return 7;
    } else if (window.innerWidth >= 992) {
      return 5;
    } else if (window.innerWidth >= 768) {
      return 3;
    } else {
      return 1;
    }
  };

  const cardsPerSlide = getCardsPerSlide();
  const groupedRecommendations = [];
  
  for (let i = 0; i < recommendations.length; i += cardsPerSlide) {
    groupedRecommendations.push(recommendations.slice(i, i + cardsPerSlide));
  }

  return (
    <Carousel>
      {groupedRecommendations.map((group, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-around flex-wrap">
            {group.map((movie) => (
              <Card
                key={movie.id}
                border="white"
                style={{ width: '16rem', margin: '10px auto' }}
              >
                <Card.Img
                  variant="top"
                  style={{
                    borderRadius:'15px',
                    border: '1px solid black',
                    cursor: 'pointer'
                  }}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
                <Card.Body>
                  <Card.Title style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    marginBottom:'30px',
                    height: '10px'
                  }}>{movie.title}</Card.Title>
                  <Card.Text style={{color:'gray'}}>
                  {movie.release_date}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CardsCarousel;
