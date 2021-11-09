import React from "react";
import "./TicketSummary.scss";

function TicketSummary(props) {
  return (
    <section className="ticket__summary">
      <div className="ticket__summary-container">
        <button className="btn btn-back">Back</button>
        <div className="ticket__summary-info">
          <span className="ticket__summary-movie">Movie 1</span>
          <span className="ticket__summary-date">Mon, SEP 09 2020</span>
        </div>
        <div className="ticket__summary-showtime">
          <span>20:00</span>
        </div>
      </div>
    </section>
  );
}

export default TicketSummary;
