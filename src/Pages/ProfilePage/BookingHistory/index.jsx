import React, { useState } from "react";
import PropTypes from "prop-types";

import "./BookingHistory.scss";

function History({ listTicket, type }) {
  const [hisorySelected, setHistorySelected] = useState();

  const handleHistoryClicked = (item) => {
    setHistorySelected(item);
  };

  //Render
  return (
    <section className="history__section">
      <div className="history__filter"></div>
      <div className="history__container">
        <div className="history__list">
          {listTicket &&
            listTicket.map((item) => {
              return (
                <div
                  className={`history__ticket ${
                    type === "expired" ? "invalid" : ""
                  } ${
                    hisorySelected && item.id === hisorySelected.id
                      ? "active"
                      : ""
                  }`}
                  key={item.id}
                  onClick={() => handleHistoryClicked(item)}
                >
                  <div className="history__ticket-content">
                    <h4 className="history__ticket-film">{item.film_name}</h4>
                    <span className="history__ticket-date">
                      Date: {item.date}
                    </span>
                    <span className="history__ticket-showtime">
                      {item.time_start.slice(0, 5)} -{" "}
                      {item.time_end.slice(0, 5)}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
        {hisorySelected ? (
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
        ) : (
          <div className="history__preview">
            <img
              src="/images/ticket_placeholder.png"
              alt="detail-ticket"
              className="history__preview-img"
            />
          </div>
        )}
      </div>
    </section>
  );
}

History.propTypes = {
  listTicket: PropTypes.array,
  type: PropTypes.string,
};

History.defaultProps = {
  listTicket: null,
  type: null,
};

export default History;
