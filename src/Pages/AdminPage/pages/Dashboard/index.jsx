import React, { useState, useEffect } from "react";

import Dashbox from "../../components/Dashbox";
import Chart from "../../components/Chart";
import API from "../../../../API";
import "./Dashboard.scss";

function Dashboard() {
  const [listMovie, setListMovie] = useState([]);
  const [listShowtime, setListShowtime] = useState([]);
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    const getMovieList = async () => {
      const url = `/film/list`;
      const res = await API.get(url);
      if (res) {
        setListMovie(res);
      }
    };

    getMovieList();
  }, []);

  useEffect(() => {
    const getShowtimeList = async () => {
      const url = `/showtime/searchForAdmin`;
      const res = await API.get(url);
      if (res) {
        setListShowtime(res);
      }
    };

    getShowtimeList();
  }, []);

  useEffect(() => {
    const getUserList = async () => {
      const url = `/account/list`;
      const res = await API.get(url);
      if (res) {
        setListUser(res);
      }
    };

    getUserList();
  }, []);

  //Render
  return (
    <section className="dashboard__section">
      <div className="dashboard__home">
        <Dashbox name="movies" info={listMovie && listMovie.total_results} />
        {/* <Dashbox name="ticket" />
      <Dashbox name="revenue" /> */}
        <Dashbox name="showtime" info={listShowtime.length} />
        <Dashbox name="users" info={listUser.length} />
      </div>
      <div className="dashboard__chart">
        <Chart />
        <Chart />
      </div>
    </section>
  );
}

export default Dashboard;
