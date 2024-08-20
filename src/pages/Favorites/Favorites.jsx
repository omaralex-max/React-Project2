import React from "react";
import "./Favorites.css"
import noFavoritesIcon from  "../../Components/Assets/Images/icon _heart_.png"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MovieCard from "../../Components/MovieCard/MovieCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import FavoriteMovieCard from "../../Components/FavoritesMovieCard/FavoritesMovieCard";

export default function Favorites()

{
    const navigate=useNavigate()

    const navigateToHomePage=()=>{
        navigate('/')
    }
    const favList = useSelector((store) => store.favList.favList);
    return (
        <>
          <h1 className="fw-bold ms-5 mt-2">Watch List</h1>
          {favList.length === 0 ? (
            <div className="d-flex flex-column justify-content-center align-items-center outerDiv">
              <img src={noFavoritesIcon} alt="No Favorites" />
              <h2 className="mt-5">No Movies in Watch List</h2>
              <button
                className="bg-warning btn backButton mt-3"
                onClick={navigateToHomePage}
              >
                Back To Home
              </button>
            </div>
          ) : (
            <div className="container row row-cols-3 gap-2 justify-content-between mx-5">
              {favList.map((movie, index) => (
                <React.Fragment key={index}>
                  <FavoriteMovieCard movie={movie} />
                </React.Fragment>
              ))}
            </div>
          )}
        </>
      );
    }