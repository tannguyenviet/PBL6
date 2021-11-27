import React from "react";
import "./Dashboard.scss";
import Dashbox from "../../components/Dashbox";

function Dashboard(props) {
  return (
    <section className="dashboard__home">
      <Dashbox name="movie" />
      <Dashbox name="showtime" />
      <Dashbox name="theater" />
      <Dashbox name="ticket" />
      <Dashbox name="staff" />
      <Dashbox name="user" />
    </section>
  );
}

export default Dashboard;
