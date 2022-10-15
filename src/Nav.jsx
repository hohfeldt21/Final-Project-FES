import React from "react";
import "./Nav.css";
import Avatar from "./assets/Avatar-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <div>
      <nav>
        <div className="nav__content--wrapper">
          <ul>
            <li className="nav__item">
              <a href="/">Home</a>
            </li>
            <li className="nav__item">
              <a href="/">Explore</a>
            </li>
            <li className="nav__item">
              <a href="/">Movies</a>
            </li>
            <li className="nav__item">
              <a href="/">TV Shows</a>
            </li>
            <li className="nav__item">
              <a href="/" className="icon">
                <FontAwesomeIcon icon="fa-solid fa-bell" />
              </a>
            </li>
            <div className="avatar__info">
              <img className="avatar" src={Avatar} />
              <div className="avatar__title">
                <h3>Brendan Hohfeldt</h3>
                <h4>hohfeldt@gmail.com</h4>
              </div>
              <div className="dropdown">
                <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
              </div>
            </div>
          </ul>
          <div>
            <hr className="solid" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
