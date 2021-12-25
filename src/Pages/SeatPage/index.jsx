import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import Banner from "../../components/Layouts/Banner";
import TicketSummary from "../../components/Ticket/TicketSummary";
import Context from "../../Context/Context";
import API from "../../API";
import "./SeatPage.scss";

const subtitle = "Get your seats and enjoy the movie with friends";

function SeatPage() {
  const listRow = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const listCol = [1, 2, 3, 4, 5, 6, 7, 8];

  const { ticketInfo, setTicketInfo } = useContext(Context);
  const history = useHistory();

  const [selectingSeats, setSelectingSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [priceType, setPriceType] = useState({});
  console.log("SELECTED SEAT", selectedSeats);

  //Get Selected Seat
  useEffect(() => {
    const getSelectedSeats = async () => {
      try {
        const url = `/ticket/location/list?idShowtime=${ticketInfo.showtime.id}`;
        const res = await API.get(url);
        if (res && Array.isArray(res)) {
          setSelectedSeats(res);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    getSelectedSeats();
  }, [ticketInfo.showtime.id]);

  //Get Price Type
  useEffect(() => {
    const getPriceTypes = async () => {
      try {
        const url = `/pricetype/list`;
        const res = await API.get(url);
        const listPriceType = res;
        const price = listPriceType.find(
          (p) => p.id === ticketInfo.showtime.price_type_id
        );
        setPriceType(price);
      } catch (error) {
        toast.error(error.mesage);
      }
    };

    getPriceTypes();
    // eslint-disable-next-line
  }, []);

  //Functions
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

  //Handle Forward to Payment Page
  const handleSeatPlanProceed = () => {
    if (selectingSeats.length > 0) {
      const newTicketInfo = {
        ...ticketInfo,
        locations: selectingSeats,
        priceType,
      };
      setTicketInfo(newTicketInfo);
      sessionStorage.setItem("ticket_info", JSON.stringify(newTicketInfo));
      history.push("/payment");
    } else {
      toast.error("Please select your seats");
    }
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
            {listRow.map((row) => (
              <div className="seat-row" key={row}>
                <span>{row}</span>
                <ul className="seat-list">
                  {listCol.map((col) => {
                    if (selectingSeats.includes((row + col).toString())) {
                      return (
                        <li
                          className="seat-img selecting "
                          key={row + col}
                          data-value={row + col}
                          onClick={handleSelectSeat}
                        >
                          {row + col}
                        </li>
                      );
                    } else
                      return (
                        <li
                          className={`seat-img ${
                            selectedSeats.indexOf(row + col) !== -1 &&
                            "selected"
                          }`}
                          key={row + col}
                          data-value={row + col}
                          onClick={handleSelectSeat}
                        >
                          {row + col}
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
