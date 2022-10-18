import React, { useEffect, useState, useRef } from "react";
import "./Movie.css";
import IMDB from "./assets/imdb.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const movieImage = "https://image.tmdb.org/t/p/original/";

const Movie = ({ movie }) => {
  const movieDate = movie.first_air_date || movie.release_date;
  const date = movieDate.slice(0, 4);

  const movieTitle = movie.original_title || movie.title || movie.original_name;
  const title = movieTitle.slice(0, 22);

  const movieRating = movie.vote_average;
  const rating = movieRating.toFixed(2);

  return (
    <div key={movie.id} className="movie">
      <img src={`${movieImage}${movie.backdrop_path}`} className="cover" />
      <div className="movie__info">
        <div className="movie__title--info">
          <h4>{title}</h4>
          <h6>{date}</h6>
          <a
            href={`https://www.imdb.com/title/${movie.imdb_id}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="imdb"
          >
            <img src={IMDB} alt="" className="imdb__img" />
            {rating} rating
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
