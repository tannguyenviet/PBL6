import React from "react";
import "./SeatPage.scss";
import Banner from "../../components/Layouts/Banner";
import TicketSummary from "../../components/Ticket/TicketSummary";
import { useHistory } from "react-router-dom";

const subtitle = "Get your seats and enjoy the movie with friends";

function SeatPage(props) {
  const listRow = ["A", "B", "C", "D", "E", "F", "G"];
  const listSeat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const history = useHistory();

  const handleSelectSeat = (e) => {
    console.log(e.target.dataset.value);
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
            {listRow.reverse().map((row) => (
              <div className="seat-row" key={row}>
                <span>{row}</span>
                <ul className="seat-list">
                  {listSeat.map((seat, index) => (
                    <li
                      className="seat-img"
                      key={row + index}
                      data-value={row + index}
                      onClick={handleSelectSeat}
                    >
                      {row + index}
                    </li>
                  ))}
                </ul>
                <span>{row}</span>
              </div>
            ))}
          </div>
          <div className="btn btn-proceed" onClick={handleSeatPlanProceed}>
            Proceed
          </div>
          <ul className="seat-guide">
            <li className="seat-status seat-status--selected">
              <span></span>
              <span>Normal</span>
            </li>
            <li className="seat-status seat-status--selected">
              <span className="selecting"></span>
              <span>Selecting</span>
            </li>
            <li className="seat-status seat-status--selected">
              <span className="selected"></span>
              <span>Selected</span>
            </li>
            <li className="seat-status seat-status--selected">
              <span className="vip"></span>
              <span>VIP</span>
            </li>
            <li className="seat-status seat-status--selected">
              <span className="disabled"></span>
              <span>Disabled</span>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default SeatPage;
