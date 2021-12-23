import React, { useRef, useEffect, useState } from "react";

import ProfileForm from "./ProfileForm";
import History from "./BookingHistory";
import API from "../../API";
import "./ProfilePage.scss";

function ProfilePage(props) {
  const tabRef = useRef();
  const [tab, setTab] = useState("available");

  const userInfo = JSON.parse(localStorage.getItem("user_info"));
  const today = new Date();

  //State
  const [listBookingAvailable, setListBookingAvailable] = useState();
  const [listBookingExpired, setListBookingExpired] = useState();

  useEffect(() => {
    const getBookingHistory = async () => {
      const url = `/ticket/account/${userInfo.id}`;
      const res = await API.get(url);
      const listAvailable = [];
      const listExpired = [];
      if (res) {
        res.forEach((item) => {
          if (checkExpireTicket(item.date, item.time_end.slice(0, 5))) {
            listExpired.push(item);
          } else {
            listAvailable.push(item);
          }
        });
        setListBookingAvailable(listAvailable);
        setListBookingExpired(listExpired);
      }
    };
    getBookingHistory();
    // eslint-disable-next-line
  }, [userInfo.id]);

  //Functions
  const handleTabActive = (e) => {
    const tabUnderline = tabRef.current;
    const tabWidth = e.target.offsetWidth;
    tabUnderline.style.transform = `translateX(${
      e.target.dataset.index * tabWidth
    }px)`;
    if (e.target.dataset.index === "1") {
      setTab("expired");
    } else if (e.target.dataset.index === "2") {
      setTab("account");
    } else setTab("available");
  };

  const checkExpireTicket = (date, timeEnd) => {
    const ticketEnd = timeEnd.split(":");

    if (parseInt(date.slice(8)) < today.getDate()) {
      return true;
    } else if (parseInt(date.slice(8)) === today.getDate()) {
      if (
        parseInt(ticketEnd[0]) < today.getHours() ||
        (parseInt(ticketEnd[0]) === today.getHours() &&
          parseInt(ticketEnd[1]) < today.getMinutes())
      ) {
        return true;
      }
    }
    return false;
  };

  //Render
  return (
    <section className="profile__section">
      <div className="container profile__container">
        <div className="profile__bar">
          <div
            className="profile__tab"
            data-index="0"
            onClick={handleTabActive}
          >
            Available
          </div>
          <div
            className="profile__tab"
            data-index="1"
            onClick={handleTabActive}
          >
            Expired
          </div>
          <div
            className="profile__tab"
            data-index="2"
            onClick={handleTabActive}
          >
            Account
          </div>
          <div className="profile__underline" ref={tabRef}></div>
        </div>
        {tab === "account" && <ProfileForm />}
        {tab === "available" && <History listTicket={listBookingAvailable} />}
        {tab === "expired" && (
          <History listTicket={listBookingExpired} type="expired" />
        )}
      </div>
    </section>
  );
}

export default ProfilePage;
