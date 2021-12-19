import React, { useState, useEffect } from "react";
import Select from "react-select";

import Dashbox from "../../components/Dashbox";
import Chart from "../../components/Chart";
import API from "../../../../API";
import {
  style,
  theme,
} from "../../../../components/Ticket/TicketForm/TicketFormSetup";
import "./Dashboard.scss";

function Dashboard() {
  const [listMovie, setListMovie] = useState([]);
  const [listShowtime, setListShowtime] = useState([]);
  const [listUser, setListUser] = useState([]);
  const [listTheater, setListTheater] = useState([]);
  const [theaterSelected, setTheaterSelected] = useState();
  // const [chartFilter, setChartFilter] = useState({});

  //Get movie list
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

  //Get showtime list
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

  //Get theater list
  useEffect(() => {
    const getTheaterList = async () => {
      const url = `/theater/list`;
      const res = await API.get(url);
      if (res) {
        const theaterOptions = res.map((theater) => {
          return { id: theater.id, label: theater.name, city: theater.city };
        });
        setListTheater(theaterOptions);
      }
    };

    getTheaterList();
  }, []);

  //Get user list
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

  //Functions
  const handleTheaterChange = (option) => {
    console.log(option);
  };

  const handleDateChange = () => {};
  //Render
  return (
    <section className="dashboard__section">
      <div className="dashboard__home">
        <Dashbox name="movies" info={listMovie && listMovie.total_results} />
        <Dashbox name="showtime" info={listShowtime.length} />
        <Dashbox name="users" info={listUser.length} />
      </div>
      <div className="dashboard__chart">
        <div className="chart__filter">
          <div className="chart__filter-item">
            <input type="date" name="time_start" onChange={handleDateChange} />
          </div>
          <div className="chart__filter-item">
            <input type="date" name="time_end" onChange={handleDateChange} />
          </div>
          <div className="chart__filter-item">
            <Select
              placeholder="Theater..."
              options={listTheater}
              styles={style}
              theme={theme}
              onChange={handleTheaterChange}
            />
          </div>
        </div>
        <Chart />
      </div>
    </section>
  );
}

export default Dashboard;
