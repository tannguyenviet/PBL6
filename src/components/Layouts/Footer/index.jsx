import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../Layouts/Logo";
import "./Footer.scss";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <div className="logo">
            <Logo />
          </div>
          <ul className="footer__socials">
            {/* <li className="footer__socials-icon">
              <a href="#a" className="footer__socials-link">
                <i className="fab fa-facebook-f" />
              </a>
            </li> */}
            <li className="footer__socials-icon">
              <a
                href="https://github.com/KimTanneel/PBL6"
                className="footer__socials-link"
              >
                <i className="fab fa-github" />
              </a>
            </li>
            <li className="footer__socials-icon">
              <a
                href="https://trello.com/b/8kRzsr2U/movie-theater"
                className="footer__socials-link"
              >
                <i className="fab fa-trello" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__bot">
          <div className="footer__bot-left">
            <p>
              Copyright © 2020.All Rights Reserved By <Link to="/">STMT</Link>
            </p>
          </div>
          <div className="footer__bot-right">
            <ul className="footer__bot-links">
              <li className="footer__bot-link">
                <a href="#a">About</a>
              </li>
              <li className="footer__bot-link">
                <a href="#a">Term Of Use</a>
              </li>
              <li className="footer__bot-link">
                <a href="#a">Privacy Policy</a>
              </li>
              <li className="footer__bot-link">
                <a href="#a">FAQ</a>
              </li>
              <li className="footer__bot-link">
                <a href="#a">Feedback</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
