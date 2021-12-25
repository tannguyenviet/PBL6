import React, { useState, useEffect, useMemo } from "react";
import Select from "react-select";

import useLoading from "../../../../hooks/useLoading";
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
  const [listNowPlaying, setListNowPlaying] = useState([]);
  const [listShowtime, setListShowtime] = useState([]);
  const [listUser, setListUser] = useState([]);
  const [listTheater, setListTheater] = useState([]);
  const [theaterSelected, setTheaterSelected] = useState();
  const [movieSelected, setMovieSelected] = useState();
  const [chartFilter, setChartFilter] = useState({
    idTheater: "",
    idFilm: "",
    date_start: AddOrSubractDays(new Date(), 1, false),
    date_end: new Date().toISOString().slice(0, 10),
  });
  const [theaterRevenue, setTheaterRevenue] = useState([]);
  const [filmRevenue, setFilmRevenue] = useState([]);
  const [showLoading, hideLoading] = useLoading();

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

  //Get now playing
  useEffect(() => {
    const getMovieList = async () => {
      const url = `/film/now-playing`;
      const res = await API.get(url);
      if (res) {
        const listPlaying = res.map((r) => ({
          id: r.id,
          label: r.name,
        }));
        setListNowPlaying(listPlaying);
        setMovieSelected(listPlaying[0]);
        setChartFilter((prev) => ({
          ...prev,
          idFilm: listPlaying[0].id,
        }));
      }
    };

    getMovieList();
    // eslint-disable-next-line
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
          return { id: theater.id, label: theater.name + " - " + theater.city };
        });
        setListTheater(theaterOptions);
        setTheaterSelected(theaterOptions[0]);
        setChartFilter((prev) => ({
          ...prev,
          idTheater: theaterOptions[0].id,
        }));
      }
    };

    getTheaterList();
    // eslint-disable-next-line
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

  //Get revenue by idTheater in time range
  useEffect(() => {
    const getRevenueByTheaterInTimeRange = async () => {
      try {
        showLoading();
        const { idTheater, date_start, date_end } = chartFilter;
        const url = `/ticket/revenue?idTheater=${idTheater}&dateRange=${date_start}_${date_end}`;
        const res = await API.get(url);
        if (res) {
          const revenueList = res.map((re) => ({
            name: re.date.slice(5, 10),
            theater: re.revenue,
          }));
          setTheaterRevenue(revenueList);
          hideLoading();
        }
      } catch (err) {
        hideLoading();
      }
    };
    getRevenueByTheaterInTimeRange();
    // eslint-disable-next-line
  }, [chartFilter]);

  //Get Revenue By Film In TimeRange
  useEffect(() => {
    const getRevenueByFilmInTimeRange = async () => {
      try {
        showLoading();
        const { idFilm, date_start, date_end } = chartFilter;
        const url = `/ticket/revenue?idFilm=${idFilm}&dateRange=${date_start}_${date_end}`;
        const res = await API.get(url);
        if (res) {
          const revenueList = res.map((re) => ({
            film: re.revenue,
          }));
          setFilmRevenue(revenueList);
          hideLoading();
        }
      } catch (err) {
        hideLoading();
      }
    };
    getRevenueByFilmInTimeRange();
    // eslint-disable-next-line
  }, [chartFilter]);

  //Functions
  const handleTheaterChange = (option) => {
    setChartFilter({ ...chartFilter, idTheater: option.id });
    const selectedTheater = listTheater.find((t) => t.id === option.id);
    setTheaterSelected(selectedTheater);
  };

  const handleMovieChange = (option) => {
    setChartFilter({ ...chartFilter, idFilm: option.id });
    const selectedMovie = listNowPlaying.find((t) => t.id === option.id);
    setMovieSelected(selectedMovie);
  };

  const handleDateFilter = (e) => {
    let dateStart = "";
    switch (e.target.dataset.name) {
      case "1w": {
        dateStart = AddOrSubractDays(new Date(), 7, false);
        break;
      }
      case "1m": {
        dateStart = AddOrSubractDays(new Date(), 30, false);
        break;
      }
      case "3m": {
        dateStart = AddOrSubractDays(new Date(), 90, false);
        break;
      }
      case "1y": {
        dateStart = AddOrSubractDays(new Date(), 365, false);
        break;
      }
      default: {
        dateStart = AddOrSubractDays(new Date(), 1, false);
      }
    }
    setChartFilter({
      ...chartFilter,
      date_start: dateStart,
    });
  };

  function AddOrSubractDays(startingDate, number, add) {
    if (add) {
      const dayAfter = new Date(
        new Date().setDate(startingDate.getDate() + number)
      );
      return dayAfter.toISOString().slice(0, 10);
    } else {
      const dayBefore = new Date(
        new Date().setDate(startingDate.getDate() - number)
      );
      return dayBefore.toISOString().slice(0, 10);
    }
  }

  // console.log("Filter", chartFilter);
  const revenueData = useMemo(() => {
    const finalRevenue = theaterRevenue.map((item, index) => {
      return {
        ...item,
        film: filmRevenue[index]?.film,
      };
    });
    return finalRevenue;
  }, [theaterRevenue, filmRevenue]);

  //Render
  return (
    <section className="dashboard__section">
      <div className="dashboard__home">
        <Dashbox name="movies" info={listMovie && listMovie.total_results} />
        <Dashbox name="showtime" info={listShowtime.length} />
        <Dashbox name="users" info={listUser.length} />
      </div>
      <div className="dashboard__chart">
        <form className="chart__filter">
          <div className="chart__filter-item">
            <span
              data-name="1d"
              className="chart__filter-date"
              onClick={handleDateFilter}
            >
              1D
            </span>
            <span
              data-name="1w"
              className="chart__filter-date"
              onClick={handleDateFilter}
            >
              1W
            </span>
            <span
              data-name="1m"
              className="chart__filter-date"
              onClick={handleDateFilter}
            >
              1M
            </span>
            <span
              data-name="3m"
              className="chart__filter-date"
              onClick={handleDateFilter}
            >
              3M
            </span>
            <span
              data-name="1y"
              className="chart__filter-date"
              onClick={handleDateFilter}
            >
              1Y
            </span>
          </div>
          <div className="chart__filter-item">
            <Select
              options={listTheater}
              value={theaterSelected}
              styles={style}
              theme={theme}
              className="chart__filter-theater"
              onChange={handleTheaterChange}
            />
          </div>
          <div className="chart__filter-item">
            <Select
              options={listNowPlaying}
              styles={style}
              value={movieSelected}
              theme={theme}
              className="chart__filter-theater"
              onChange={handleMovieChange}
            />
          </div>
        </form>
        <Chart data={revenueData} />
      </div>
    </section>
  );
}

export default Dashboard;
