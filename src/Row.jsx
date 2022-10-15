import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "axios";
import Movie from "./Movie";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ fetchUrl, title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    console.log(fetchData());
  }, [fetchUrl]);

  return (
    <div id="rows">
      <div className="row__wrapper">
        <div className="row__title">
          <h2>{title}</h2>
          <a href="/">
            See All <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
          </a>
        </div>
        <div className="row__movies">
          <div className="carousel">
            {movies.map((movie) => (
              <Movie movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
