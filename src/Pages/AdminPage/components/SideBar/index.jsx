import React from "react";
import "./SideBar.scss";
import { NavLink } from "react-router-dom";

import Logo from "../../../../components/Layouts/Logo";

function SideBar(props) {
  // const handleNavItemActive = (e) => {
  //   e.target.closest(".sidebar__nav-item").classList.toggle("active");
  // };

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
          <NavLink
            exact
            activeClassName="sidebar__nav-link active"
            className="sidebar__nav-link"
            to="/admin"
          >
            <span>
              <i className="fas fa-home"></i>
            </span>
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li className="sidebar__nav-item">
          <NavLink
            exact
            activeClassName="sidebar__nav-link active"
            className="sidebar__nav-link"
            to="/admin/movies"
          >
            <span>
              <i className="fas fa-film"></i>
            </span>
            <span>Movies</span>
          </NavLink>
        </li>
        <li className="sidebar__nav-item">
          <NavLink
            exact
            activeClassName="sidebar__nav-link active"
            className="sidebar__nav-link"
            to="/admin/showtime"
          >
            <span>
              <i className="far fa-calendar-alt"></i>
            </span>
            <span>Showtime</span>
          </NavLink>
        </li>
        <li className="sidebar__nav-item">
          <NavLink
            exact
            activeClassName="sidebar__nav-link active"
            className="sidebar__nav-link"
            to="/admin/theater"
          >
            <span>
              <i className="fas fa-place-of-worship"></i>
            </span>
            <span>Theater</span>
          </NavLink>
        </li>
        <li className="sidebar__nav-item">
          <NavLink
            exact
            activeClassName="sidebar__nav-link active"
            className="sidebar__nav-link"
            to="/admin/ticket"
          >
            <span>
              <i className="fas fa-ticket-alt"></i>
            </span>
            <span>Ticket</span>
          </NavLink>
        </li>
        <li className="sidebar__nav-item">
          <NavLink
            exact
            activeClassName="sidebar__nav-link active"
            className="sidebar__nav-link"
            to="/admin/users"
          >
            <span>
              <i className="fas fa-user-friends"></i>
            </span>
            <span>Users</span>
          </NavLink>
        </li>
        {/* <li className="sidebar__nav-item" onClick={handleNavItemActive}>
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
              <NavLink
                exact
                activeClassName="sidebar__nav-link active"
                to="/admin/member"
              >
                Member
              </NavLink>
            </li>
            <li className="sidebar__nav-subitem">
              <NavLink
                exact
                activeClassName="sidebar__nav-link active"
                to="/admin/staff"
              >
                Staff
              </NavLink>
            </li>
          </ul>
        </li> */}
      </nav>
    </div>
  );
}

export default SideBar;
