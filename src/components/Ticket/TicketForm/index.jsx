import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory, useLocation } from "react-router-dom";
import Select from "react-select";

import "./TicketForm.scss";
import Context from "../../../Context/Context";
import ToastMessage from "../../Layouts/ToastMessage";
import { style, theme } from "./TicketFormSetup";
import API from "../../../API";

// const listCity = [
//   { value: "danang", label: "Da Nang" },
//   { value: "hcm", label: "Ho Chi Minh" },
//   { value: "hanoi", label: "Ha Noi" },
// ];

// const listTheater = [
//   { value: "1", label: "Rap 1" },
//   { value: "2", label: "Rap 2" },
//   { value: "3", label: "Rap 3" },
// ];

function TicketForm(props) {
  //Props
  const { nowPlayingList } = props;
  const history = useHistory();
  const location = useLocation();

  //States
  //Bind ticket info to Input of 'React select'
  const [ticketSelected, setTicketSelected] = useState(() => {
    const ticketInfo = JSON.parse(sessionStorage.getItem("ticket_info"));
    if (ticketInfo) {
      const { city, theater } = ticketInfo;
      const theaterSelected = theater;
      const citySelected = city;
      return { theater: theaterSelected, city: citySelected };
    }
  });
  const [listCity, setListCity] = useState([]);
  const [cityName, setCityName] = useState(() => {
    const ticketInfo = JSON.parse(sessionStorage.getItem("ticket_info"));
    if (ticketInfo) {
      return ticketInfo.city.value;
    }
    return "";
  });
  const [listTheater, setListTheater] = useState([]);

  //Active toast
  const [toastMessage, setToastMessage] = useState();

  //context
  const context = useContext(Context);
  const { ticketInfo, setTicketInfo } = context;
  console.log(ticketInfo);

  //Get Cities
  useEffect(() => {
    const getListCity = async () => {
      const url = "/theater/city/list";
      const res = await API.get(url);
      if (res.status === 200) {
        const listCity = res.data.map((c) => ({
          value: c.city,
          label: c.city,
        }));
        setListCity(listCity);
      } else return;
    };

    getListCity();
  }, []);

  //Get Theater By City
  useEffect(() => {
    const getTheatersByCity = async (name) => {
      const url = `/theater/search?cityName=${name}`;
      const res = await API.get(url);
      if (res.status === 200) {
        const listTheater = res.data.map((t) => ({
          value: t.id,
          label: t.name,
        }));
        setListTheater(listTheater);
      } else return;
    };

    cityName && getTheatersByCity(cityName);
  }, [cityName]);

  //Get movie list for movie select options
  const listNowPlaying =
    nowPlayingList &&
    nowPlayingList.map((movie) => {
      return { value: movie.id, label: movie.name };
    });

  //Functions
  const handleDateChange = (e) => {
    //If reload in detail page -> data will be refresh to origin => save to session
    if (location.pathname.includes("movie")) {
      const newTicketInfo = {
        ...ticketInfo,
        [e.target.name]: e.target.value,
      };
      sessionStorage.setItem("ticket_info", JSON.stringify(newTicketInfo));
    }

    setTicketInfo({
      ...ticketInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleDropListChange = (value, { name }) => {
    if (name === "city") {
      setCityName(value.value);
    }

    //If reload in detail page -> data will be refresh to origin => save to session
    if (location.pathname.includes("movie")) {
      const newTicketInfo = {
        ...ticketInfo,
        [name]: value,
      };
      sessionStorage.setItem("ticket_info", JSON.stringify(newTicketInfo));
    }

    setTicketInfo({
      ...ticketInfo,
      [name]: value,
    });

    setTicketSelected({
      ...ticketSelected,
      [name]: { value: value.value, label: value.label },
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { date, city, movie, theater } = ticketInfo;
    let flag = true;

    if (!theater) {
      setToastMessage({
        type: "error",
        mess: "Theater is not selected",
      });
      flag = false;
    }

    if (!date) {
      setToastMessage({
        type: "error",
        mess: "Date is not selected",
      });
      flag = false;
    }

    if (!city) {
      setToastMessage({
        type: "error",
        mess: "City is not selected",
      });
      flag = false;
    }

    if (!movie && location.pathname === "/") {
      setToastMessage({
        type: "error",
        mess: "Movie is not selected",
      });
      flag = false;
    }

    if (flag) {
      const userInfo = JSON.parse(localStorage.getItem("user_info"));
      if (!userInfo) {
        setToastMessage({
          type: "error",
          mess: "Please login to get your ticket",
        });
      } else {
        sessionStorage.setItem("ticket_info", JSON.stringify(ticketInfo)); //Form valid -> save as sessionStore
        location.pathname === "/"
          ? history.push(`/movie/detail/${ticketInfo.movie.value}`) // At home -> to detail page
          : history.push("/seat"); // at detail -> to seat page
      }
    }
  };

  //Render
  return (
    <form
      className="search-ticket__form"
      id="search-ticket__form"
      onSubmit={handleFormSubmit}
    >
      {toastMessage && (
        <ToastMessage mess={toastMessage} setMess={setToastMessage} />
      )}
      {props.search && (
        <div className="form-group">
          <div className="select-bar">
            <Select
              name="movie"
              placeholder="Select movie"
              options={listNowPlaying}
              styles={style}
              theme={theme}
              onChange={handleDropListChange}
            />
          </div>
        </div>
      )}
      <div className="form-group">
        <div className="thumb">
          <img src="/images/icons/city.png" alt="city-thumb" />
        </div>
        <div className="type">City</div>
        <div className="select-bar">
          <Select
            name="city"
            placeholder="Select city"
            options={listCity}
            styles={style}
            value={ticketSelected && ticketSelected.city}
            theme={theme}
            onChange={handleDropListChange}
          />
        </div>
      </div>
      <div className="form-group">
        <div className="thumb">
          <img src="/images/icons/date.png" alt="date-thumb" />
        </div>
        <div className="type">Date</div>
        <input
          type="date"
          name="date"
          value={ticketInfo.date}
          onChange={handleDateChange}
        />
      </div>
      <div className="form-group">
        <div className="thumb">
          <img src="/images/icons/cinema.png" alt="cinema-thumb" />
        </div>
        <div className="type">Theater</div>
        <div className="select-bar">
          <Select
            name="theater"
            placeholder="Select theater"
            options={listTheater}
            styles={style}
            value={ticketSelected && ticketSelected.theater}
            theme={theme}
            onChange={handleDropListChange}
          />
        </div>
      </div>
    </form>
  );
}

TicketForm.propTypes = {
  search: PropTypes.bool,
};

export default React.memo(TicketForm);

//Form search movies
// <div className="form-group search">
//   <input type="text" placeholder="Search for Movies" />
//   <span>
//     <i className="fas fa-search"></i>
//   </span>
// </div>

//-------------------------------------

/* <select name="city" id="">
            <option value="">Rạp 1</option>
            <option value="">Rạp 2</option>
            <option value="">Rạp 3</option>
          </select> */
