import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "axios";
import Movie from "./Movie";

const Row = ({ fetchUrl, title }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState("false");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    setLoading(false);
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
            {!loading ? (
              <>
                {movies.map((movie) => (
                  <Movie movie={movie} key={movie.id} />
                ))}
              </>
            ) : (
              new Array(12).fill(0).map((_, index) => (
                <div className="home__movie" key={index}>
                  <div className="c">
                    <div className="cover--skeleton"></div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;
