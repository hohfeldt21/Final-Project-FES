import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./MoviePage.css";

const MoviePage = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState("false");

  const imdbLink = `https://www.imdb.com/title/${movieData.imdbID}`;

  async function fetchMovieData() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?&apikey=b97ff1dd&i=${id}`
    );
    setMovieData(data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchMovieData();
    }, 200);
  }, []);

  return (
    <div>
      {!loading ? (
        <div className="movieInfo__container">
          <div className="arrowBack__Icon">
            <FontAwesomeIcon
              onClick={() => navigate(`/search/${movieData.Title} `)}
              icon="fa-solid fa-arrow-left"
              className="icon__back"
            />
          </div>
          <div className="movieInfo__wrapper">
            <div>
              <img
                src={movieData.Poster}
                className="movieInfo__poster"
                alt=""
              />
            </div>
            <div className="movieInfo__data">
              <h1 className="movieInfo__data--title">{movieData.Title}</h1>
              <div className="movieInfo__data--para">
                <p>
                  <span className="movieInfo__data--descriptors">Year:</span>{" "}
                  {movieData.Year}
                </p>
                <p>
                  <span className="movieInfo__data--descriptors">Length:</span>{" "}
                  {movieData.Runtime}
                </p>
                <p>
                  <span className="movieInfo__data--descriptors">Actors:</span>{" "}
                  {movieData.Actors}
                </p>
                <p>
                  <span className="movieInfo__data--descriptors">Genre:</span>{" "}
                  {movieData.Genre}
                </p>
                <p>
                  <span className="movieInfo__data--descriptors">
                    IMDB Rating:
                  </span>{" "}
                  {movieData.imdbRating}
                </p>
                <p>
                  <span className="movieInfo__data--descriptors">
                    IMDB Link:
                  </span>{" "}
                  <a href={movieData.imdbLink} target="_blank">
                    {imdbLink}
                  </a>
                </p>
                <p>
                  <span className="movieInfo__data--descriptors">
                    Languages:
                  </span>{" "}
                  {movieData.Language}
                </p>
                <p>
                  <span className="movieInfo__data--descriptors">Plot:</span>{" "}
                  <div className="movieInfo__data--plot">{movieData.Plot}</div>
                </p>
                <div className="buttons">
                  <button className="watch__now">Watch Trailer</button>
                  <button className="watchlist">
                    <FontAwesomeIcon icon="fa-solid fa-plus" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        new Array(1).fill(0).map((_, index) => (
          <div className="movieInfo__wrapper" key={index}>
            <div className="movieInfo__body">
              <p className="movieInfo__body--skeleton"></p>
            </div>
            <div className="movieInfo__data--wrapper">
              <div className="movieInfo__title--top">
                <div className="movieInfo__title--skeleton--top"></div>
              </div>
              <div className="movieInfo__title">
                <div className="movieInfo__title--skeleton"></div>
              </div>
              <div className="movieInfo__title">
                <div className="movieInfo__title--skeleton"></div>
              </div>
              <div className="movieInfo__title">
                <div className="movieInfo__title--skeleton"></div>
              </div>
              <div className="movieInfo__title">
                <div className="movieInfo__title--skeleton"></div>
              </div>
              <div className="movieInfo__title">
                <div className="movieInfo__title--skeleton"></div>
              </div>
              <div className="movieInfo__title">
                <div className="movieInfo__title--skeleton"></div>
              </div>
              <div className="movieInfo__title--bottom">
                <div className="movieInfo__title--skeleton--bottom"></div>
              </div>
            </div>
          </div>
        ))
      )}
      <div className="suggested__row">
        <div className="suggested__title">
          <h2>Suggested Movies</h2>
        </div>
        <div className="movie__row">
          <div className="movie__item--skeleton"></div>
          <div className="movie__item--skeleton"></div>
          <div className="movie__item--skeleton"></div>
          <div className="movie__item--skeleton"></div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
