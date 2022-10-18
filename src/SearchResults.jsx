import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Result from "./Result";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchResults.css";

const SearchResults = () => {
  const params = useParams();
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState("false");

  function onSearch() {
    setLoading(true);
    setTimeout(() => {
      fetchMovies(searchInput);
    }, 300);
  }

  async function fetchMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?&apikey=b97ff1dd&s=${
        searchInput || params.searchInput
      }`
    );
    setMovies(data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetchMovies(searchInput);
    }, 300);
    fetchMovies();
  }, []);

  return (
    <div>
      <>
        <section id="search">
          <div className="container">
            <h1 className="browse">Browse our movies</h1>
            <div className="search__container">
              <input
                className="search__bar"
                type="text"
                value={searchInput}
                placeholder="Search Movies"
                onChange={(event) => {
                  setSearchInput(event.target.value);
                }}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    onSearch();
                  }
                }}
              />

              <button className="search__btn2" onClick={() => onSearch()}>
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </button>
            </div>
            <h2 className="search__text">
              Search results for: {searchInput || params.searchInput}
            </h2>
            <div className="movies">
              {!loading
                ? movies.Search?.map((movie) => (
                    <Result
                      key={movie.imdbID}
                      id={movie.imdbID}
                      image={movie.Poster}
                      title={movie.Title}
                      year={movie.Year}
                    />
                  )).slice(0, 12)
                : new Array(12).fill(0).map((_, index) => (
                    <div className="movie2" key={index}>
                      <div className="movie__body">
                        <p className="movie__body--skeleton"></p>
                      </div>
                      <div className="movie__title">
                        <div className="movie__title--skeleton"></div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default SearchResults;
