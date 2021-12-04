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
            src="https://i.pinimg.com/564x/c4/a1/e6/c4a1e6d2af85b003575f96e4484ac9e9.jpg"
            alt="movide-img"
          />
        </div>
        <div className="showtime__movie-content">
          <h4 className="showtime__movie-name">Mr Bean</h4>
          <span className="showtime__movie-type">Comedy</span>
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
