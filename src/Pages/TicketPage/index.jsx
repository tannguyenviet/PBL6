import React from "react";

import Banner from "../../components/Layouts/Banner";
import TicketForm from "../../components/Ticket/TicketForm/";
import ShowTime from "../../components/Movie/ShowTime";

const subtitle =
  "Buy movie tickets in advance, find movie show times, watch trailer, read movie reviews and much more";

function TicketPage(props) {
  return (
    <>
      <Banner animate={false} subtitle={subtitle} page="ticket" />
      <div className="ticket-form__section">
        <div className="container ticket-form__container">
          <TicketForm />
        </div>
      </div>
      <div className="showtime__section">
        <div className="container showtime__container">
          <div className="showtime__list">
            <ShowTime />
            <ShowTime />
            <ShowTime />
            <ShowTime />
            <ShowTime />
          </div>
        </div>
      </div>
    </>
  );
}

export default TicketPage;
