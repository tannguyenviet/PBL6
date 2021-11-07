import React from "react";
import "./SideBar.scss";
import { Link } from "react-router-dom";

import Logo from "../../../../components/Layouts/Logo";

function SideBar(props) {
  const handleNavItemActive = (e) => {
    e.target.closest(".sidebar__nav-item").classList.toggle("active");
  };

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Logo size="small" />
      </div>
      <div className="sidebar__user">
        <span className="sidebar__user-name">Admin</span>
        <span className="sidebar__user-out">
          <i className="fas fa-sign-out-alt"></i>
        </span>
      </div>
      <nav className="sidebar__nav">
        <li className="sidebar__nav-item">
          <Link className="sidebar__nav-link" to="/admin">
            <span>
              <i className="fas fa-home"></i>
            </span>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="sidebar__nav-item">
          <Link className="sidebar__nav-link" to="/admin/movies">
            <span>
              <i className="fas fa-film"></i>
            </span>
            <span>Movies</span>
          </Link>
        </li>
        <li className="sidebar__nav-item">
          <Link className="sidebar__nav-link" to="/admin/showtime">
            <span>
              <i className="far fa-calendar-alt"></i>
            </span>
            <span>Showtime</span>
          </Link>
        </li>
        <li className="sidebar__nav-item">
          <Link className="sidebar__nav-link" to="/admin/theater">
            <span>
              <i className="fas fa-place-of-worship"></i>
            </span>
            <span>Theater</span>
          </Link>
        </li>
        <li className="sidebar__nav-item">
          <Link className="sidebar__nav-link" to="/admin/ticket">
            <span>
              <i className="fas fa-ticket-alt"></i>
            </span>
            <span>Ticket</span>
          </Link>
        </li>
        <li className="sidebar__nav-item" onClick={handleNavItemActive}>
          <div className="sidebar__nav-link">
            <span>
              <i className="fas fa-user-friends"></i>
            </span>
            <span>Users</span>
            <span>
              <i className="fas fa-caret-down"></i>
            </span>
          </div>
          <ul className="sidebar__nav-sublist">
            <li className="sidebar__nav-subitem">
              <Link to="/admin/member">Member</Link>
            </li>
            <li className="sidebar__nav-subitem">
              <Link to="/admin/staff">Staff</Link>
            </li>
          </ul>
        </li>
      </nav>
    </div>
  );
}

export default SideBar;
