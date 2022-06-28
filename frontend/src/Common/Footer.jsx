import React from "react";
import { Link } from "react-router-dom";
import "./SCSS/Footer.scss";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="webFooter">
      <div className="logo">
        <Link to="/" className="link">
          <h1>Plogging Island</h1>
        </Link>
      </div>
      <a href="https://lab.ssafy.com/s05-final/S05P31C204">
        <p>(c) {currentYear} PI Team GitLab</p>
      </a>
    </footer>
  );
};

export default Footer;
