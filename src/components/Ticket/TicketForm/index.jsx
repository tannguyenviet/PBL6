import React, { useState } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import "./TicketForm.scss";
import { style, theme } from "./TicketFormSetup";

const getCurrentDate = () => {
  var date = new Date();
  return date.toISOString().substr(0, 10);
};

const listCity = [
  { value: "danang", label: "Da Nang" },
  { value: "hcm", label: "Ho Chi Minh" },
  { value: "hanoi", label: "Ha Noi" },
];

const listTheater = [
  { value: "1", label: "Rap 1" },
  { value: "2", label: "Rap 2" },
  { value: "3", label: "Rap 3" },
];

function TicketForm(props) {
  //States
  const [ticketForm, setTicketForm] = useState(() => {
    return { date: getCurrentDate() };
  });

  //Functions
  const handleDateChange = (e) => {
    setTicketForm({
      [e.target.name]: e.target.value,
    });
  };

  const handleDropListChange = (value) => {
    console.log(value);
  };

  return (
    <form className="search-ticket__form">
      {props.search && (
        <div className="form-group search">
          <input type="text" placeholder="Search for Movies" />
          <span>
            <i className="fas fa-search"></i>
          </span>
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
          value={ticketForm.date}
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

export default TicketForm;

/* <select name="city" id="">
            <option value="">Rạp 1</option>
            <option value="">Rạp 2</option>
            <option value="">Rạp 3</option>
          </select> */
