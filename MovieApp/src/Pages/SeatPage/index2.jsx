import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import Banner from "../../components/Layouts/Banner";
import TicketSummary from "../../components/Ticket/TicketSummary";
import Context from "../../Context/Context";
import API from "../../API";
import "./SeatPage.scss";

const subtitle = "Get your seats and enjoy the movie with friends";

function SeatPage(props) {
  const listRow = ["A", "B", "C", "D", "E", "F", "G"];
  const listCol = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const { ticketInfo } = useContext(Context);

  const history = useHistory();

  const [selectingSeats, setSelectingSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  console.log("selected seats", selectedSeats);

  const getSelectedSeats = async () => {
    try {
      const url = `http://localhost:8081/ticket/location/list?idShowtime=${ticketInfo.showtimeId}`;
      const res = await API.get(url);
      setSelectedSeats(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSelectedSeats();
  }, [ticketInfo.showtimeId]);

  const handleSelectSeat = (e) => {
    const selectingSeat = e.target.dataset.value;
    if (selectingSeats.includes(selectingSeat)) {
      const currentSeats = selectingSeats.filter(
        (seat) => seat !== selectingSeat
      );
      setSelectingSeats(currentSeats);
      return;
    }
    setSelectingSeats((prevSelectingSeats) => {
      return [...prevSelectingSeats, selectingSeat];
    });
  };

  const handleSeatPlanProceed = () => {
    history.push("/payment");
  };

  return (
    <>
      <Banner animate={false} subtitle={subtitle} page="seat" />
      <TicketSummary />
      <section className="seat__section">
        <div className="container seat__container">
          <div className="screen-area">
            <div className="screen-title">Screen</div>
            <div className="screen-img">
              <img src="/images/screen-thumb.png" alt="" />
            </div>
          </div>
          <div className="seat-area">
            {listRow.reverse().map((row, indexRow) => (
              <div className="seat-row" key={row}>
                <span>{row}</span>
                <ul className="seat-list">
                  {listCol.map((col, indexCol) => {
                    if (selectingSeats.includes((row + indexCol).toString())) {
                      return (
                        <li
                          className="seat-img selecting "
                          key={row + indexCol}
                          data-value={row + indexCol}
                          onClick={handleSelectSeat}
                        >
                          {row + indexCol}
                        </li>
                      );
                    } else
                      return (
                        <li
                          className={`seat-img ${"selected"}`}
                          key={row + indexCol}
                          data-value={row + indexCol}
                          onClick={handleSelectSeat}
                        >
                          {console.log(indexRow + 1, indexCol + 1)}
                          {row + indexCol}
                        </li>
                      );
                  })}
                </ul>
                <span>{row}</span>
              </div>
            ))}
          </div>
          <div className="btn btn-proceed" onClick={handleSeatPlanProceed}>
            Proceed
          </div>
          <ul className="seat-guide">
            <li className="seat-status seat-status--normal">
              <span></span>
              <span>Normal</span>
            </li>
            <li className="seat-status seat-status--selecting">
              <span className="selecting"></span>
              <span>Selecting</span>
            </li>
            <li className="seat-status seat-status--selected">
              <span className="selected"></span>
              <span>Selected</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default SeatPage;
