import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../../../Context/Context";
import "./TicketSummary.scss";

function TicketSummary(props) {
  const history = useHistory();
  const { ticketInfo } = useContext(Context);
  const { date, movie, showtime } = ticketInfo;

  const handleBack = () => {
    history.goBack();
  };
  return (
    <section className="ticket__summary">
      <div className="ticket__summary-container">
        <button className="btn btn-back" onClick={handleBack}>
          Back
        </button>
        <div className="ticket__summary-info">
          <span className="ticket__summary-movie">{movie.label}</span>
          <span className="ticket__summary-date">{date}</span>
        </div>
        <div className="ticket__summary-showtime">
          <span>{showtime.time_start.substr(11, 5)}</span>
        </div>
      </div>
    </section>
  );
}

export default TicketSummary;
