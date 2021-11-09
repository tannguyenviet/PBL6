import React from "react";
import { useHistory } from "react-router-dom";
import "./ShowTime.scss";

function ShowTime() {
  const history = useHistory();
  const handleShowTimeClicked = (e) => {
    console.log(e.target.innerText);
    history.push("/seat");
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
        <ul className="showtime__group">
          <li onClick={handleShowTimeClicked}>17:00</li>
          <li onClick={handleShowTimeClicked}>18:30</li>
          <li onClick={handleShowTimeClicked}>19:30</li>
          <li onClick={handleShowTimeClicked}>20:00</li>
        </ul>
      </div>
    </div>
  );
}

export default ShowTime;
