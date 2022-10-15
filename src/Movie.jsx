import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Movie.css";
import IMDB from "./assets/imdb.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const movieImage = "https://image.tmdb.org/t/p/original/";

const Movie = ({ movie }) => {
  return (
    <div key={movie.id} className="movie">
      <img src={`${movieImage}${movie.backdrop_path}`} className="cover" />
      <div className="movie__info">
        <div className="movie__title--info">
          <h4>{movie.original_title || movie.title || movie.original_name}</h4>
          <h6>{movie.first_air_date || movie.release_date}</h6>
          <a href="/" className="imdb">
            <img src={IMDB} alt="" className="imdb__img" />
            {movie.vote_average} rating
          </a>
        </div>
        <div className="movie__buttons">
          <button className="watch__now">Watch now</button>
          <button className="watchlist">
            <FontAwesomeIcon icon="fa-solid fa-plus" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;

/* <div>
<img
src={`${base_url}${movie.poster_path}`}
className="cover"
/>
</div>
<div className="movie__info">
<div className="movie__title--info">
<h4>{movie.original_title}</h4>
<h6>2021</h6>
<a href="/" className="imdb">
  <img src={IMDB} alt="" className="imdb__img" /> 7.9
  rating
</a>
</div>
<div className="movie__buttons">
<button className="watch__now">Watch now</button>
<button className="watchlist">
  <FontAwesomeIcon icon="fa-solid fa-plus" />
</button>
<script src="https://cdn.lordicon.com/pzdvqjsp.js"></script>
</div>
</div> 
*/
