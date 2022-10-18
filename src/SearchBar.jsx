import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import MoviePage from "./MoviePage";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState("false");

  function initialSearch(event) {
    setLoading(true);
    setTimeout(() => {
      navigate(`/search/${userInput}`);
    }, 300);
  }

  const search = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="row">
        <div className="searchtitle">
          <h1 className="main__title">
            America's Best Movie
            <span className="color">Platform</span>
          </h1>
          <h3 className="search__title">Find Your Fav Movies With Us</h3>
        </div>
        <div className="search__container">
          <input
            type="search"
            value={userInput}
            className="search__bar"
            placeholder="Search for a movie!"
            onChange={(event) => {
              setUserInput(event.target.value);
            }}
            onKeyPress={(event) => {
              if (event.key === "Enter" && userInput) {
                initialSearch();
              } else {
                return false;
              }
            }}
          />
          <button
            className="search__btn1 btn__hover"
            type="submit"
            onClick={() => (userInput ? initialSearch() : null)}
          >
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
