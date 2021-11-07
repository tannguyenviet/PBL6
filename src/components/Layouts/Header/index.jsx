import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Context from "../../../Context/Context";
import Logo from "../../Layouts/Logo";
import "./Header.scss";

function Header(props) {
  //Context
  const context = useContext(Context);

  //States
  const { active } = props;
  const userInfo = JSON.parse(localStorage.getItem("user_info"));

  //Functions
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("user_info");
    context.setLogined(false);
  };

  return (
    <header className={`header ${active}`}>
      <div className="container header__container">
        <Logo />
        <nav className="menu">
          <li className="menu__item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu__item">
            <a href="#a">
              Movies <i className="fas fa-caret-down"></i>
            </a>
            <ul className="menu__sub">
              <li className="menu__sub-item">
                <Link to="/movie/list">Now Playing</Link>
              </li>
              <li className="menu__sub-item">
                <Link to="/movie/list">Comming soon</Link>
              </li>
              <li className="menu__sub-item">
                <Link to="/ticket">Buy Ticket</Link>
              </li>
            </ul>
          </li>
          <li className="menu__item">
            <a href="#a">Contact</a>
          </li>
          <li className="menu__item">
            <a href="#a">About</a>
          </li>
          {userInfo ? (
            <li className="menu__item user__info">
              <a href="#a">{userInfo.name}</a>
              <ul className="menu__sub">
                <li className="menu__sub-item">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="menu__sub-item">
                  <a href="#a" onClick={handleLogOut}>
                    Log out
                  </a>
                </li>
              </ul>
            </li>
          ) : (
            <li className="menu__item btn-login">
              <Link to="/login">Join us</Link>
            </li>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
