import React, { useState, useContext } from "react";
import Context from "../../Context/Context";

import Banner from "../../components/Layouts/Banner";
import API from "../../API";
import "./PaymentPage.scss";

function PaymentPage(props) {
  const context = useContext(Context);
  const { ticketInfo } = context;

  const [qrCode, setQrCode] = useState();

  const userInfo = JSON.parse(localStorage.getItem("user_info"));
  const token = JSON.parse(localStorage.getItem("token"));
  const { id: account_id, email, name, phone } = userInfo;
  const ticketInfoSession = JSON.parse(sessionStorage.getItem("ticket_info"));
  const { movie, showtime, theater, locations, city, date, priceType } =
    ticketInfo || ticketInfoSession;

  const countTicketsPrice = (pricePerTicket, ticketAmount) => {
    return pricePerTicket * ticketAmount;
  };

  const parseISOLocalTime = () => {
    var tzoffset = new Date().getTimezoneOffset() * 60000; //offset in milliseconds
    var localISOTime = new Date(new Date() - tzoffset).toISOString();
    return localISOTime;
  };

  const totalPrice = countTicketsPrice(priceType.price, locations.length);
  const timeBooking = parseISOLocalTime();

  const handleCreateTicket = async () => {
    const url = "/ticket/create";
    const data = {
      amount: locations.length,
      price: totalPrice,
      show_time_id: showtime.id,
      location: locations.join(","),
      time_booking: timeBooking,
      account_id,
    };
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    console.log(data);
    const res = await API.post(url, data, config);
    setQrCode(res.ticketQR);
  };
  return (
    <>
      <Banner animate={false} page="payment" />
      <section className="payment__section">
        <div className="container payment__container">
          <div className="payment__left">
            <h2 className="payment__title">Booking Summary</h2>
            <div className="payment__part payment__ticket">
              <div className="payment__ticket-item">
                <span>Movie Name</span>
                <span>{movie.label}</span>
              </div>
              <div className="payment__ticket-item">
                <span>Date</span>
                <span>{date}</span>
              </div>
              <div className="payment__ticket-item">
                <span>Showtime</span>
                <span>
                  {showtime.time_start.substr(11, 5)}
                  {" -- "}
                  {showtime.time_end.substr(11, 5)}
                </span>
              </div>
              <div className="payment__ticket-item">
                <span>Seat</span>
                <span>{locations.join(",")}</span>
              </div>
              <div className="payment__ticket-item">
                <span>Amount</span>
                <span>{locations.length}</span>
              </div>
              <div className="payment__ticket-item">
                <span>Theater</span>
                <span>{theater.label}</span>
              </div>
              <div className="payment__ticket-item">
                <span>City</span>
                <span>{city.label}</span>
              </div>
            </div>
            <div className="payment__part payment__price">
              <div className="payment__price-type">
                <span>{priceType.description}</span>
                <span>{priceType.price} VND</span>
              </div>
              <div className="payment__price-item">
                <span>Tickets Price</span>
                <span>{totalPrice} VND</span>
              </div>
              <div className="payment__price-item">
                <span>Member</span>
                <span>-$10</span>
              </div>
            </div>
            {qrCode && (
              <div className="payment__qr">
                <img src={qrCode} alt="NOT FOUND" />
              </div>
            )}
            <div className="payment__total">
              <span>Total price</span>
              <span>$140</span>
            </div>
          </div>
          <div className="payment__right">
            <div className="payment__user">
              <div className="payment__title">Your Information</div>
              <div className="payment__user-group">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  readOnly
                  className="payment__user-name"
                  value={name}
                />
              </div>
              <div className="payment__user-group">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="payment__user-name"
                  readOnly
                  value={email}
                />
              </div>
              <div className="payment__user-group">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  readOnly
                  className="payment__user-name"
                  value={phone}
                />
              </div>
            </div>
            <div className="payment__methods">
              <div className="payment__title">Payment Methods</div>
              <ul className="payment__methods-list">
                <li className="payment__methods-item">
                  <i className="far fa-credit-card"></i>
                  <span>Credit Card</span>
                </li>
                <li className="payment__methods-item">
                  <i className="fab fa-cc-visa"></i>
                  <span>Visa Card</span>
                </li>
                <li
                  className="payment__methods-item"
                  onClick={handleCreateTicket}
                >
                  <i className="fab fa-cc-paypal"></i>
                  <span>Paypal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PaymentPage;
