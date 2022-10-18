import React from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";

export default function Result({ title, year, id, image }) {
  let navigate = useNavigate();
  return (
    <div className="movie1" onClick={() => navigate(`/${id}`)}>
      <figure className="movie__img--wrapper">
        <img className="movie__img" src={image} alt="" />
      </figure>
      <h3 className="movie__title">
        {title} ({year})
      </h3>
    </div>
  );
}
