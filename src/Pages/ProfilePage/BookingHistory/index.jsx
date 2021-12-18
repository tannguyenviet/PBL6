import React, { useState, useEffect } from "react";

import API from "../../../API";
import "./BookingHistory.scss";
// import PropTypes from "prop-types";

function History(props) {
  const userInfo = JSON.parse(localStorage.getItem("user_info"));
  const [listBookingHistory, setListBookingHistory] = useState();
  const [hisorySelected, setHistorySelected] = useState();

  useEffect(() => {
    const getBookingHistory = async () => {
      const url = `/ticket/account/${userInfo.id}`;
      const res = await API.get(url);
      if (res) {
        setListBookingHistory(res);
      }
    };
    getBookingHistory();
  }, [userInfo.id]);

  const handleHistoryClicked = (item) => {
    console.log(item);
    setHistorySelected(item);
  };

  //Render
  return (
    <section className="history__section">
      <div className="history__container">
        <div className="history__list">
          {listBookingHistory &&
            listBookingHistory.map((item) => {
              return (
                <div
                  className="history__ticket"
                  key={item.id}
                  onClick={() => handleHistoryClicked(item)}
                >
                  <div className="history__ticket-content">
                    <h4 className="history__ticket-film">{item.film_name}</h4>
                    <span className="history__ticket-date">
                      Date: {item.date}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
        {hisorySelected && (
          <div className="history__preview">
            <div className="history__content">
              <div className="history__detail">
                <span>Movie Name</span>
                <span>{hisorySelected.film_name}</span>
              </div>
              <div className="history__detail">
                <span>Date</span>
                <span>{hisorySelected.date}</span>
              </div>
              <div className="history__detail">
                <span>Showtime</span>
                <span>
                  {hisorySelected.time_start.slice(0, 5)} -{" "}
                  {hisorySelected.time_end.slice(0, 5)}
                </span>
              </div>
              <div className="history__detail">
                <span>Seat</span>
                <span>{hisorySelected.location}</span>
              </div>
              <div className="history__detail">
                <span>Price</span>
                <span>{hisorySelected.price}</span>
              </div>
              <div className="history__detail">
                <span>Theater</span>
                <span>{hisorySelected.theater}</span>
              </div>
              <div className="history__detail">
                <span>City</span>
                <span>{hisorySelected.city}</span>
              </div>
            </div>
            <div className="history__qr">
              <img src={hisorySelected.ticketQR} alt="NOT FOUND" />
            </div>
            <span className="history__notice">
              * Save this QR to get your ticket
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

// History.propTypes = {};

export default History;
