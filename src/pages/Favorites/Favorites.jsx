import React from "react";
import "./Favorites.css"
import noFavoritesIcon from  "../../Components/Assets/Images/icon _heart_.png"
import { useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Favorites()

{
    const navigate=useNavigate()

    const navigateToHomePage=()=>{
        navigate('/')
    }
return(
            // const url = `https://api.themoviedb.org/3/movie/popular?api_key=${9ba056af7bf707b59bc49c2764a60f44}&language=en-US&page=1`;

        <>
        <h1 className="fw-bold ms-5 mt-2"> Watch List</h1>
        <div className="d-flex flex-column justify-content-center align-items-center outerDiv">
        <img src={noFavoritesIcon}></img>
        <h2 className=" mt-5">No Movies in Watch List</h2>
        <button className="bg-warning btn backButton mt-3" onClick={navigateToHomePage}>Back To Home</button>


        </div>
        
        </>
    )
}