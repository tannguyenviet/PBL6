import React from "react";
import "./PaymentPage.scss";
import Banner from "../../components/Layouts/Banner";

function PaymentPage(props) {
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
                <span>Movie 1</span>
              </div>
              <div className="payment__ticket-item">
                <span>Date</span>
                <span>20-11-2021</span>
              </div>
              <div className="payment__ticket-item">
                <span>Showtime</span>
                <span>20:00 - 22:30</span>
              </div>
              <div className="payment__ticket-item">
                <span>Seat</span>
                <span>G11 - VIP</span>
              </div>
              <div className="payment__ticket-item">
                <span>Theater</span>
                <span>Galaxy Da Nang</span>
              </div>
              <div className="payment__ticket-item">
                <span>Tickets</span>
                <span>2</span>
              </div>
            </div>
            <div className="payment__part payment__price">
              <div className="payment__price-item">
                <span>Tickets Price</span>
                <span>$150</span>
              </div>
              <div className="payment__price-item">
                <span>Member</span>
                <span>-$10</span>
              </div>
            </div>
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
                <input type="text" className="payment__user-name" />
              </div>
              <div className="payment__user-group">
                <label htmlFor="">Email</label>
                <input type="text" className="payment__user-name" />
              </div>
              <div className="payment__user-group">
                <label htmlFor="">Phone</label>
                <input type="text" className="payment__user-name" />
              </div>
            </div>
            <div className="payment__methods">
              <div className="payment__title">Payment Methods</div>
              <ul className="payment__methods-list">
                <li className="payment__methods-item">
                  <i class="far fa-credit-card"></i>
                  <span>Credit Card</span>
                </li>
                <li className="payment__methods-item">
                  <i class="fab fa-cc-visa"></i>
                  <span>Visa Card</span>
                </li>
                <li className="payment__methods-item">
                  <i class="fab fa-cc-paypal"></i>
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
