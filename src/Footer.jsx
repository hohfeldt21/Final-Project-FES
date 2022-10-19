import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div>
        <hr className="solid" />
      </div>
      <footer className="footer">
        <ul className="footer__links">
          <li className="footer__link">Home</li>
          <li className="footer__link">About</li>
          <li className="footer__link">Contact</li>
        </ul>
        <h3 className="footer__title">Final Project FES</h3>
      </footer>
    </div>
  );
};

export default Footer;
