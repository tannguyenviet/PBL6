import React from "react";

import "./ShowTime.scss";
// import API from "../../../API";

function ShowTime(props) {
  //Functions
  const listShowTime = props.showtime;
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
              <button form="search-ticket__form" type="submit" key={st.id}>
                {st.time_start.substr(11, 5)}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ShowTime;
