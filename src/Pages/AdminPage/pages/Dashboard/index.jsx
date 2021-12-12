import React, { useState, useEffect } from "react";

import Dashbox from "../../components/Dashbox";
import API from "../../../../API";
import "./Dashboard.scss";

function Dashboard() {
  const [listMovie, setListMovie] = useState();
  useEffect(() => {
    const getMovieList = async () => {
      const url = `/film/list`;
      const res = await API.get(url);
      if (res) {
        console.log(res);
        setListMovie(res);
      }
    };

    getMovieList();
  }, []);
  return (
    <section className="dashboard__home">
      <Dashbox name="movies" info={listMovie} />
      <Dashbox name="ticket" />
      <Dashbox name="revenue" />
      <Dashbox name="showtime" />
      <Dashbox name="staff" />
      <Dashbox name="member" />
    </section>
  );
}

export default Dashboard;
