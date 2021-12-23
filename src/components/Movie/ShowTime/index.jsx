import React, { useContext } from "react";
import Context from "../../../Context/Context";
import "./ShowTime.scss";

function ShowTime(props) {
  const listShowTime = props.showtime;

  const { ticketInfo, setTicketInfo } = useContext(Context);

  //Functions
  const handleToSeatPage = (showtime) => {
    const newTicketInfo = {
      ...ticketInfo,
      showtime,
    };
    setTicketInfo(newTicketInfo);
    sessionStorage.setItem("ticket_info", JSON.stringify(newTicketInfo));
  };

  return (
    <div className="showtime__info">
      <div className="showtime__movie">
        <div className="showtime__movie-img">
          <img
            src="https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
            alt="movide-img"
          />
        </div>
        <div className="showtime__movie-content">
          <h4 className="showtime__movie-name">SPIDER-MAN: NO WAY HOME</h4>
          <span className="showtime__movie-duration">128 mins</span>
        </div>
      </div>
      <div className="showtime__time">
        <div className="showtime__day">Monday</div>
        <div className="showtime__group">
          {listShowTime &&
            listShowTime.map((st) => (
              <button
                form="search-ticket__form"
                type="submit"
                key={st.id}
                onClick={() => handleToSeatPage(st)}
              >
                {st.time_start.substr(11, 5)}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ShowTime;
