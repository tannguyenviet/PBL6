import React, { useContext } from "react";
import Context from "../../../Context/Context";
import PropTypes from "prop-types";
import "./ShowTime.scss";

function ShowTime(props) {
  const listShowTime = props.showtime;
  const day = listShowTime
    ? listShowTime[0]?.time_start.slice(0, 10)
    : listShowTime;
  const movieInfo = props.movieInfo;

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
      {movieInfo && (
        <div className="showtime__movie">
          <div className="showtime__movie-img">
            <img src={movieInfo.image} alt={movieInfo.name} />
          </div>
          <div className="showtime__movie-content">
            <h4 className="showtime__movie-name">{movieInfo.name}</h4>
            <span className="showtime__movie-duration">
              {movieInfo.duration} mins
            </span>
          </div>
        </div>
      )}
      <div className="showtime__time">
        <div className="showtime__day">
          {day && new Date(day).toString().slice(0, 3)}
        </div>
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

ShowTime.propTypes = {
  showtime: PropTypes.array,
  movieInfo: PropTypes.object,
};

ShowTime.defaultProps = {
  showtime: null,
  movieInfo: null,
};

export default ShowTime;
