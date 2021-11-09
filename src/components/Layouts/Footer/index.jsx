import React from "react";

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
            <li className="footer__socials-icon">
              <a href="#a" className="footer__socials-link">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="footer__socials-icon">
              <a
                href="https://github.com/KimTanneel/PBL6"
                className="footer__socials-link"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="footer__socials-icon">
              <a href="#a" className="footer__socials-link">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__bot">
          <div className="footer__bot-left">
            <p>
              Copyright © 2020.All Rights Reserved By <a href="#a">PBL6</a>
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
