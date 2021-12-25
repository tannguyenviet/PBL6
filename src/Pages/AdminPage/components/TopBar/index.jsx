import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.scss";

function TopBar(props) {
  return (
    <div className="topbar">
      <h2 className="topbar__title">
        <Link to="/admin">Dashboard</Link>
      </h2>
      <ul className="topbar__nav">
        <li className="topbar__nav-item">
          <i className="far fa-bell"></i>
        </li>
        <li className="topbar__nav-item">
          <i className="fas fa-cog"></i>
        </li>
      </ul>
    </div>
  );
}

export default TopBar;
