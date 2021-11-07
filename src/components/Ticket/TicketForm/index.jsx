import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TicketForm.scss";

const getCurrentDate = () => {
  var date = new Date();
  return date.toISOString().substr(0, 10);
};

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
          <select name="city" id="">
            <option value="danang">Đà Nẵng</option>
            <option value="hanoi">Hà Nội</option>
            <option value="hcm">Hồ Chí Minh</option>
          </select>
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
        <div className="type">Cinema</div>
        <div className="select-bar">
          <select name="city" id="">
            <option value="">Rạp 1</option>
            <option value="">Rạp 2</option>
            <option value="">Rạp 3</option>
          </select>
        </div>
      </div>
    </form>
  );
}

TicketForm.propTypes = {
  search: PropTypes.bool,
};

export default TicketForm;

/*
                  <div className="current">
                    <span>Rạp 1</span>
                    <i className="fas fa-caret-down"></i>
                  </div>
                  <ul className="list-data">
                    <li>Rạp 1</li>
                    <li>Rạp 2</li>
                    <li>Rạp 3</li>
                  </ul>
 */
/* <div className="select-bar">
                  <div className="current">
                    <span>Đà Nẵng</span>
                    <i className="fas fa-caret-down"></i>
                  </div>
                  <ul className="list-data">
                    <li>Đà Nẵng</li>
                    <li>Hồ Chí Minh</li>
                    <li>Hà Nội</li>
                  </ul>
                </div> */
